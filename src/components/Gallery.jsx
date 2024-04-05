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
          <img src='/src/assets/images/drwhocast.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='/src/assets/images/withfelicia.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='/src/assets/images/withtakei.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='/src/assets/images/withgoldblum.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='/src/assets/images/withamya.jpg' alt='' />
        </div>
        <div className='photo-div'>
          <img src='/src/assets/images/wthdrwo2.jpg' alt='' />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
