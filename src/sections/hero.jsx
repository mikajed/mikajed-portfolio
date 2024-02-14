function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="left-col">
          <h1>
            Hi, I am <span className="name">Michael</span>
          </h1>
          <h2>
            I code, <span>I design</span>
          </h2>
          <a href="mailto:michael@mikajed.dev" className="contact">
            contact
          </a>
        </div>
        <div className="right-col">
          <img
            className="cube"
            src="./src/assets/images/cube-front.webp"
            alt="cube"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
