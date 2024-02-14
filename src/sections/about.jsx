function About() {
  return (
    <section id="about">
      <h3>Nice to meet you</h3>
      <div className="about-content">
        <div className="left-col">
          <p>
            Hi, ich bin Michael, ein Fachinformatiker in Ausbildung zum
            Anwendungsentwickler. Ich bin ein kreativer und innovativer Denker
            mit einer Leidenschaft für Technologie.
          </p>
          <p>
            Ich bin immer auf der Suche nach neuen Herausforderungen und
            Möglichkeiten, meine Fähigkeiten zu verbessern.
          </p>
          <div className="tech-stack">
            <img
              src="./src/images/js.png"
              alt="javascript logo"
              loading="lazy"
            />
            <img src="./src/images/css3.png" alt="css logo" loading="lazy" />
            <img src="./src/images/html5.png" alt="html logo" loading="lazy" />
            <img src="./src/images/vs.png" alt="vscode logo" loading="lazy" />
            <img
              src="./src/images/github_stack.png"
              alt="github logo"
              loading="lazy"
            />
          </div>
        </div>
        <div className="right-col">
          <img
            src="./src/images/profile.png"
            alt="my profile image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
