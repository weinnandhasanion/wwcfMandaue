import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ isScrolled }) => {
  const handeClick = () => {
    document.querySelector('a[href*="#home"').click();
  }

  return !isScrolled ? (
    <footer>
      Slide down to view more
      <FontAwesomeIcon icon={faAngleDown} />
    </footer>
  ) : (
    <footer>
      <div className="footerBtn" onClick={handeClick}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </footer>
  );
}

export default Footer;