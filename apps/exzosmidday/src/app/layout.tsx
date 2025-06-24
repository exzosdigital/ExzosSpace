import { ExzosProvider } from '@exzos/onlook';
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExzosMidday - Plataforma de Gestão Empresarial',
  description: 'Plataforma central de gestão empresarial e produtividade da Exzos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ExzosProvider>
          {children}
        </ExzosProvider>
      </body>
    </html>
  );
}