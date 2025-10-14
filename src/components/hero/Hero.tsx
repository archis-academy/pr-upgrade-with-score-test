import "./Hero.scss";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Product Launch 2025</h1>
        <p className="hero__subtitle">
          Discover the next generation of innovation. Sign up for exclusive
          updates!
        </p>
        <button className="hero__cta" onClick={onCtaClick}>
          Learn More & Sign Up
        </button>
      </div>
    </section>
  );
};

export default Hero;
