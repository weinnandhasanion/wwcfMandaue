import { LogoWhite } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../contexts/AppContext";
import { HashLink as Link } from "react-router-hash-link";
import { forwardRef } from "react";

const navLinks = [
  {
    id: "",
    name: "HOME",
  },
  {
    id: "#services",
    name: "SERVICES",
  },
  {
    id: "#ministries",
    name: "MINISTRIES",
  },
  {
    id: "#location",
    name: "LOCATION",
  },
  {
    id: "#contact",
    name: "CONTACT",
  },
];

const Nav = forwardRef((_, ref) => {
  const { open, setIsAccordionOpen } = useAppContext();

  const handleClick = () => setIsAccordionOpen(!open);

  return (
    <nav className="navbar" ref={ref}>
      <FontAwesomeIcon
        icon={open ? faTimes : faBars}
        style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
        onClick={handleClick}
      />
      <div className="navbar-logo">
        <img src={LogoWhite} alt="logo-white" className="logo" />
      </div>
      <ul className="nav-links" id="nav-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.id} className="nav-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Nav;
