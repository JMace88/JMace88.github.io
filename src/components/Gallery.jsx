import React from 'react';
import Slider from 'react-slick';
import './styles/about.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Gallery() {
  const settings = {
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div className='photo-div'>
          <img src='drwhocast.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='withfelicia.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='withtakei.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='withgoldblum.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='withamya.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='wthdrwo2.jpg' alt='' />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
