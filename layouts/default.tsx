import { Link } from '@nextui-org/link';

import { Navbar } from '@/components/navbar';

import { Head } from './head';


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-4">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://zipaquiradigital.com"
          title="zipaquiradigitital.com"
          target='black'
          rel='noreferrer'
        >
          <span className="text-default-600">Diseño y Desarrollo </span>
          <p className="text-yellow-500">Zipaquirá Digital</p>
        </Link>
      </footer>
    </div>
  );
}
