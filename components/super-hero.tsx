import Image from 'next/image';
import CTAButton from './cta-button';
import { playfair_display } from './layout/navbar';

const SuperHero = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto grid h-[800px] grid-cols-12 p-12">
        <div className="relative col-span-5 col-start-1 w-full">
          <Image
            src="/images/super-hero.jpg"
            alt="super hero image"
            fill
            priority
            sizes="max-width(768px) 100vw 700px"
          />
        </div>
        <div className="col-span-6 col-start-7 flex flex-col items-center justify-center text-center text-neutral-50">
          <h1 className="text-xl font-light uppercase tracking-widest ">100% SOY CANDLES</h1>
          <h2
            className={`${playfair_display.className} my-6 flex-wrap text-5xl leading-normal tracking-wide`}
          >
            SOMETHING SMELLS GOOD…
          </h2>
          <p className="tracking-wider">hand poured with love just for you</p>
          <CTAButton variant="light">Shop Now</CTAButton>
        </div>
      </div>
    </section>
  );
};
export default SuperHero;
