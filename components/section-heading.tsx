import { playfair_display } from './layout/navbar';

type Props = {
  paddingClass?: string;
  children: React.ReactNode;
};

const SectionHeading = ({ paddingClass, children }: Props) => {
  return (
    <h2
      className={`${playfair_display.className} ${paddingClass} text-4xl tracking-wider md:text-5xl`}
    >
      {children}
    </h2>
  );
};
export default SectionHeading;
