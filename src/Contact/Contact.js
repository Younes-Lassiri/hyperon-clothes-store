import './Contact.css';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import logodark from '../clothes_images/logo_mark.png';
function Contact() {
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
      document.title = 'Contact Us – Hyperon';
  }, []);
  return (
    <div className='contact-section'>
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
        <div className='contact-section-one'>
            <div className='contact-section-one-left'>
                <h1>contact us</h1>
                <p>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum.</p>
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
                <div className='contact-section-one-left-infos'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                    <span>Via S. Raffaele, 6, 20121 Milano</span>
                </div>
                <div className='contact-section-one-left-infos'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                    <span>Monday to Friday: 9am to 8pm</span>
                </div>
                <div className='contact-section-one-left-infos'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#171717"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                    <span>youneslassirifreelance@gmail.com</span>
                </div>
                <div className='contact-section-one-left-social-media'>  
                    <ul>
                    <li>fcbk </li>
                    <li>twtr</li>
                    <li>nstgrm</li>
                    <li>pntrst</li>
                    </ul>
                </div>
            </div>
            <div className='contact-section-one-right'>
                <input type='text' placeholder='Full Name *'/>
                <input type='text' placeholder='Email Address *'/>
                <input type='text' placeholder='Website'/>
                <textarea placeholder='Write a comment...'></textarea>
                <button>submit</button>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Contact;
