import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Collection.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Collection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewed = useSelector((state) => state.viewed);
  const clothes = useSelector((state) => state.clothes);
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
  function detail(name){
    navigate(`/product/${name.split(' ').join('-')}`)
  }
  return (
    <div className="collection-section">
      <ToastContainer />
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
      <div className="collection-section-one">
        <h1>popular items</h1>
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
      <div className="collection-section-three">
        {clothes.slice(0,6).map((item,i) => {
          return(
            <div className="collection-section-three-item" key={i}>
              {item.soldout? (
                <span className="collection-section-three-item-sale">sold</span>
              ) : null}
              {item.sale? (
                <span className="collection-section-three-item-sale">sale</span>
              ) : null}
              <div className="collection-section-three-item-image" title={item.name} onClick={() => detail(item.name)}>
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
                    onClick={() => add_to_cart(item)}
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
                <div className="collection-section-three-item-infos-title">
                  <Link to={`/product/${item.name.split(' ').join('-')}`} style={{textDecoration: 'none'}}>
                    <span>{item.name}</span>
                  </Link>
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
    </div>
  );
}

export default Collection;