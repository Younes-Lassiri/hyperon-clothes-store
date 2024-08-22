import React, { useState } from "react";
import './Items.css';
import badone from '../clothes_images/bad_one.jpg';
import badtwo from '../clothes_images/bad_two.jpg';
import badthree from '../clothes_images/bad_three.jpg';
import badfour from '../clothes_images/bad_four.jpg';
function Items() {
  const list = [
    badone,
    badtwo,
    badthree,
    badfour
  ];
  const [index, setIndex] = useState(0);
  function addindex()
  {
    if (index < list.length-1) {
      setIndex(index+1)
    }else{
      setIndex(0)
    }
  };
  function minuceindex()
  {
    if (index > 0) {
      setIndex(index-1)
    }else{
      setIndex(3)
    }
  }
    return (
      <div className="items-section">
        <div className="collection-section-one">
        <h1>our last item</h1>
        <div>
        <svg
        x="0px"
        y="0px"
        width="65px"
        height="3px"
        viewBox="0 0 65 3"
        enableBackground="new 0 0 65 3"
      >
        <g>
          <polygon className="edgtf-polygon edgtf-polygon-1" points="0,0 16.021,0 12.958,3 0,3" />
          <polygon className="edgtf-polygon edgtf-polygon-2" points="16.268,3 19.299,0 29.562,0 26.5,3" />
          <polygon className="edgtf-polygon edgtf-polygon-3" points="29.969,3 33,0 40,0 37.031,3" />
          <polyline className="edgtf-polygon edgtf-polygon-4" points="41.031,3 44,0 49.031,0 46.031,3" />
          <polygon className="edgtf-polygon edgtf-polygon-5" points="50.969,3 54.031,0 58.031,0 55,3" />
          <polygon className="edgtf-polygon edgtf-polygon-6" points="59.96,3 62.96,0 65,0 61.992,3" />
        </g>
      </svg>
        </div>
        </div>
      <div className="collection-section-two"><p>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit.</p></div>
      <div className="items-section-three">
        <div className="items-section-three-left">
              <svg xmlns="http://www.w3.org/2000/svg" onClick={addindex} className="items-section-three-left-arrow-left" height="45px" viewBox="0 -960 960 960" width="45px" fill="#fff"><path d="M560-280 360-480l200-200v400Z"/></svg>
              <img src={list[index]} alt='bad_one'/>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={minuceindex} className="items-section-three-left-arrow-right" height="45px" viewBox="0 -960 960 960" width="45px" fill="#fff"><path d="M400-280v-400l200 200-200 200Z"/></svg>
        </div>
        <div className="items-section-three-right">
            <div className="items-section-three-right-all-dependencies">
                <div className="items-section-three-right-one">
                    <div className="items-section-three-right-one-old-div"><span className="items-section-three-right-one-old-div-span">105$</span></div>
                    <div className="items-section-three-right-one-new-div"><span className="items-section-three-right-one-new-div-span">79$</span></div>
                </div>
                <h1>bad shirt</h1>
                <span className="items-section-three-right-stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </span>
            </div>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
            <a type="button">add to cart</a>
        </div>
      </div>
      </div>
    );
}
export default Items;