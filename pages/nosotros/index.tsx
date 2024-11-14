import { title } from '@/components/primitives';
import MisionVision from '@/components/MisionVision';
import DefaultLayout from '@/layouts/default';

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="w-full flex flex-col items-center justify-center mt-24 gap-4 py-8 md:py-10">
        <div className="w-full flex justify-center">
          <MisionVision />
        </div>
      </section>
    </DefaultLayout>
  );
}
