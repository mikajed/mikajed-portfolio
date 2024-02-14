function Footer() {
  return (
    <footer>
      <a href="index.html">
        <img className="logo" src="./src/assets/images/m-logo.png" alt="logo" />
      </a>
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
      <p>
        &copy; <span id="footerDate"></span> Michael Jedrzejczyk
      </p>
    </footer>
  );
}

export default Footer;
