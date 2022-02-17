import { useAppContext } from "../contexts/AppContext";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Accordion = () => {
  const { isAccordionOpen, setIsAccordionOpen, homeLinkRef } = useAppContext();

  const variants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  const handleClose = () => setIsAccordionOpen(false);

  return (
    <motion.div
      className="accordion"
      initial={{ y: "-100%" }}
      animate={isAccordionOpen ? "open" : "closed"}
      variants={variants}
      transition={{ damping: 200 }}
    >
      <ul className="nav-links" id="nav-links">
        <li>
          <Link
            onClick={handleClose}
            to="#homenav"
            className="nav-link"
            ref={homeLinkRef}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link onClick={handleClose} to="#services" className="nav-link">
            SERVICES
          </Link>
        </li>
        <li>
          <Link onClick={handleClose} to="#ministries" className="nav-link">
            MINISTRIES
          </Link>
        </li>
        <li>
          <Link onClick={handleClose} to="#location" className="nav-link">
            LOCATION
          </Link>
        </li>
        <li>
          <Link onClick={handleClose} to="#contacth1" className="nav-link">
            CONTACT
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Accordion;
