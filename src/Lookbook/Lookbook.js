import './Lookbook.css';
import Navbar from '../Navbar/Navbar';
import logodark from '../clothes_images/logo_mark.png';
import lookbookOne from '../clothes_images/lookbook_one.jpg';
import lookbookTwo from '../clothes_images/lookbook_two.jpg';
import lookbookThree from '../clothes_images/lookbook_three.jpg';
import lookbookFour from '../clothes_images/lookbook_four.jpg';
import lookbookFive from '../clothes_images/lookbook_five.jpg';
import lookbookSix from '../clothes_images/lookbook_six.jpg';
import lookbookSeven from '../clothes_images/lookbook_seven.jpg';
import lookbookEight from '../clothes_images/lookbook_eight.jpg';
import lookbookNine from '../clothes_images/lookbook_nine.jpg';
import lookbookTen from '../clothes_images/lookbook_te.jpg';
import lookbookEleven from '../clothes_images/lookbook_eleven.jpg';
import lookbookTwelve from '../clothes_images/lookbook_twelve.jpg';
import lookbookThirteen from '../clothes_images/lookbook_thirteen.jpg';
import lookbookFourteen from '../clothes_images/lookbook_fourteen.jpg';
import lookbookFifteen from '../clothes_images/lookbook_fiveteen.jpg';
import lookbookSixteen from '../clothes_images/lookbook_sixteen.jpg';
import lookbookSeventeen from '../clothes_images/lookbook_seventeen.jpg';
import lookbookEighteen from '../clothes_images/lookbook_eightteen.jpg';
import lookbookNineteen from '../clothes_images/lookbook_ninteen.jpg';
import lookbookTwenty from '../clothes_images/lookbook_twenty.jpg';
import lookbookTwentyOne from '../clothes_images/lookbook_twenyone.jpg';
import lookbookTwentyTwo from '../clothes_images/lookbook_twenytwo.jpg';
import lookbookTwentyThree from '../clothes_images/lookbook_twentythree.jpg';
import lookbookTwentyFour from '../clothes_images/lookbook_twentyfour.jpg';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
function Lookbook() {
    const [tag,setTag] = useState('all');
    useEffect(() => {
        const elements = document.querySelectorAll('.lookbook-section-lookbooks-items-item-animation');
        const resetAnimation = (element, className) => {
            if (element) {
                element.classList.remove(className);
                void element.offsetWidth;
                element.classList.add(className);
            }
        };
        elements.forEach((element, index) => {
            const classNames = 'lookbook-section-lookbooks-items-item-animation';
            resetAnimation(element, classNames);
          });
    }, [tag]);
    function rendertag(){
        switch (tag) {
            case 'all':
                return all();
                break;
            case 'fall':
                return fall();
                break;
            case 'spring':
                return spring();
                break;
            case 'casual':
                return casual();
                break;
            case 'street style':
                return street_style();
                break;
            case 'style':
                return style();
                break;
            case 'winter':
                return winter();
                break;
            default:
                break;
        }
    };
    function all()
    {
        return(
            <div className='lookbook-section-lookbooks-items'>
                {lookbookItems.map((item,i) => {
                    return(
                        <div className='lookbook-section-lookbooks-items-item lookbook-section-lookbooks-items-item-animation'>
                            <div className='lookbook-section-lookbooks-items-item-spans'>
                                <span className='lookbook-section-lookbooks-items-item-span'>{item.tag}</span>
                                <span className='lookbook-section-lookbooks-items-item-span-mini'>{item.tag}</span>
                            </div>
                            <img src={item.image} alt={item.tag}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    function fall()
    {
        return(
            <div className='lookbook-section-lookbooks-items'>
                {lookbookItems.filter((item) => item.tag === 'fall').map((item,i) => {
                    return(
                        <div className='lookbook-section-lookbooks-items-item lookbook-section-lookbooks-items-item-animation'>
                            <div className='lookbook-section-lookbooks-items-item-spans'>
                                <span className='lookbook-section-lookbooks-items-item-span'>{item.tag}</span>
                                <span className='lookbook-section-lookbooks-items-item-span-mini'>{item.tag}</span>
                            </div>
                            <img src={item.image} alt={item.tag}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    function spring()
    {
        return(
            <div className='lookbook-section-lookbooks-items'>
                {lookbookItems.filter((item) => item.tag === 'spring').map((item,i) => {
                    return(
                        <div className='lookbook-section-lookbooks-items-item lookbook-section-lookbooks-items-item-animation'>
                            <div className='lookbook-section-lookbooks-items-item-spans'>
                                <span className='lookbook-section-lookbooks-items-item-span'>{item.tag}</span>
                                <span className='lookbook-section-lookbooks-items-item-span-mini'>{item.tag}</span>
                            </div>
                            <img src={item.image} alt={item.tag}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    function street_style()
    {
        return(
            <div className='lookbook-section-lookbooks-items'>
                {lookbookItems.filter((item) => item.tag === 'street style').map((item,i) => {
                    return(
                        <div className='lookbook-section-lookbooks-items-item lookbook-section-lookbooks-items-item-animation'>
                            <div className='lookbook-section-lookbooks-items-item-spans'>
                                <span className='lookbook-section-lookbooks-items-item-span'>{item.tag}</span>
                                <span className='lookbook-section-lookbooks-items-item-span-mini'>{item.tag}</span>
                            </div>
                            <img src={item.image} alt={item.tag}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    function style()
    {
        return(
            <div className='lookbook-section-lookbooks-items'>
                {lookbookItems.filter((item) => item.tag === 'style').map((item,i) => {
                    return(
                        <div className='lookbook-section-lookbooks-items-item lookbook-section-lookbooks-items-item-animation'>
                            <div className='lookbook-section-lookbooks-items-item-spans'>
                                <span className='lookbook-section-lookbooks-items-item-span'>{item.tag}</span>
                                <span className='lookbook-section-lookbooks-items-item-span-mini'>{item.tag}</span>
                            </div>
                            <img src={item.image} alt={item.tag}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    function winter()
    {
        return(
            <div className='lookbook-section-lookbooks-items'>
                {lookbookItems.filter((item) => item.tag === 'winter').map((item,i) => {
                    return(
                        <div className='lookbook-section-lookbooks-items-item lookbook-section-lookbooks-items-item-animation'>
                            <div className='lookbook-section-lookbooks-items-item-spans'>
                                <span className='lookbook-section-lookbooks-items-item-span'>{item.tag}</span>
                                <span className='lookbook-section-lookbooks-items-item-span-mini'>{item.tag}</span>
                            </div>
                            <img src={item.image} alt={item.tag}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    function casual()
    {
        return(
            <div className='lookbook-section-lookbooks-items'>
                {lookbookItems.filter((item) => item.tag === 'casual').map((item,i) => {
                    return(
                        <div className='lookbook-section-lookbooks-items-item lookbook-section-lookbooks-items-item-animation' key={i}>
                            <div className='lookbook-section-lookbooks-items-item-spans'>
                                <span className='lookbook-section-lookbooks-items-item-span'>{item.tag}</span>
                                <span className='lookbook-section-lookbooks-items-item-span-mini'>{item.tag}</span>
                            </div>
                            <img src={item.image} alt={item.tag}/>
                        </div>
                    )
                })}
            </div>
        )
    }
    const tags = ['casual', 'fall', 'spring', 'street style', 'style', 'winter'];
    const lookbookItems = [
        { image: lookbookOne, tag: tags[0] },
        { image: lookbookTwo, tag: tags[1] },
        { image: lookbookThree, tag: tags[2] },
        { image: lookbookFour, tag: tags[3] },
        { image: lookbookFive, tag: tags[4] },
        { image: lookbookSix, tag: tags[5] },
        { image: lookbookSeven, tag: tags[0] },
        { image: lookbookEight, tag: tags[1] },
        { image: lookbookNine, tag: tags[2] },
        { image: lookbookTen, tag: tags[3] },
        { image: lookbookEleven, tag: tags[4] },
        { image: lookbookTwelve, tag: tags[5] },
        { image: lookbookThirteen, tag: tags[0] },
        { image: lookbookFourteen, tag: tags[1] },
        { image: lookbookFifteen, tag: tags[2] },
        { image: lookbookSixteen, tag: tags[3] },
        { image: lookbookSeventeen, tag: tags[4] },
        { image: lookbookEighteen, tag: tags[5] },
        { image: lookbookNineteen, tag: tags[0] },
        { image: lookbookTwenty, tag: tags[1] },
        { image: lookbookTwentyOne, tag: tags[2] },
        { image: lookbookTwentyTwo, tag: tags[3] },
        { image: lookbookTwentyThree, tag: tags[4] },
        { image: lookbookTwentyFour, tag: tags[5] },
    ];

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
        document.title = 'Two Columns Grid – Hyperon';
    }, []);
  return (
    <div className='lookbook-section'>
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
                <span>Lookbook</span>
                <span>/</span>
                <span>Two Columns Grid</span>
            </div>
        </div>
        <div className='lookbook-section-navbar'>
            <ul>
                <li className={tag === 'all'? 'active-tag-li': null} onClick={() => setTag('all')}>show all</li>
                <li className={tag === 'casual'? 'active-tag-li': null} onClick={() => setTag('casual')}>casual</li>
                <li className={tag === 'fall'? 'active-tag-li': null} onClick={() => setTag('fall')}>fall</li>
                <li className={tag === 'spring'? 'active-tag-li': null} onClick={() => setTag('spring')}>spring</li>
                <li className={tag === 'street style'? 'active-tag-li': null} onClick={() => setTag('street style')}>street style</li>
                <li className={tag === 'style'? 'active-tag-li': null} onClick={() => setTag('style')}>style</li>
                <li className={tag === 'winter'? 'active-tag-li': null} onClick={() => setTag('winter')}>winter</li>
            </ul>
            {rendertag()}
        </div>
        <Footer/>
    </div>
  );
}

export default Lookbook;
