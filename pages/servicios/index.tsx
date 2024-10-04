import { title } from '@/components/primitives';
import Mainservicios from '@/components/Mainservicios';
import DefaultLayout from '@/layouts/default';
import Categorias from '@/components/Categorias'

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="w-full flex flex-col items-center justify-center mt-24 md:py-10">
        <div className="w-full flex flex-col">
          <Mainservicios />
         <Categorias />
        </div>
      </section>
    </DefaultLayout>
  );
}
