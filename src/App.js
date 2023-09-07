/* import logo from './logo.svg'; */
import './App.css';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Shipping from './components/Shipping/Shipping';
import Contact from './components/Contact/Contact';
import React , {useState , useEffect} from 'react';


function App() {
  const [scrolled, setScrolled] = useState(false)
  const [route, setRoute] = useState('about')

  const routeChange = (route) => {
    setRoute(route)
  }

  const scroll = () => {
    if (window.pageYOffset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scroll);
    
    return function cleanup() {
      window.removeEventListener('scroll', scroll);
    }
  })

  return (
    <div className="App">
      <Navigation routeChange={routeChange} scrolled={scrolled}/>
      { route === 'about' 
          ? <About/>
          : ( 
            route === 'shop'
            ? <Shop/>
            : ( 
                route === 'shipping'
                ? <Shipping/>
                : <Contact/>
              )
            )
      }
    </div>
  );
}

export default App;
