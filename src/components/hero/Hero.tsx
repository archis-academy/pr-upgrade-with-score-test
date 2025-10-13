import "./Hero.scss";

const Hero = () => {
  const handleCtaClick = () => {
    //   TODO: Backend Integration
    document
      .getElementById("signup-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Product Launch 2025</h1>
        <p className="hero__subtitle">
          Discover the next generation of innovation. Sign up for exclusive
          updates!
        </p>
        <button className="hero__cta" onClick={handleCtaClick}>
          Learn More & Sign Up
        </button>
      </div>
    </section>
  );
};

export default Hero;
