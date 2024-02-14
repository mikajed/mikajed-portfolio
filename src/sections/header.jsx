function Header() {
  return (
    <header>
      <nav className="navbar">
        <a href="index.html">
          <img src="./src/assets/images/m-logo.png" alt="logo" />
        </a>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://github.com/mikajed" target="_blank">
            <img src="./src/assets/images/github.png" alt="github link" />
          </a>
          <a
            href="https://www.linkedin.com/in/jedrzejczyk-michael/"
            target="_blank"
          >
            <img src="./src/assets/images/linkedin.png" alt="linkedin link" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
