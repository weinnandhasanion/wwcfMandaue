import { motion } from "framer-motion";
import pastor from "./../assets/pastor.jpg";

const MinistryCard = ({ name, description, link, alt, img }) => {
  return (
    <motion.div className="card">
      <div className="img-cont">
        <img src={img ? img : pastor} alt={alt} />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <button className="button">More info</button>
      </div>
    </motion.div>
  );
};

export default MinistryCard;
