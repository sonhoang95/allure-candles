import { playfair_display } from './layout/navbar';

const AboutSection = () => {
  return (
    <section className="mx-96 flex flex-col items-center justify-center space-y-6 py-32 text-center">
      <h1 className="text-primary text-xl font-light uppercase tracking-widest">
        Welcome to our world.
      </h1>
      <p
        className={`${playfair_display.className} flex-wrap text-3xl leading-normal tracking-wide`}
      >
        Our eco-conscious soy candles are poured with the Earth in mind, with a tree planted for
        every order. We're also home to Australia's only personalised scent service.
      </p>
    </section>
  );
};
export default AboutSection;
