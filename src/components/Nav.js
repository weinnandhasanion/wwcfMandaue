import images from "./../assets/images";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.logoWhite} alt="logo-white" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-link">
            HOME
          </a>
        </li>
        <li>
          <a href="#services" className="nav-link">
            SERVICES
          </a>
        </li>
        <li>
          <a href="#ministries" className="nav-link">
            MINISTRIES
          </a>
        </li>
        <li>
          <a href="#location" className="nav-link">
            LOCATION
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
