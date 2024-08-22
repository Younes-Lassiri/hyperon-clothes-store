import './Wishlist.css';
import { useEffect } from 'react';
import logodark from '../clothes_images/logo_mark.png';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import Footer from '../Footer/Footer';
function Wishlist() {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
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
    function add_to_cart(item){
        dispatch({type: 'add_to_cart', payload: item});
        toast.success(`${item.name} added to cart!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      useEffect(() => {
        document.title = 'Wishlist – Hyperon';
    }, []);
  return (
    <div className='wishlist-section'>
        <ToastContainer />
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
        <div className='breadcrumb-section'>
            <div className='breadcrumb-section-one'>
                <span>Home</span>
                <span>/</span>
                <span>Wishlist</span>
            </div>
        </div>
        <div className='wishlist-section-one'>
            {wishlist.length > 0? (
                wishlist.map((item, i) => {
                    return(
                        <div className='wishlist-section-one-wished'>
                            <div className='wishlist-section-one-wished-cancel'>
                            <button className="" onClick={() => dispatch({type: 'remove_wish', payload: item})}>×</button>
                            </div>
                            <div className='wishlist-section-one-wished-image'>
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className='wishlist-section-one-wished-title'>
                                <span>{item.name}</span>
                            </div>
                            <div className='wishlist-section-one-wished-price'>
                                {item.promo? <span className='wishlist-old-price'>
                                    <span className='wishlist-old-price-old'>{item.oldPrice}$</span>
                                    <span>{item.price}$</span>
                                </span> : `${item.price}$`}
                                
                            </div>
                            <div className='wishlist-section-one-wished-stock'>
                                {item.soldout? 'Sold out': 'In Stock'}
                            </div>
                            <div className='wishlist-section-one-wished-to-cart'>
                                <button onClick={() => add_to_cart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            ) : <div className='wishlist-array-epty'>
                No products added to the wishlist
                </div>}
        </div>
        <Footer/>
    </div>
  );
}

export default Wishlist;
