import { PageFirstImpression } from '@/components';
import { MaxWidthWrapper } from '@/features';

export default function Home() {
  return (
    <main>
      <section>
        <MaxWidthWrapper>
          <PageFirstImpression />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
