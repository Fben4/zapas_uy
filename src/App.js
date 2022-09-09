
import './styles/App.css';
import './styles/Slider.css';
import './styles/brands.css';
import './styles/card.css';
import './styles/air.css';
import './styles/itemList.css';
import './styles/item.css'
import './styles/footer.css'
import './styles/navbar.css'
import './styles/landing.css'


import Navbar from './components/navbar';
import Shop from './components/itemList';
import Landing from './components/landing';
import Footer from './components/footer';
import ItemCount from './components/itemCount';
import ItemListContainer from './components/itemListContainer';


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
          </Routes>
          <Footer/>
      </div>
      </Router>

      
  )
  
};

export default App;
