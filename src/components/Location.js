const Location = () => {
  return (
    <div id="location">
      <h1>VISIT US HERE</h1>
      <div className="flex-full" style={{ paddingTop: "50px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.5516707868521!2d123.94100274695548!3d10.333614420840942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9984d0a589ec9%3A0x75ba5899ebb52e02!2sWord%20for%20the%20World%20Christian%20Fellowship%20Mandaue!5e0!3m2!1sen!2sph!4v1624503965629!5m2!1sen!2sph"
          style={{ border: 0, width: "700px", height: "450px" }}
          title="wwcf_map"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
