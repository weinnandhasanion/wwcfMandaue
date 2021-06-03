import { useState, useEffect } from 'react';
import './css/style.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Ministries from './components/Ministries';
import Footer from './components/Footer';

const App = () => {
  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const yPos = window.pageYOffset;

      yPos !== 0 ? setIsScrolled(true) : setIsScrolled(false);
    }); 
  });

  return (
    <div>
      <Nav />
      <Home/>
      <Services />
      <Ministries />
      <div style={{height: '500px'}}></div>
      <Footer isScrolled={isScrolled} />
    </div>
  );
}

export default App;
