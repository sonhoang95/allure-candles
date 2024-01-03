import Image from 'next/image';
import CTAButton from './cta-button';
import { playfair_display } from './layout/navbar';

const SuperHero = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto grid grid-cols-1 grid-rows-2 gap-6 p-6 md:h-[800px] md:grid-cols-12 md:grid-rows-1 md:gap-0 md:p-12">
        <div className="relative row-span-1 row-start-1 w-full md:col-span-5 md:col-start-1">
          <Image
            src="/images/super-hero.jpg"
            alt="super hero image"
            fill
            priority
            sizes="max-width(768px) 100vw 700px"
          />
        </div>
        <div className="row-span-1 row-start-2 flex flex-col items-center justify-center text-center text-neutral-50 md:col-span-6 md:col-start-7 md:row-span-full">
          <h1 className="text-base font-light uppercase tracking-widest md:text-xl ">
            100% SOY CANDLES
          </h1>
          <h2
            className={`${playfair_display.className} my-2 flex-wrap text-4xl leading-normal tracking-wide md:my-6 md:text-5xl`}
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
