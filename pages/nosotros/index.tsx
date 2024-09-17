// Importaciones de módulos internos
import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';

// Importaciones de módulos locales
import ContactForm from '../../components/ContactForm';

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="w-[80%] flex flex-col items-center justify-center gap-4 mt-24 py-8 md:py-10">
        <ContactForm />
      </section>
    </DefaultLayout>
  );
}
