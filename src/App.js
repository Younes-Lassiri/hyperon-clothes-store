import './App.css';
import Collection from './Collection/Collection';
import Home from './Home/Home';
import Items from './Items/Items';
import Occassion from './Occassion/Occassion';
import Pricing from './Pricing/Pricing';
import Sneakers from './Sneakers/Sneakers';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from './Deails/Details';
import Cart from './Cart/Cart';
import Elements from './Elements/Elements';
import Wishlist from './Wishlist/Wishlist';
import Lookbook from './Lookbook/Lookbook';
import Shop from './Shop/Shop';
import Arrivals from './Arrivals/Arrivals';
import About from './About/About';
import Contact from './Contact/Contact';
import Error from './Error/Error';
function App() {
  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.pageYOffset]);
  return (
    <BrowserRouter>
    {showToTop && (
        <div className='toTop-black'>
          <div className='toTop'>
            <ScrollLink to="top" smooth={true} duration={500}>
              <div className='span'><svg xmlns="http://www.w3.org/2000/svg" height='26px' width='26px' viewBox="0 -960 960 960"  fill="#fff"><path d="m280-400 200-200 200 200H280Z"/></svg></div>
            </ScrollLink>
          </div>
        </div>
      )}
    <Routes>
      <Route path="/" element={
        (
          <div>
            <Home/>
            <Collection/>
            <Occassion/>
            <Items/>
            <Sneakers/>
            <Pricing/>
            <Subscribe/>
            <Footer/>
          </div>
        )
      }/>
      <Route path="/product/:name" element={<Details/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/elements/product-list-types' element={<Elements/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/lookbook/two-columns-grid' element={<Lookbook/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/coming-soon' element={<Arrivals/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
