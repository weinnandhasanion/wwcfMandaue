import Blockquote from "./Blockquote";
import ServiceCard from "./ServiceCard";
import services from "data/services";

const Services = () => {
  return (
    <>
      <Blockquote quote="We see Spirit-filled men and women preaching the Word and planting churches in the key cities of the Philippines and the world." />
      <div id="services">
        <div className="container">
          <h1>JOIN OUR SERVICES</h1>
          <div className="flex-full">
            {services.map((x) => (
              <ServiceCard
                key={x.id}
                title={x.title}
                schedule={x.schedule}
                address={x.address}
                description={x.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
