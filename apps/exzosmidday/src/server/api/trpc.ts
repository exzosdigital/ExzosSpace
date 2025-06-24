import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { createServerComponentClient } from '@/lib/supabase';
import { db } from '@/server/db';

/**
 * Contexto para as requisições tRPC
 * Esse objeto é criado para cada requisição
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const supabase = createServerComponentClient();
  
  // Verificar a autenticação
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  
  // Obter o tenant e o usuário, se estiver autenticado
  let user = null;
  let tenant = null;
  
  if (session?.user) {
    // Obter detalhes do usuário do banco de dados
    user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, session.user.id),
    });
    
    if (user) {
      // Obter detalhes do tenant
      tenant = await db.query.tenants.findFirst({
        where: (tenants, { eq }) => eq(tenants.id, user!.tenant_id),
      });
    }
  }
  
  return {
    session,
    user,
    tenant,
    db,
    headers: opts.headers,
  };
};

/**
 * Inicialização do tRPC
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

/**
 * Middleware de autenticação para rotas protegidas
 * Verifica se o usuário está autenticado
 */
const enforceAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Você precisa estar autenticado para acessar este recurso',
    });
  }
  
  return next({
    ctx: {
      session: ctx.session,
      user: ctx.user,
      tenant: ctx.tenant,
    },
  });
});

/**
 * Middleware de verificação de tenant ativo
 * Verifica se o tenant do usuário está ativo
 */
const enforceTenantActive = t.middleware(({ ctx, next }) => {
  if (!ctx.tenant || !ctx.tenant.is_active) {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Sua organização está inativa ou suspensa',
    });
  }
  
  return next({
    ctx: {
      session: ctx.session,
      user: ctx.user,
      tenant: ctx.tenant,
    },
  });
});

/**
 * Middleware de verificação de permissão de administrador
 * Verifica se o usuário tem permissão de administrador
 */
const enforceAdmin = t.middleware(({ ctx, next }) => {
  if (ctx.user?.role !== 'admin') {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Você não tem permissão para acessar este recurso',
    });
  }
  
  return next({
    ctx: {
      session: ctx.session,
      user: ctx.user,
      tenant: ctx.tenant,
    },
  });
});

/**
 * Exportando os helpers do tRPC
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceAuthenticated);
export const tenantProcedure = t.procedure
  .use(enforceAuthenticated)
  .use(enforceTenantActive);
export const adminProcedure = t.procedure
  .use(enforceAuthenticated)
  .use(enforceTenantActive)
  .use(enforceAdmin);