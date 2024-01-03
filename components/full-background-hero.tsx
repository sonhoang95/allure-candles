import clsx from 'clsx';
import CTAButton from './cta-button';
import { playfair_display } from './layout/navbar';

const backgroundImageStyles = clsx(
  `h-fit bg-[url('/images/full-hero-image.jpg')] bg-cover bg-center py-52 md:py-72  before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-40 before:content-['']`
);

const FullBackgroundHero = () => {
  return (
    <section className="relative">
      <div className={clsx(backgroundImageStyles)}></div>
      <div className="absolute inset-0 z-20 py-52 text-center text-white md:py-72">
        <div className="flex h-full flex-col items-center justify-center space-y-7">
          <h1 className="text-base font-light uppercase tracking-widest md:text-xl">
            Welcome to the candle bar
          </h1>
          <h2 className={`${playfair_display.className} text-4xl tracking-wider md:text-5xl`}>
            Create your own personalised scent
          </h2>
          <p className="tracking-wider">Your memories. Your candle. Your unique custom blend.</p>
          <CTAButton variant="dark">Discover How</CTAButton>
        </div>
      </div>
    </section>
  );
};
export default FullBackgroundHero;
