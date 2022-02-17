import images from "./../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../contexts/AppContext";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const {
    homeLinkRef,
    isAccordionOpen: open,
    setIsAccordionOpen,
  } = useAppContext();

  const handleClick = () => setIsAccordionOpen(!open);

  return (
    <nav className="navbar" id="homenav">
      <FontAwesomeIcon
        icon={open ? faTimes : faBars}
        style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
        onClick={handleClick}
      />
      <div className="navbar-logo">
        <img src={images.logoWhite} alt="logo-white" className="logo" />
      </div>
      <ul className="nav-links" id="nav-links">
        <li>
          <Link to="#homenav" className="nav-link" ref={homeLinkRef}>
            HOME
          </Link>
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
    </nav>
  );
};

export default Nav;
