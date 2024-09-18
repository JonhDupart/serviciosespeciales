import { title } from '@/components/primitives';
import ContactForm from '../../components/ContactForm';

import DefaultLayout from '@/layouts/default';

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className=" w-[80%]flex flex-col items-center justify-center gap-4  mt-24 py-8 md:py-10">
          <ContactForm />
      </section>
    </DefaultLayout>
  );
}
