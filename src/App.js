import { useState, useEffect } from "react";
import "./css/style.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Services";
import Ministries from "./components/Ministries";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer2 from "./components/Footer2";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const yPos = window.pageYOffset;

      yPos !== 0 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);

  return (
    <div>
      <Nav />
      <Home />
      <Services />
      <Ministries />
      <Location />
      <Contact />
      <Footer isScrolled={isScrolled} />
      <Footer2 />
    </div>
  );
};

export default App;
