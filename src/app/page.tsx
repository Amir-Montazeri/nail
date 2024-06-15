import { PageFirstImpression } from '@/components';
import { MaxWidthWrapper } from '@/features';

export default function Home() {
  return (
    <main className="grainy-light">
      <section>
        <MaxWidthWrapper>
          <PageFirstImpression />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
