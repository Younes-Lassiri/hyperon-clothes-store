import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import logodark from '../clothes_images/logo_mark.png';
import { Link } from 'react-router-dom';
import './Cart.css';
import cartbg from '../clothes_images/cart_bg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
function Cart() {
  const [total, setTotal] = useState(0);
  const trash = useSelector((state) => state.trash);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + (item.quantite * item.price), 0);
    setTotal(newTotal);
  }, [cart]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        hideupfunc();
      };
    function showupfunc()
    {
    const element = document.querySelector('.home-section-show-up-true');
    element.classList.remove('home-section-hide-up');
    element.classList.remove('home-section-show-up');
    element.classList.add('showup-element');
    }
    function hideupfunc()
    {
    const element = document.querySelector('.home-section-show-up-true');
    if (element.classList.contains('showup-element')) {
        element.classList.remove('showup-element');
        element.classList.add('home-section-show-up');
        element.classList.add('home-section-hide-up');
    }
    }
    useEffect(() => {
      document.title = 'Cart – Hyperon';
  }, []);
  return (
    <div className='cart-section'>
        <div className='home-section-show-up home-section-show-up-true'>
        <div className="home-section-show-up-left" onClick={hideupfunc}></div>
        <div className="home-section-show-up-right">
        <div className="home-section-show-up-right-cancel">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="22.081px"
            height="17.735px"
            viewBox="0 0 22.081 17.735"
            xmlSpace="preserve"
            onClick={hideupfunc}
        >
            <polygon points="4.375,17.735 22.081,0 17.789,0 0,17.735" />
            <polygon points="17.705,17.735 0,0 4.292,0 22.081,17.735" />
        </svg>
        </div>
        <div className="home-section-show-up-right-logo">
            <img src={logodark} alt='logo_dark'/>
        </div>
        <div className="home-section-show-up-right-content">
            <div className="home-section-show-up-right-content-one">
            <div className="home-section-show-up-right-content-one-one small-item"></div>
            <div className="home-section-show-up-right-content-one-two small-item"></div>
            <div className="home-section-show-up-right-content-one-three small-item"></div>
            <div className="home-section-show-up-right-content-one-four small-item"></div>
            <div className="home-section-show-up-right-content-one-five small-item"></div>
            <div className="home-section-show-up-right-content-one-six small-item"></div>
            </div>
            <div className="home-section-show-up-right-content-two"></div>
        </div>
        </div>
        </div>
        <Navbar func={showupfunc} detail={true}/>
        <div className='cart-section-one'>
          <img src={cartbg} alt='cart_bg'/>
            <h1>cart</h1>
        </div>
        <div className='cart-section-two-map'>
        {trash.length > 0 ? (
                        <div className="cart-section-one-trash-area">
                            <div className="cart-section-one-trash-area-name">“{trash[0].name}” removed.</div>
                            <div className="cart-section-one-trash-area-undo">
                                <button onClick={() => dispatch({type: 'remove_trash', payload: trash[0].id})}>Undo?</button>
                            </div>
                        </div>
            ) : null}
          {cart.length? (
            <>
              <div className='cart-section-two-map-left'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="th-table-image"></th>
                  <th>product</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, i) => {
                  return(
                    <tr key={i} className='trtr'>
                      <td className="td-cart-remove-x"><button className="remove-cart" onClick={() => dispatch({type: 'remove_cart', payload: item.id})}>×</button></td>
                      <td className="td-table-image"><img src={item.image} alt={item.name}/></td>
                      <td className="td-table-name"><span>{item.name}</span></td>
                      <td>{item.price}$</td>
                      <td>
                        <div className='cart-section-two-map-left-quantity-td'>
                          <button onClick={() => dispatch({type: 'minuce_quantite_cart', payload: item.id})}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M560-280 360-480l200-200v400Z"/></svg>
                          </button>
                          <span>{item.quantite}</span>
                          <button onClick={() => dispatch({type: 'add_quantite_cart', payload: item.id})}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M400-280v-400l200 200-200 200Z"/></svg>
                          </button>
                        </div>
                      </td>
                      <td>{(item.price * item.quantite)}$</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
              <div className='cart-section-two-map-cuppon-div-one'>
                <input type='text' placeholder='coupon code'/>
                <span>apply coupon</span>
              </div>
          </div>
          <div className='cart-section-two-map-right'>
            <div className='cart-section-two-map-right-top'>
              <div className='cart-section-two-map-right-h1'><h1>cart totals</h1></div>
              <div className='cart-section-two-map-right-one'>
                <span>subtotal</span>
                <span>{total}$</span>
              </div>
              <div className='cart-section-two-map-right-two'>
                <span>shipping</span>
                <span>Enter your address to view shipping options.</span>
              </div>
            </div>
            <div className='cart-section-two-map-right-bottom'>
                <div>
                  <span>total</span>
                  <span>{total}$</span>
                </div>
            </div>
          </div>
            </>
          ) : 
            <div className='cart-section-two-map-cart-all-divs'>
              <div className='cart-section-two-map-cart-empty'>
                <h1>your cart is currently empty.</h1>
              </div>
              <div className='cart-section-two-map-cart-empty-go-back'>
                <Link to='/'>return to show</Link>
              </div>
            </div>
            }
        </div>
        <Footer/>
    </div>
  );
}

export default Cart;
