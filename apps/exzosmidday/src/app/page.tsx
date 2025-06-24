import { ExzosLogo } from '@exzos/onlook/logos';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <ExzosLogo size="lg" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Exzos<span className="text-primary-500">Midday</span>
          </h1>
          <p className="text-xl text-gray-600">
            Plataforma central de gestão empresarial e produtividade
          </p>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Link
            href="/dashboard"
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-200 hover:bg-primary-50"
          >
            <h2 className="mb-2 text-xl font-semibold">Dashboard</h2>
            <p className="text-sm text-gray-600">Visão geral e análises do seu negócio</p>
          </Link>
          
          <Link
            href="/finances"
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-200 hover:bg-primary-50"
          >
            <h2 className="mb-2 text-xl font-semibold">Finanças</h2>
            <p className="text-sm text-gray-600">Gestão financeira completa</p>
          </Link>
          
          <Link
            href="/customers"
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-200 hover:bg-primary-50"
          >
            <h2 className="mb-2 text-xl font-semibold">CRM</h2>
            <p className="text-sm text-gray-600">Gerencie clientes e oportunidades</p>
          </Link>
          
          <Link
            href="/projects"
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-200 hover:bg-primary-50"
          >
            <h2 className="mb-2 text-xl font-semibold">Projetos</h2>
            <p className="text-sm text-gray-600">Gestão de projetos e tarefas</p>
          </Link>
          
          <Link
            href="/documents"
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-200 hover:bg-primary-50"
          >
            <h2 className="mb-2 text-xl font-semibold">Documentos</h2>
            <p className="text-sm text-gray-600">Armazenamento e colaboração</p>
          </Link>
          
          <Link
            href="/settings"
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-200 hover:bg-primary-50"
          >
            <h2 className="mb-2 text-xl font-semibold">Configurações</h2>
            <p className="text-sm text-gray-600">Personalize sua plataforma</p>
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-gray-500">
            Parte do ecossistema ExzosVerse
          </p>
          <div className="flex gap-4">
            <Link 
              href="https://github.com/exzosdigital/ExzosSpace" 
              className="text-sm text-gray-500 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link 
              href="/docs" 
              className="text-sm text-gray-500 hover:text-primary-500"
            >
              Documentação
            </Link>
            <Link 
              href="/support" 
              className="text-sm text-gray-500 hover:text-primary-500"
            >
              Suporte
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}