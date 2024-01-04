import AboutSection from 'components/about';
import FullBackgroundHero from 'components/full-background-hero';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import SuperHero from 'components/super-hero';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <FullBackgroundHero />
      <AboutSection />
      <Suspense>
        <SuperHero />
      </Suspense>
      <ThreeItemGrid />
      <Suspense>
        {/* <Carousel /> */}
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
