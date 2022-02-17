import { useState, useRef } from "react";
import "./css/style.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Services";
import Ministries from "./components/Ministries";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer2 from "./components/Footer2";
import Blockquote from "./components/Blockquote";
import Accordion from "./components/Accordion";
import { AppContext } from "./contexts/AppContext";
import { useScroll } from "./hooks/useScroll";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const { scrollY } = useScroll();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const homeLinkRef = useRef();

  const providerValue = {
    scrollY,
    homeLinkRef,
    isAccordionOpen,
    setIsAccordionOpen,
  };

  return (
    <Router>
      <AppContext.Provider value={providerValue}>
        <Nav />
        <Accordion />
        <Home />
        <Blockquote quote="We see Spirit-filled men and women preaching the Word and planting churches in the key cities of the Philippines and the world." />
        <Services />
        <Ministries />
        <Location />
        <Contact />
        <Footer />
        <Footer2 />
      </AppContext.Provider>
    </Router>
  );
};

export default App;
