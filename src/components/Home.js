import './../css/style.scss';

const Home = () => {
  return (
  <div id="home">
    <div className="landing">
    </div>
    <div className="flex-contain">
      <div className="title-cont">
        <h1 className="title">
          Bringing God's word <br /> to the world.
        </h1>
        <p className="sub-title">
          Welcome! We are a church that loves God and loves people.
        </p>
        <div className="button-cont">
          <button className="button">GET STARTED</button>
          <button className="button">CONTACT US</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;