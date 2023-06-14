
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
import ItemListContainer from './components/itemListContainer';
import Landing from './components/landing';
import Footer from './components/footer';
import ItemCount from './components/itemCount';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/cart';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/cartContext';


function App() {
  return (
    <CartContextProvider>
      <Router>
        <div><Navbar/></div>
      <div className='App'> 
          <Routes>
            <Route path="/" exact element={<Landing/>}/>
            <Route path='/itemListContainer' style element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' style element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' style element={<ItemDetailContainer/>}/>
            <Route path='/cart' style element={<Cart/>}/>
          </Routes>
          <Footer/>
      </div>
      </Router>
      </CartContextProvider>
      
  )
  
};

export default App;
