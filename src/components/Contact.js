const Contact = () => {
  return (
    <div id="contact">
      <div id="fixed-bg"></div>
      <h1 id="contacth1">CONTACT US</h1>
      <div id="contact-cont">
        <p>Please fill out the form and we will be in touch with you.</p>
        <form action="#">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="John Doe" />
          <label htmlFor="number">Contact number</label>
          <input type="text" name="number" placeholder="09XX XXX XXXX" />
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" placeholder="johndoe@xyz.com" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Wow, I am so blessed with this and I am very interested to join your church! xx"
          ></textarea>
          <button className="button">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
