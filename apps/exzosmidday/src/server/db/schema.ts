import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

// Tabela de Tenants (Organizações)
export const tenants = pgTable('tenants', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  plan: text('plan').notNull().default('free'),
  logo_url: text('logo_url'),
  custom_domain: text('custom_domain'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
  is_active: boolean('is_active').default(true).notNull(),
  settings: jsonb('settings').default({}).notNull(),
});

// Relações para Tenants
export const tenantsRelations = relations(tenants, ({ many }) => ({
  users: many(users),
  projects: many(projects),
  customers: many(customers),
  transactions: many(transactions),
}));

// Tabela de Usuários
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  tenant_id: uuid('tenant_id')
    .notNull()
    .references(() => tenants.id, { onDelete: 'cascade' }),
  email: text('email').notNull(),
  name: text('name').notNull(),
  avatar_url: text('avatar_url'),
  role: text('role').notNull().default('member'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
  last_login_at: timestamp('last_login_at'),
  is_active: boolean('is_active').default(true).notNull(),
  settings: jsonb('settings').default({}).notNull(),
});

// Relações para Usuários
export const usersRelations = relations(users, ({ one, many }) => ({
  tenant: one(tenants, {
    fields: [users.tenant_id],
    references: [tenants.id],
  }),
  projects: many(projectMembers),
  tasks: many(tasks),
}));

// Tabela de Clientes
export const customers = pgTable('customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  tenant_id: uuid('tenant_id')
    .notNull()
    .references(() => tenants.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone'),
  address: text('address'),
  city: text('city'),
  state: text('state'),
  country: text('country'),
  postal_code: text('postal_code'),
  notes: text('notes'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
  tags: text('tags').array(),
  status: text('status').notNull().default('active'),
  assigned_to: uuid('assigned_to').references(() => users.id),
  custom_fields: jsonb('custom_fields').default({}).notNull(),
});

// Relações para Clientes
export const customersRelations = relations(customers, ({ one, many }) => ({
  tenant: one(tenants, {
    fields: [customers.tenant_id],
    references: [tenants.id],
  }),
  assignedTo: one(users, {
    fields: [customers.assigned_to],
    references: [users.id],
  }),
  projects: many(projects),
  transactions: many(transactions),
}));

// Tabela de Projetos
export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  tenant_id: uuid('tenant_id')
    .notNull()
    .references(() => tenants.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  customer_id: uuid('customer_id').references(() => customers.id),
  status: text('status').notNull().default('active'),
  start_date: timestamp('start_date'),
  end_date: timestamp('end_date'),
  budget: integer('budget'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
  created_by: uuid('created_by').references(() => users.id),
});

// Relações para Projetos
export const projectsRelations = relations(projects, ({ one, many }) => ({
  tenant: one(tenants, {
    fields: [projects.tenant_id],
    references: [tenants.id],
  }),
  customer: one(customers, {
    fields: [projects.customer_id],
    references: [customers.id],
  }),
  createdBy: one(users, {
    fields: [projects.created_by],
    references: [users.id],
  }),
  members: many(projectMembers),
  tasks: many(tasks),
}));

// Tabela de Membros do Projeto
export const projectMembers = pgTable('project_members', {
  id: uuid('id').primaryKey().defaultRandom(),
  project_id: uuid('project_id')
    .notNull()
    .references(() => projects.id, { onDelete: 'cascade' }),
  user_id: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  role: text('role').notNull().default('member'),
  joined_at: timestamp('joined_at').defaultNow().notNull(),
});

// Relações para Membros do Projeto
export const projectMembersRelations = relations(projectMembers, ({ one }) => ({
  project: one(projects, {
    fields: [projectMembers.project_id],
    references: [projects.id],
  }),
  user: one(users, {
    fields: [projectMembers.user_id],
    references: [users.id],
  }),
}));

// Tabela de Tarefas
export const tasks = pgTable('tasks', {
  id: uuid('id').primaryKey().defaultRandom(),
  tenant_id: uuid('tenant_id')
    .notNull()
    .references(() => tenants.id, { onDelete: 'cascade' }),
  project_id: uuid('project_id').references(() => projects.id, {
    onDelete: 'cascade',
  }),
  title: text('title').notNull(),
  description: text('description'),
  status: text('status').notNull().default('todo'),
  priority: text('priority').notNull().default('medium'),
  due_date: timestamp('due_date'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
  created_by: uuid('created_by').references(() => users.id),
  assigned_to: uuid('assigned_to').references(() => users.id),
  estimated_hours: integer('estimated_hours'),
  actual_hours: integer('actual_hours'),
});

// Relações para Tarefas
export const tasksRelations = relations(tasks, ({ one }) => ({
  tenant: one(tenants, {
    fields: [tasks.tenant_id],
    references: [tenants.id],
  }),
  project: one(projects, {
    fields: [tasks.project_id],
    references: [projects.id],
  }),
  createdBy: one(users, {
    fields: [tasks.created_by],
    references: [users.id],
  }),
  assignedTo: one(users, {
    fields: [tasks.assigned_to],
    references: [users.id],
  }),
}));

// Tabela de Transações Financeiras
export const transactions = pgTable('transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  tenant_id: uuid('tenant_id')
    .notNull()
    .references(() => tenants.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
  amount: integer('amount').notNull(),
  currency: text('currency').notNull().default('BRL'),
  description: text('description'),
  date: timestamp('date').notNull(),
  category: text('category'),
  customer_id: uuid('customer_id').references(() => customers.id),
  project_id: uuid('project_id').references(() => projects.id),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
  created_by: uuid('created_by').references(() => users.id),
  status: text('status').notNull().default('pending'),
  payment_method: text('payment_method'),
  receipt_url: text('receipt_url'),
  metadata: jsonb('metadata').default({}).notNull(),
});

// Relações para Transações
export const transactionsRelations = relations(transactions, ({ one }) => ({
  tenant: one(tenants, {
    fields: [transactions.tenant_id],
    references: [tenants.id],
  }),
  customer: one(customers, {
    fields: [transactions.customer_id],
    references: [customers.id],
  }),
  project: one(projects, {
    fields: [transactions.project_id],
    references: [projects.id],
  }),
  createdBy: one(users, {
    fields: [transactions.created_by],
    references: [users.id],
  }),
}));

// Tabela de Documentos
export const documents = pgTable('documents', {
  id: uuid('id').primaryKey().defaultRandom(),
  tenant_id: uuid('tenant_id')
    .notNull()
    .references(() => tenants.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  type: text('type').notNull(),
  size: integer('size').notNull(),
  url: text('url').notNull(),
  path: text('path').notNull(),
  mime_type: text('mime_type').notNull(),
  customer_id: uuid('customer_id').references(() => customers.id),
  project_id: uuid('project_id').references(() => projects.id),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
  created_by: uuid('created_by').references(() => users.id),
  tags: text('tags').array(),
  metadata: jsonb('metadata').default({}).notNull(),
});

// Relações para Documentos
export const documentsRelations = relations(documents, ({ one }) => ({
  tenant: one(tenants, {
    fields: [documents.tenant_id],
    references: [tenants.id],
  }),
  customer: one(customers, {
    fields: [documents.customer_id],
    references: [customers.id],
  }),
  project: one(projects, {
    fields: [documents.project_id],
    references: [projects.id],
  }),
  createdBy: one(users, {
    fields: [documents.created_by],
    references: [users.id],
  }),
}));