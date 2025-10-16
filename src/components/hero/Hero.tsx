import "./Hero.scss";

interface HeroProps {
  onCtaClick: () => void;
  title: string;
  subtitle: string;
  ctaText: string;
}

const Hero = ({ onCtaClick, title, subtitle, ctaText }: HeroProps) => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <button className="hero__cta" onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
