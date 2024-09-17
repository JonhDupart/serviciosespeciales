import { title } from '@/components/primitives';


import DefaultLayout from '@/layouts/default';

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className=" w-full flex flex-col items-center justify-center gap-4 py-8 mt-24 md:py-10">
        <div className="w-full inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>documentos</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
