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
          <h3>My partner and I with Catherine Tate, John Barrowman, and Alex Kingston</h3>
          <img src='drwhocast.JPG' alt='Picture of me and my partner with cast members from Doctor Who.' />
        </div>
        <div className='photo-div'>
          <h3>My partner and I with Felicia Day</h3>
          <img src='withfelicia.jpg' alt='Picture of me with Felicia Day.' />
        </div>
        <div className='photo-div'>
          <h3>My partner and I with George Takei</h3>
          <img src='withtakei.jpg' alt='Picture of my an my partner with George Takei' />
        </div>
        <div className='photo-div'>
          <h3>My partner and I with Jeff Goldblum</h3>
          <img src='withgoldblum.jpg' alt='Picture of me and my partner with Jeff Goldblum' />
        </div>
        <div className='photo-div'>
          <h3>Me and Amy Acker</h3>
          <img src='withamya.JPG' alt='Picture of me with Amy Acker' />
        </div>
        <div className='photo-div'>
          <h3>My partner and I with Michelle Gomez, Peter Capaldi, and Jenna Coleman</h3>
          <img src='wthdrwo2.JPG' alt='Picture of me and my partner with cast members from Doctor Who.' />
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
