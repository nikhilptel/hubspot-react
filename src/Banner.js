import React from 'react';
import Slider from 'react-slick';
import './style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Banner({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
    <div className="banner-slider-item">
      <div className="banner-content-side">
        <div className="inner-banner-content-side">
          <div className="banner-heading">
            <h1 >{moduleData.heading_text}</h1>
          </div>
          <div className="banner-text">
            <p>{moduleData.pargraph_text}</p>
          </div>
          <div className="banner-btn">
            <a href={moduleData.button_link.url.href} className="button button--primary">Register</a>
          </div>
        </div>
      </div>
      <div className="banner-image-side">
        <div className="inner-banner-image-side">
          <img src={moduleData.image_field.src} alt="banner image" />
        </div>
      </div>
    </div>

    <div className="banner-slider-item">
      <div className="banner-content-side">
        <div className="inner-banner-content-side">
          <div className="banner-heading">
            <h1 >{moduleData.heading_text}</h1>
          </div>
          <div className="banner-text">
            <p>{moduleData.pargraph_text}</p>
          </div>
          <div className="banner-btn">
            <a href={moduleData.button_link.url.href} className="button button--primary">Register</a>
          </div>
        </div>
      </div>
      <div className="banner-image-side">
        <div className="inner-banner-image-side">
          <img src={moduleData.image_field.src} alt="banner image" />
        </div>
      </div>
    </div>

    <div className="banner-slider-item">
      <div className="banner-content-side">
        <div className="inner-banner-content-side">
          <div className="banner-heading">
            <h1 >{moduleData.heading_text}</h1>
          </div>
          <div className="banner-text">
            <p>{moduleData.pargraph_text}</p>
          </div>
          <div className="banner-btn">
            <a href={moduleData.button_link.url.href} className="button button--primary">Register</a>
          </div>
        </div>
      </div>
      <div className="banner-image-side">
        <div className="inner-banner-image-side">
          <img src={moduleData.image_field.src} alt="banner image" />
        </div>
      </div>
    </div>
    </Slider>
  );
};



export default Banner;