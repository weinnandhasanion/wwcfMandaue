import images from "./../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.logoWhite} alt="logo-white" className="logo" />
      </div>
      <ul className="nav-links" id="nav-links">
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
          <a href="#contacth1" className="nav-link">
            CONTACT
          </a>
        </li>
      </ul>
      <FontAwesomeIcon icon={faBars} style={{color: "white", fontSize: "24px"}} />
    </nav>
  );
};

export default Nav;
