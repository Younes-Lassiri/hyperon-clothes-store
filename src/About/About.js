import './About.css';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import logodark from '../clothes_images/logo_mark.png';
import aboutone from '../clothes_images/about_one.jpg';
import abouttwo from '../clothes_images/about_two.jpg';
import aboutthree from '../clothes_images/about_three.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function About() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <button className="slick-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill=""><path d="M560-280 360-480l200-200v400Z"/></svg>
                   </button>,
        nextArrow: <button className="slick-next">
                        <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill=""><path d="M400-280v-400l200 200-200 200Z"/></svg>
                   </button>,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
        document.title = 'About Us – Hyperon';
    }, []);
  return (
    <div className='about-section'>
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
        <div className='about-section-bg-section'>
            <h1>about us</h1>
        </div>
        <div className='about-section-two'>
            <div className='about-section-two-item'>
                <div className='about-section-two-item-image'><img src={aboutone} alt='about_one'/></div>
                <div className='about-section-two-item-desc'>
                    <h1>take a break</h1>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum </p>
                    <a href='/'>read more</a>
                </div>
            </div>
            <div className='about-section-two-item'>
                <div className='about-section-two-item-image'><img src={abouttwo} alt='about_two'/></div>
                <div className='about-section-two-item-desc'>
                    <h1>take a break</h1>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum </p>
                    <a href='/'>read more</a>
                </div>
            </div>
            <div className='about-section-two-item'>
                <div className='about-section-two-item-image'><img src={aboutthree} alt='about_three'/></div>
                <div className='about-section-two-item-desc'>
                    <h1>take a break</h1>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum </p>
                    <a href='/'>read more</a>
                </div>
            </div>
        </div>
        <div className='about-section-one'>
            <div className='about-section-one-one'>
                <div className='about-section-one-one-left'>
                    <h1>for the occassion</h1>
                    <svg
                        x="0px"
                        y="0px"
                        width="65px"
                        height="3px"
                        viewBox="0 0 65 3"
                        enable-background="new 0 0 65 3"
                    >
                        <g>
                            <polygon class="edgtf-polygon edgtf-polygon-1" points="0,0 16.021,0 12.958,3 0,3" fill="#171717" />
                            <polygon class="edgtf-polygon edgtf-polygon-2" points="16.268,3 19.299,0 29.562,0 26.5,3" fill="#171717" />
                            <polygon class="edgtf-polygon edgtf-polygon-3" points="29.969,3 33,0 40,0 37.031,3" fill="#171717" />
                            <polygon class="edgtf-polygon edgtf-polygon-4" points="41.031,3 44,0 49.031,0 46.031,3" fill="#171717" />
                            <polygon class="edgtf-polygon edgtf-polygon-5" points="50.969,3 54.031,0 58.031,0 55,3" fill="#171717" />
                            <polygon class="edgtf-polygon edgtf-polygon-6" points="59.96,3 62.96,0 65,0 61.992,3" fill="#171717" />
                        </g>
                    </svg>
                    <p>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec</p>
                    <a href='/'>
                    <span class="edgtf-btn-text">shop now</span>
                    </a>
                </div>
                <div className='about-section-one-one-right'>
                    <div className='about-section-one-one-right-denim'>
                        <h1>denim</h1>
                        <span>66%</span>
                        <hr></hr>
                    </div>
                    <div className='about-section-one-one-right-polyamide'>
                        <h1>polyamide</h1>
                        <span>87%</span>
                        <hr></hr>
                    </div>
                    <div className='about-section-one-one-right-flyknit'>
                        <h1>flyknit</h1>
                        <span>59%</span>
                        <hr></hr>
                    </div>
                    <div className='about-section-one-one-right-polymer'>
                        <h1>polymer</h1>
                        <span>42%</span>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
        <div className='about-us-section-revies'>
            <div className='about-us-section-revies-prev'></div>
            <Slider {...settings} className='about-us-section-revies-slider'>
                <div className='about-us-section-revies-slider-item'>
                    <h1>why they like us</h1>
                    <p>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
                    <div className='about-us-section-revies-slider-item-deve-infos'>
                        <h2>younes lassiri</h2>
                        <span>developer / designer</span>
                    </div>
                </div>
                <div className='about-us-section-revies-slider-item'>
                    <h1>why they like us</h1>
                    <p>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
                    <div className='about-us-section-revies-slider-item-deve-infos'>
                        <h2>younes lassiri</h2>
                        <span>developer / designer</span>
                    </div>
                </div>
                <div className='about-us-section-revies-slider-item'>
                    <h1>why they like us</h1>
                    <p>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
                    <div className='about-us-section-revies-slider-item-deve-infos'>
                        <h2>younes lassiri</h2>
                        <span>developer / designer</span>
                    </div>
                </div>
            </Slider>
            <div className='about-us-section-revies-next'></div>
        </div>
        <Footer/>
    </div>
  );
}

export default About;
