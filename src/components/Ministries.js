import { WorshipTeam, Bimboy } from "assets";
import ministries from "data/ministries";

const MinistryHead = ({ name, image }) => {
  const img = require(`./../assets/${image}`);
  return (
    <div className="ministry-head">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const Ministry = ({
  bgimg,
  name,
  mission,
  vision,
  ministryHeads,
  pathnames,
}) => {
  const bg = bgimg ? require(`./../assets/${bgimg}`) : "";
  return (
    <>
      <img src={bg} alt="" height={100} />
      <div>
        <div>
          <h1 className="ministry-title">{name}</h1>
        </div>
        <div>
          <div>
            <h2>MISSION</h2>
            <p>{mission}</p>
          </div>
          <div>
            <h2>VISION</h2>
            <p>{vision}</p>
          </div>
        </div>
        <div>
          <h1>Ministry Head{ministryHeads.length > 1 && "s"}</h1>
          <div>
            {ministryHeads.map((head, i) => {
              const image = pathnames ? pathnames[i] : "";
              return <MinistryHead key={head} name={head} image={image} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Ministries = () => {
  return (
    <div id="ministries">
      <div id="ministries-cont">
        {ministries.map(({ id, ...rest }) => (
          <Ministry key={id} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default Ministries;
