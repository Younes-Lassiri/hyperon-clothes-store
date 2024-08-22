import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import './Home.css';
import slideone from '../clothes_images/slide_one.jpg';
import slidetwo from '../clothes_images/slide_two.jpg';
import slidethree from '../clothes_images/slide_three.jpg';
import logodark from '../clothes_images/logo_mark.png';

function Home() {
  const slider_images = [slideone, slidetwo, slidethree];
  const [index, setIndex] = useState(1);
  function add() {
    setIndex((prevIndex) => (prevIndex % slider_images.length) + 1);
  }
  function minuce() {
    setIndex((prevIndex) => (prevIndex === 1 ? slider_images.length : prevIndex - 1));
  }
  const leftIndex = index === 1 ? slider_images.length : index - 1;
  const rightIndex = index === slider_images.length ? 1 : index + 1;
  useEffect(() => {
    const timer = setTimeout(() => {
        setTimeout(() => {
            if (index <= slider_images.length - 1) {
              setIndex((prevIndex) => prevIndex + 1);
            } else {
              setIndex(1)
            }
        }, 3000);
    }, 2000);
    return () => clearTimeout(timer);
}, [index, slider_images.length]);
function rend(){
  switch (index) {
    case 1:
      return(
        <>
          <div className="home-section-main-center-top"><span>from $69</span></div>
          <div className="home-section-main-center-center"><span>red collection</span></div>
        </>
      )
      break;
    case 2:
      return(
        <>
          <div className="home-section-main-center-top"><span>from $59</span></div>
          <div className="home-section-main-center-center"><span>ready to wear</span></div>
        </>
      )
      break;
    case 3:
      return(
        <>
          <div className="home-section-main-center-top"><span>from $69</span></div>
          <div className="home-section-main-center-center"><span>new arrivals</span></div>
        </>
      )
  
    default:
      break;
  }
};
useEffect(() => {
  rend();
},[index])
useEffect(() => {
  const elements = [
    document.querySelector('.home-section-main-center-top'),
    document.querySelector('.home-section-main-center-center'),
    document.querySelector('.home-section-main-center-bottom-button'),
  ];
  const resetAnimation = (element, className) => {
    if (element) {
      element.classList.remove(className);
      void element.offsetWidth;
      element.classList.add(className);
    }
  };
  elements.forEach((element, index) => {
    const classNames = [
      'home-section-main-center-top',
      'home-section-main-center-center',
      'home-section-main-center-bottom-button',
    ];
    resetAnimation(element, classNames[index]);
  });
}, [index]);
const [clicked, setClicked] = useState(false);
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
const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        hideupfunc();
      };
      useEffect(() => {
        document.title = 'Hyperon – A Streetwear store';
    }, []);
  return (
    <div className="home-section">
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
      <Navbar func={showupfunc}/>
      <img src={slider_images[index - 1]} alt='slide' className="slider_image" />
      <div className="home-section-main">
        <div className="home-section-main-left">
          <span onClick={minuce}>0{leftIndex}</span>
        </div>
        <div className="home-section-main-center">
          {rend()}
          <div className="home-section-main-center-bottom"><button className="home-section-main-center-bottom-button">shop now</button></div>
        </div>
        <div className="home-section-main-right">
          <span onClick={add}>0{rightIndex}</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
