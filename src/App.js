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
import Accordion from "./components/Accordion";
import { AppContext } from "./contexts/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import { useInView } from "framer-motion";

const App = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const ref = useRef();
  const inView = useInView(ref);

  const providerValue = {
    isAccordionOpen,
    setIsAccordionOpen,
    inView,
  };

  return (
    <Router>
      <AppContext.Provider value={providerValue}>
        <Nav ref={ref} />
        <Accordion />
        <Home />
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
