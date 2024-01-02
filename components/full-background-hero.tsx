import clsx from 'clsx';
import { playfair_display } from './layout/navbar';

const backgroundImageStyles = clsx(
  `h-fit bg-[url('/images/full-hero-image.jpg')] bg-cover bg-center py-72  before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-40 before:content-['']`
);

const FullBackgroundHero = () => {
  return (
    <section className="relative">
      <div className={clsx(backgroundImageStyles)}></div>
      <div className="absolute inset-0 z-20 py-72 text-center text-white">
        <div className="flex h-full flex-col items-center justify-center space-y-7">
          <h1 className="text-xl font-light uppercase tracking-widest">
            Welcome to the candle bar
          </h1>
          <h2 className={`${playfair_display.className} text-5xl italic tracking-wider`}>
            Create your own personalised scent
          </h2>
          <p className="tracking-wider">Your memories. Your candle. Your unique custom blend.</p>
          <button className="bg-primary px-6 py-3 uppercase tracking-widest text-white">
            Discover How
          </button>
        </div>
      </div>
    </section>
  );
};
export default FullBackgroundHero;
