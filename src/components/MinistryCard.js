const MinistryCard = ({ name, description, link }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{description}</p>
      <button className="button">More info</button>
    </div>
  );
}

export default MinistryCard;