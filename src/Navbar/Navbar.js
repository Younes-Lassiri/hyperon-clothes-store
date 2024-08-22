import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';
import { useSelector, useDispatch } from "react-redux";
import logolight from '../clothes_images/logo_light.png';
import logodark from '../clothes_images/logo_mark.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Navbar(props) {
  const [pages,setPages] = useState(false);
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const showPreview = () => {
        setPreviewVisible(true);
  };
  const hidePreview = () => {
      setPreviewVisible(false);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const cart = useSelector((state) => state.cart);
  const wish = useSelector((state) => state.wishlist);
  const [cli, setCli] = useState(false);
  const [isMobile, setIsMobile] = useState(0);
  const updateIsMobile = () => {
    const mobileBreakpoint = 768;
    if (window.innerWidth <= mobileBreakpoint) {
      setIsMobile(1);
    } else {
      setIsMobile(0);
    }
  };
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + (item.quantite * item.price), 0);
    setTotal(newTotal);
  }, [cart]);
  useEffect(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      };
      function showmobile(){
        const element = document.querySelector('.navbar-section-menu-mobile-true');
        const parent = document.querySelector('.navbar-section-menu-mobile');
        if (element.classList.contains('navbar-section-menu-mobile-true-ul')) {
          element.classList.remove('navbar-section-menu-mobile-true-ul');
          element.classList.remove('navbar-section-menu-mobile-true-ul-wayout');
          element.classList.add('navbar-section-menu-mobile-true-ul-show');
          console.log(element);
          parent.style.zIndex = 2000;
        }else{
          element.classList.add('navbar-section-menu-mobile-true-ul');
          element.classList.add('navbar-section-menu-mobile-true-ul-wayout');
          element.classList.remove('navbar-section-menu-mobile-true-ul-show');
          console.log(element);
          parent.style.zIndex = 1;
        }
      }
      useEffect(() => {
        const body = document.body;
        if (search) {
          body.classList.add('body-stopped');
        }else{
          body.classList.remove('body-stopped');
        }
      }, [search]);
      function hidesearch()
      {
        setSearch(false);
      }
      const [searchValue, setsearchValue] = useState();
      const handleKeyDown = (e) => {
        if (e.key === 'Enter' && searchValue !== "") {
          navigate(`/product/${searchValue.toLowerCase().split(' ').join('-')}`)
        }
      };
    return (
      <div className="navbar-section-all-sections">
        {
          search? (
            <div className="navbar-section-all-sections-search" onClick={hidesearch}>
              <div className="navbar-section-all-sections-search-one">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="22.081px"
                height="17.735px"
                viewBox="0 0 22.081 17.735"
                xmlSpace="preserve"
                onClick={() => setSearch(false)}
              >
                <polygon points="4.375,17.735 22.081,0 17.789,0 0,17.735" />
                <polygon points="17.705,17.735 0,0 4.292,0 22.081,17.735" />
              </svg>
              </div>
              <div className="navbar-section-all-sections-search-two">
                <input type='text' placeholder="search" onClick={(event) => event.stopPropagation()} onChange={(e) => setsearchValue(e.target.value)} onKeyDown={handleKeyDown}/>
              </div>
            </div>
          ) : null
        }
        <div className={`navbar-section ${isScrolling ? 'isScrolling' : ''}`} id={props.detail? 'navbar-section-detail-dark' : ''}>
          {isMobile? (
            <div className="navbar-section-humberger" onClick={showmobile}>
              <div className="humb-lines">
                <div className="humb-line"></div>
                <div className="humb-line"></div>
                <div className="humb-line"></div>
              </div>
            </div>
          ) :null}
            <div className="navbar-section-logo"><img src={isScrolling | isMobile  === 1 | props.detail? logodark : logolight} alt='logo'/>
            </div>
            <div className={props.detail? 'navbar-section-menu-detail' : 'navbar-section-menu'}>
                <ul>
                    <li><Link to='/' className="menu-active">home</Link></li>
                    <li className="navbar-pages-dropdown" onMouseEnter={() => setPages(true)} onMouseLeave={() => setPages(false)} onClick={() => setPages(!pages)}>
                      <a style={{cursor: 'pointer'}}>pages</a>
                      {pages? (
                        <div className="navbar-pages-dropdown-menu">
                          <ul>
                            <li><Link to='/about-us'>about us</Link></li>
                            <li><Link to='/contact-us'>contact us</Link></li>
                          </ul>
                        </div>
                      ) : null}
                    </li>
                    <li><Link to="/shop">shop</Link></li>
                    <li><Link to="/lookbook/two-columns-grid">lookbook</Link></li>
                    <li><Link to="/elements/product-list-types">elements</Link></li>
                </ul>
            </div>
            <div className={props.detail? 'navbar-section-humb-detail' : 'navbar-section-humb'}>
                {isScrolling? null : <Link to='/wishlist'>wishlist ({wish.length})</Link>}
                <div className="navbar-section-all-sections-cart-preview-div" onMouseEnter={showPreview} onMouseLeave={hidePreview}>
                  <Link to='/cart' className="navbar-section-humb-cart">cart ({cart.length})</Link>
                  {
                    isPreviewVisible? (
                      <div className="navbar-section-all-sections-cart-preview" onMouseEnter={showPreview} onMouseLeave={hidePreview}>
                      {
                        cart.length? (
                            <div>
                                <div className="navbar-section-all-sections-cart-preview-overflow-y">
                                    {
                                      cart.map((item,i) => {
                                        return(
                                          <div className="navbar-section-all-sections-cart-preview-item">
                                            <div className="navbar-section-all-sections-cart-preview-item-one">
                                              <Link to={`/product/${item.name.split(' ').join('-')}`}><img src={item.image} alt={item.name}/></Link>
                                            </div>
                                            <div className="navbar-section-all-sections-cart-preview-item-two">
                                              <Link to={`/product/${item.name.split(' ').join('-')}`}>{item.name}</Link>
                                              <span>{item.quantite} x {item.price}$</span>
                                            </div>
                                            <div className="navbar-section-all-sections-cart-preview-item-three">
                                            <button onClick={() => dispatch({type: 'remove_cart', payload: item.id})}>×</button>
                                            </div>
                                          </div>
                                        )
                                      }
                                      )
                                    }
                                </div>
                                    <div className="total-cart-preview-div"><span className="total-cart-preview">total: {total}$</span></div>
                                <div className="navbar-section-all-sections-cart-preview-not-empty">
                                  <div>
                                    <Link to='/cart'>view cart</Link>
                                  </div>
                                  <div className="navbar-section-all-sections-cart-preview-not-empty-checkout">
                                    <Link to='/'>checkout</Link>
                                  </div>
                                </div>
                              </div>
                        ) : <h1 className="cart-empty-h1">no products in the cart.</h1>
                      }
                  </div>
                    ) : null
                  }
                </div>
                {isScrolling? null : <a style={{cursor: 'pointer'}} onClick={() => setSearch(true)}>search</a>}
                <div className="navbar-section-humb-svg">
                <svg
                    className="interactive-svg"
                    x="0px"
                    y="0px"
                    width="27.883px"
                    height="17px"
                    viewBox="0 0 27.883 17"
                    enableBackground="new 0 0 27.883 17"
                    onClick={() => props.func()}
                >
                    <rect x="0.008" width="27.875" height="3" />
                    <rect x="0.008" y="14" width="27.875" height="3" />
                    <polygon className="first-polygon" points="10.401,10.023 0,10.023 0,7.023 13.401,7.023"/>
                    <polygon className="last-polygon" points="17.375,7.023 27.891,7.023 27.891,10.023 14.375,10.023" />
                </svg>
                </div>
            </div>
      </div>
      {isMobile === 1? (
        <div className="navbar-section-menu-mobile">
        <ul className="navbar-section-menu-mobile-true-ul navbar-section-menu-mobile-true">
            <li><Link to="/" className="menu-active-mobile">home</Link></li>
            <li className="navbar-pages-dropdown" onClick={() => setPages(!pages)}>
                <a style={{cursor: 'pointer'}}>pages</a>
                {pages? (
                  <div className="navbar-pages-dropdown-menu">
                    <ul>
                      <li><Link to='/about-us'>about us</Link></li>
                      <li><Link to='/contact-us'>contact us</Link></li>
                    </ul>
                  </div>
                ) : null}
            </li>
            <li><Link to="/shop">shop</Link></li>
            <li><Link to="/lookbook/two-columns-grid">lookbook</Link></li>
            <li className="nav-mobile-last" style={{border: 'none'}}><Link to="/elements/product-list-types">elements</Link></li>
        </ul>
    </div>
      ) : null}
      </div>
    );
}
export default Navbar;