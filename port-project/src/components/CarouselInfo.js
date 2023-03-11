import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Slides } from '../app/shared/Slides';
import Carousel from 'react-slick'

const CarouselInfo = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };
      

    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   beforeChange: (current, next) => setCurrentSlide(next),
    // };
  
    return (
        <div className="carousel">
        <button onClick={handlePrevSlide}>Previous</button>
        <div className="slides">
          {Slides.map((slide, index) => (
            <div key={index} className={index === currentSlide ? 'active' : ''}>
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    //   <Carousel {...settings}>
    //     {Slides.map((slide) => (
    //         <div key={slide.id}>
    //             <h2>{slide.title}</h2>
    //             <p>{slide.content}</p>
    //         </div>
    //     ))}
    //   </Carousel>
    );
  };



export default CarouselInfo;
