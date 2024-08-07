
import React, { useState, Component } from 'react';
// import Slider from 'react-slick';
import { Button } from 'reactstrap';
import { Slides } from '../app/shared/Slides';
import Slider from 'react-slick'

const CarouselInfo = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
 
  return (
    <div >
      <Slider {...settings}>
        {Slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? 'active' : ''}>
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};



export default CarouselInfo;
