import { playfair_display } from './layout/navbar';

const AboutSection = () => {
  return (
    <section className="wrap mx-8 flex flex-col items-center justify-center space-y-6 py-16 text-center md:mx-96 md:py-32">
      <h1 className="text-primary text-lg font-light uppercase tracking-widest md:text-xl">
        Welcome to our world.
      </h1>
      <p
        className={`${playfair_display.className} flex-wrap text-2xl leading-normal tracking-wide md:text-3xl`}
      >
        Our eco-conscious soy candles are poured with the Earth in mind, with a tree planted for
        every order. We're also home to Australia's only personalised scent service.
      </p>
    </section>
  );
};
export default AboutSection;
