const CTAButton = ({ variant, children }: { variant: string; children: React.ReactNode }) => {
  return (
    <button className={`${variant === 'light' ? 'light' : 'dark'} cta-button`}>{children}</button>
  );
};
export default CTAButton;
