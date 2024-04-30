import React from 'react';
import './App.scss';
import Slider from 'react-slick';



function logoSlider({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    
    <div className="logo-slider">
      <Slider {...settings}>
      {moduleData.logo_images.map((item, index) => (
         <div key={index}>
        <a key={index} href={item.url}>
          <img src={item.src} alt={item.alt} />
        </a>
        </div>
      ))}
         </Slider>
    </div>
 
  );
}

export default logoSlider;
