
import './App.css';
import './Slider.css';
import './brands.css';
import './card.css';
import './air.css';
import './shop.css';
import './item.css'
import './footer.css'

import Navbar from './components/navbar';
import Shop from './components/shop';
import Landing from './components/landing';
import Footer from './components/footer';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';


import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <div><Navbar/></div>
      <div className='App'>
          <Routes>
            <Route path="/" exact element={<Landing/>}/>
            <Route path='/shop' style element={<Shop/>}/>
            <Route path='/shop'  element={<Shop/>}/>
            <Route path='/shop'  element={<Shop/>}/>
          </Routes>
          <Footer/>
      </div>
      </Router>

      
  )
  
};

export default App;
