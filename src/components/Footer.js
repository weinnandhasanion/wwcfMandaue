import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Footer = ({ isScrolled }) => {
  const handeClick = () => {
    document.querySelector('a[href*="#home"').click();
  }

  return !isScrolled ? (
    <motion.footer
      initial={{y: 100}}
      animate={{y: 0}}
      transition={{bounce: 0, duration: .5}}
    >
      Scroll down to view more
      <FontAwesomeIcon icon={faAngleDown} />
    </motion.footer>
  ) : (
    <footer>
      <motion.div 
        className="footerBtn" 
        onClick={handeClick}
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{bounce: 0, duration: .5}}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </motion.div>
    </footer>
  );
}

export default Footer;