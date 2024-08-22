import React from "react";
import './Occassion.css';
function Occassion() {
  return (
    <div className="occassion-section">
        <div className="occassion-section-one"></div>
        <div className="occassion-section-two">
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
                    <polygon class="edgtf-polygon edgtf-polygon-1" points="0,0 16.021,0 12.958,3 0,3" fill="#fff" />
                    <polygon class="edgtf-polygon edgtf-polygon-2" points="16.268,3 19.299,0 29.562,0 26.5,3" fill="#fff" />
                    <polygon class="edgtf-polygon edgtf-polygon-3" points="29.969,3 33,0 40,0 37.031,3" fill="#fff" />
                    <polygon class="edgtf-polygon edgtf-polygon-4" points="41.031,3 44,0 49.031,0 46.031,3" fill="#fff" />
                    <polygon class="edgtf-polygon edgtf-polygon-5" points="50.969,3 54.031,0 58.031,0 55,3" fill="#fff" />
                    <polygon class="edgtf-polygon edgtf-polygon-6" points="59.96,3 62.96,0 65,0 61.992,3" fill="#fff" />
                </g>
            </svg>

            <p>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec</p>
            <a itemprop="url" href="" style={{color:'#fff', borderColor:'#fff'}} class="edgtf-btn edgtf-btn-medium edgtf-btn-gapped_outline">
               <span class="edgtf-btn-text">learn more</span>
               <span class="edgtf-gapped-border edgtf-gapped-border-top"></span>
               <span class="edgtf-gapped-border edgtf-gapped-border-bottom"></span>
            </a>
        </div>
    </div>
  );
}

export default Occassion;