import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="Slider-test">
        <h3>Slide 1</h3>
      </div>
      <div className="Slider-test">
        <h3>Slide 2</h3>
      </div>
      <div className="Slider-test">
        <h3>Slide 3</h3>
      </div>
      <div className="Slider-test">
        <h3>Slide 4</h3>
      </div>
      <div className="Slider-test">
        <h3>Slide 5</h3>
      </div>
      <div className="Slider-test">
        <h3>Slide 6</h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default SimpleSlider;