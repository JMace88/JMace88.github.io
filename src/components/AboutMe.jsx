import React from 'react';
import './styles/about.css';
import Gallery from './Gallery';

const AboutMe = () => {
  return (
    <>
      <main>
        <div className='card'>
          <h2>My Focus</h2>
          <p>
            A passion for design and customer satisfaction honed over 15
            years in retail management at companies including{' '}
            <a className='text-link' href='https://www.zgallerie.com'>
              Z Gallerie
            </a>{' '}
            &{' '}
            <a className='text-link' href='https://www.sephora.com' target='_blank'>
              Sephora
            </a>
            .
          </p>
          <img src='zgall.jpg' alt='a round table with decor' target='_blank'/>
        </div>
        <div className='card'>
          <h2>My Story</h2>
          <p>
            I live in Dallas, Texas with my partner of 15 years and our two dogs, Amy & Yuki,
            and our cat Ripley. <br />
            <br />
            I love nature and animals and have been a fan of Sci-Fi & Fantasty as long as I can remember. 
            
          </p>
          <img src='mypups.jpg' alt='Two dogs lying head to head' />
        </div>
        <div className='carousel'>
          <h2>My Nerd Cred</h2>
          <p className='nerd-cred'>These are some of my favorite pictures from FanExpo Dallas.</p>
          <Gallery />
        </div>
      </main>
    </>
  );
};

export default AboutMe;
