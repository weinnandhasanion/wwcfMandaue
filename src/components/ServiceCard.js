const ServiceCard = ({ title, schedule, description, address}) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <hr />
      <h3>{schedule}</h3>
      <h3>{address}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;