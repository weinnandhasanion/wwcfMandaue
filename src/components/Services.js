import Blockquote from "./Blockquote";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 0,
    title: "Church Service",
    schedule: "Sundays, 9:00 AM - 12:00 PM",
    address: "3F Evergreen Bldg., AC Cortes Avenue, Mandaue City, Cebu",
    description:
      "Join our church service every Sunday from 9AM-12PM and learn more about God's Word and His plans for your life!",
  },
  {
    id: 1,
    title: "Power Prayer Night",
    schedule: "Thursdays, 8:00 PM - 10:00 PM",
    address: "Zoom Meetings",
    description:
      "Join our power prayer nights and help us pray for every aspect in our daily lives as we come to pray for you as well!",
  },
];

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
