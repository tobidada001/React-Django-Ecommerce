import logo from './logo.svg';
import './App.css';
import TopBar from './components/top/TopBar';
import NavBar from './components/top/NavBar';
import Footer from './components/section/Footer';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import ProductDetail from './components/pages/ProductDetail';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import {CartProvider} from './CartContext';

// export const CartContext = createContext();
function App() {

  return (
    <CartProvider >
    <BrowserRouter>
      <div className="App">

        <TopBar />
        
       
          <NavBar />
        

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/detail/:lookup' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter >
    </CartProvider>

  );
}

export default App;
