import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Details.css';
import Footer from '../Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logodark from '../clothes_images/logo_mark.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Details() {
    function add_to_cart(){
        dispatch({type: 'add_to_cart', payload: mainclothe});
        toast.success(`${mainclothe.name} added to cart!`, {
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
      function add_to_cartrelated(item){
        dispatch({type: 'add_to_cart', payload: item});
        toast.success(`${mainclothe.name} added to cart!`, {
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
      function add_to_wish(item){
        dispatch({type: 'add_to_wish', payload: item});
        toast.success(`${item.name} added to wishlist!`, {
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
    function detail(name){
        navigate(`/product/${name.split(' ').join('-')}`)
    };
    const navigate = useNavigate();
    const viewed = useSelector((state) => state.viewed);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const handleClick = value => {
        setCurrentValue(value)
      };
      const handleMouseLeave = () => {
        setHoverValue(undefined)
      };    
      const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
      };
    const stars = Array(5).fill(0)
        const styles = {
          stars: {
            display: "flex",
            flexDirection: "row",
            padding:'15px 0'
          }
        
        };
        const colors = {
          orange: "#bf402e",
          grey: "#a9a9a9"
          
      };
    const [terms, setTerms] = useState(false);
    const [nav, setNav] = useState('description');
    const dispatch = useDispatch()
    const [initialStyle, setInitialStyle] = useState({});
    const { name } = useParams()
    const clothes = useSelector(state => state.clothes);
    const relatedclothes = clothes.filter((clothe) => clothe.related === true);
    const mainclothe = clothes.find(f => f.name === name.split('-').join(' '));
      function description()
      {
        return(
            <div className='description-section-product'>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac</p>
            </div>
        )
      };
      function infos()
      {
        return(
            <div className='infos-section-product'>
                <div className='infos-section-product-one'>
                    <h2>weight</h2>
                    <span>0.50 kg</span>
                </div>
                <div className='infos-section-product-one'>
                    <h2>dimensions</h2>
                    <span>5 × 7 × 10 cm</span>
                </div>
                <div className='infos-section-product-one'>
                    <h2>color</h2>	
                    <span>red, white, gray, green, black</span>
                </div>
                <div className='infos-section-product-one'>
                    <h2>size</h2>	
                    <span>Small, Medium, Large</span>
                </div>
            </div>
        )
      };
      function reviews()
      {
        
        return(
            <div className='reviews-section-product'>
                <div className='reviews-section-product-one'>
                    <h2>REVIEWS</h2>
                    <span>There are no reviews yet.</span>
                </div>
                <div className='reviews-section-product-two'>
                    <div className='reviews-section-product-two-added'>
                        <span className='spanExept' >BE THE FIRST TO REVIEW {mainclothe.name}</span>
                        <span>Your email address will not be published. Required fields are marked *</span>
                    </div>
                    <div className='reviews-section-product-three-one'>
                        <span>Your Rating *</span>
                    </div>
                </div>
                <div className='reviews-section-product-three'>
                    <div className='reviews-section-product-three-texarea'>
                        <textarea cols='45' rows='8' placeholder='Your Review *'></textarea>
                    </div>
                    <div className='reviews-section-product-three-two'>
                        <input type='text' placeholder='Your Name *'/>
                        <input type='email' placeholder='Your Email *'/>
                    </div>
                    <div className='reviews-section-product-three-three'>
                        <div className='reviews-section-product-three-three-one'>
                            <div className='ensure-display-flex'>
                            <div onClick={() => setTerms(!terms)} className={terms? 'reviews-section-product-three-three-one-check-terms' : 'reviews-section-product-three-three-one-check'}></div>
                            </div>
                            <span className='reviews-section-product-three-three-check-span'>Save my name, email, and website in this browser for the next time I comment.</span>
                        </div>
                        <div className='reviews-section-product-three-three-two'>
                            <a href='/'>
                            submit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
      };
      function showNavContent()
      {
        switch (nav) {
            case 'description':
                return description();
                break;
            case 'infos':
                return infos();
                break;
            case 'reviews':
                return reviews()
                break;
            default:
                break;
        }
      };
      useEffect(() => {
        document.title = capitalizeWords(mainclothe.name) + ' – ' + 'Hyperon';
    }, [mainclothe.name]);
    
    function capitalizeWords(string) {
        return string.split(' ')
                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                     .join(' ');
    }     
    return(
        <div className='details-section'>
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
      {viewed.length > 0? (
      <div className="collection-section-popup-view-clothe" onClick={() => dispatch({type: 'viteview'})}>
      <div className="collection-section-popup-view-clothe-infos" onClick={(event) => event.stopPropagation()}>
        <div className="collection-section-popup-view-clothe-infos-left">
          <img src={viewed[0].image} alt={viewed.name}/>
        </div>
        <div className="collection-section-popup-view-clothe-infos-right">
          <div className="collection-section-popup-view-clothe-infos-right-top">
            <button onClick={() => dispatch({type: 'viteview'})}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
          </div>
          <div className="collection-section-popup-view-clothe-infos-right-bottom">
            <h1>{viewed[0].name}</h1>
            <h2>{viewed[0].price}$</h2>
            <span className="collection-section-popup-view-clothe-infos-right-bottom-span">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>☆</span>
              <span>☆</span>
            </span>
            <p>{viewed[0].description}</p>
            <div className="collection-section-popup-view-clothe-infos-right-bottom-add-quantite">
              <div className="collection-section-popup-view-clothe-infos-right-bottom-add-quantite-btns">
                <button onClick={() => dispatch({type: 'minuce_quantite', payload: viewed[0].id})}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M560-280 360-480l200-200v400Z"/></svg>
                </button>
                <span>{viewed[0].quantite}</span>
                <button onClick={() => dispatch({type: 'add_quantite', payload: viewed[0].id})}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M400-280v-400l200 200-200 200Z"/></svg>
                </button>
              </div>
              <a type="button" onClick={() => add_to_cart(viewed[0])}>add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      ) : null}
            <Navbar func={showupfunc} detail={true}/>
            <div className='breadcrumb-section'>
                <div className='breadcrumb-section-one'>
                    <span>Home</span>
                    <span>/</span>
                    <span>Shop</span>
                    <span>/</span>
                    <span>new arrivals</span>
                    <span>/</span>
                    <span>{mainclothe.name}</span>
                </div>
            </div>
            <div className='food-presentation-section'>
                <div className='food-presentation-section-left-side'>
                    <div className='food-presentation-section-left-side-one'><img src={mainclothe.image}/></div>
                    <div className='food-presentation-section-left-side-two'><img src={mainclothe.image}/></div>
                    <div className='food-presentation-section-left-side-three'><img src={mainclothe.image}/></div>
                    <div className='food-presentation-section-left-side-four'><img src={mainclothe.image}/></div>
                </div>
                <div className='food-presentation-section-right-side'>
                    <div className='food-presentation-section-right-side-title'>
                        <span className='name'>{mainclothe.name}</span>
                        <span className='price'>${mainclothe.price}</span>
                    </div>
                    <span className="details-section-three-right-stars">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </span>
                    <div className='food-presentation-section-right-side-desc'>Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ac turpis egestas mae cenas est pharetra. Nunc faucibus a pellentesque sit amet porttitor eget. At in tellus integer feugiat scelerisque varius morbi sunt in culpa qui.</div>
                    <div className='food-presentation-section-right-side-btns'>
                        <div className='food-presentation-section-right-side-btns-quantite'>
                            <div className='food-presentation-section-right-side-btns-quantite-one'>
                                <div className='food-presentation-section-right-side-btns-quantite-one-two'>
                                    <button onClick={() => dispatch({type: 'minuce_quantite', payload: mainclothe.id})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M560-280 360-480l200-200v400Z"/></svg>
                                    </button>
                                    <span>{mainclothe.quantite}</span>
                                    <button onClick={() => dispatch({type: 'add_quantite', payload: mainclothe.id})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M400-280v-400l200 200-200 200Z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='food-presentation-section-right-side-btns-add-to-cart'>
                            <button onClick={add_to_cart}>
                                add to cart
                            </button>
                        </div>
                    </div>
                    <div className='food-presentation-section-right-side-categorie'>
                        <div className='food-presentation-section-right-side-categorie-one'>
                            SKU: 006
                        </div>
                        <div className='food-presentation-section-right-side-categorie-two'>
                            CATEGORIE: new arrivals
                        </div>
                        <div className='food-presentation-section-right-side-categorie-three'>
                            animal, man, red, shirt
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-user-infos'>
                <div className='product-user-infos-navbar'>
                        <li className={nav === 'description' && 'active'} onClick={() => setNav('description')}>description</li>
                        <li className={nav === 'infos' && 'active'} onClick={() => setNav('infos')}>additional information</li>
                        <li className={nav === 'reviews' && 'active'} onClick={() => setNav('reviews')}>reviews (0)</li>
                </div>
                <div className='product-user-infos-main'>
                    {showNavContent()}
                </div>
            </div>
                <div className='related-title-products'>related products</div>
            <div className='related-products'>
                {relatedclothes.map((item,i) => {
            return(
                <div className="collection-section-three-item" key={i}>
                {item.soldout? (
                    <span className="collection-section-three-item-sale">sold</span>
                ) : null}
                {item.sale? (
                    <span className="collection-section-three-item-sale">sale</span>
                ) : null}
                <div className="details-section-three-item-image" title={item.name} onClick={() => detail(item.name)}>
                {item.soldout? (
                    <div className="collection-section-three-item-popup-soldout" onClick={(event) => event.stopPropagation()}>
                    <div className="collection-section-three-item-popup-view" onClick={() => dispatch({type: 'view', payload: item})}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                    </div>
                    <div className="collection-section-three-item-popup-like">
                    {item.added? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    ) : (
                        <svg onClick={() => add_to_wish(item)} fill="#171717" width="" height="" className="likesvg" viewBox="-32 -32 96.00 96.00" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>heart</title> <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path> </g></svg>
                    )}
                    </div>
                </div>
                ) : (
                    <div className="collection-section-three-item-popup" onClick={(event) => event.stopPropagation()}>
                    <div className="collection-section-three-item-popup-view" onClick={() => dispatch({type: 'view', payload: item})}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                    </div>
                    <div className="collection-section-three-item-popup-like">
                    {item.added? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    ) : (
                        <svg onClick={() => add_to_wish(item)} fill="#171717" className="likesvg" width="" height="" viewBox="-32 -32 96.00 96.00" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>heart</title> <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path> </g></svg>
                    )}
                    </div>
                    <div className="collection-section-three-item-popup-shop">
                    {item.shoped? (
                    <Link to='/cart'>
                          <svg xmlns="http://www.w3.org/2000/svg" title='view cart' height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z"/></svg>
                    </Link>
                  ) : (
                    <svg
                    height=""
                    width=""
                    version="1.1"
                    viewBox="-44.16 -44.16 132.48 132.48"
                    fill="#171717"
                    stroke="#171717"
                    onClick={() => add_to_cartrelated(item)}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path
                          style={{ fill: '#010002' }}
                          d="M44.16,6.6H11.592L10.66,1.179H2.408C1.076,1.179,0,2.257,0,3.588v2.408h6.602l4.248,24.709 c0.094,0.544,0.617,0.985,1.17,0.985h28.527c1.332,0,2.41-1.077,2.41-2.411v-2.406H15.078l-0.587-3.414h22.042 c2.66,0,5.172-2.128,5.611-4.75L44.16,6.6z"
                        ></path>
                        <circle
                          style={{ fill: '#010002' }}
                          cx="19.47"
                          cy="38.817"
                          r="4.165"
                        ></circle>
                        <path
                          style={{ fill: '#010002' }}
                          d="M29.762,38.816c0,2.299,1.863,4.164,4.162,4.164c2.301,0,4.168-1.865,4.168-4.164 c0-2.299-1.867-4.166-4.168-4.166C31.625,34.65,29.762,36.518,29.762,38.816z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  ) }
                    </div>
                </div>
                )}
                    <img src={item.image} alt={item.name}/>
                </div>
                <div className="collection-section-three-item-infos">
                    <div className="details-section-three-item-infos-title">
                    <Link to={`/product/${item.name.split(' ').join('-')}`} style={{textDecoration: 'none'}}>
                        <span className="details-section-three-item-infos-title-main-name">{item.name}</span>
                    </Link>
                    <span className="details-section-popup-view-clothe-infos-right-bottom-span">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>☆</span>
                        <span>☆</span>
                    </span>
                    </div>
                    <div className="collection-section-three-item-infos-prices">
                    {item.promo? (
                        <div className="collection-section-three-item-infos-prices-promo">
                        <div className="collection-section-three-item-infos-prices-promo-old-div"><span className="collection-section-three-item-infos-prices-promo-old">{item.oldPrice}$</span></div>
                        <div className="collection-section-three-item-infos-prices-promo-new-div"><span className="collection-section-three-item-infos-prices-promo-new">{item.price}$</span></div>
                        </div>
                    ) : (
                        <div className="collection-section-three-item-infos-prices-one">
                        <span>{item.price}$</span>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            )
                })}
            </div>
            <Footer/>
        </div>
    )
}
export default Details;