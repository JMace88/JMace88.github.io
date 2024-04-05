import React from 'react';
import './styles/about.css';
import Gallery from './Gallery';

const AboutMe = () => {
  return (
    <>
      <main>
        <div className='card-about'>
          <h2>My Career So Far</h2>
          <p>
            After 15 years in retail management, most recently with{' '}
            <a href='https://www.zgallerie.com'>Z Gallerie</a>, I'm taking those
            skills in a new direction.
            <br /> <br />
            Learning with Fullstack Academy will provide me the tools to explore
            a new industry with an emphasis on customer service and design.
          </p>
          <img
            src='zgall.jpg'
            alt='a round table with decor'
          />
        </div>
        <div className='card-about'>
          <h2>My Story</h2>
          <p>
            I was born in Oklahoma to a military family. We travelled around for
            my early childhood before settling in Utah for most of my school
            years. I moved to Texas my senior year of highschool and have been
            here since. <br />
            <br />
            I live with my partner of 15 years with our two dogs, Yuki & Amy,
            and our cat Ripley. <br />
            <br />
            We are huge nerds and love all things Sci-Fi & Fantasy.
          </p>
          <img
            src='mypups.jpg'
            alt='Two dogs lying head to head'
          />
        </div>
        <div className='carousel'>
          <h2>My Nerd Cred</h2>
          <Gallery />
        </div>
      </main>
    </>
  );
};

export default AboutMe;
