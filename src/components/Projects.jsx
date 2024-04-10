import React from 'react';
import Slider from 'react-slick';
import './styles/about.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
  const settings = {
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div className='photo-div'>
          <h2 className='project-title'>Little Seed, BIG Garden </h2>
          <a
            className='repo-link'
            href='https://github.com/2401-Group-A/Capstone-EComSite'
            alt='a link to the Little Seed, BIG Garden repo on GitHub'
            title='View the GitHub Repo'
            target='_blank'
          >
            <img
              className='github-logo'
              src='github-mark-white.png'
              alt='The GitHub logo'
            />
          </a>
          <h3>Fullstack Academy Capstone</h3>
          <a
            // href='https://github.com/2401-Group-A/Capstone-EComSite'
            alt='a link to the Little Seed, BIG Garden deployed site'
            // title='View the site'
            target='_blank'
          >
            <img
              src='capstonehome.png'
              alt='a screenshot of the final project home page'
            />
          </a>
          <p>
            For my Fullstack capstone I teamed up with 3 others to build an e-commerce site, both front and back-end, called Little
            Seed, BIG Garden in just two weeks.
          </p>
        </div>

        <div className='photo-div'>
          <h2 className='project-title'>Book Buddy</h2>
          <a
            className='repo-link'
            href='https://github.com/JMace88/Unit3.BookBuddy.Starter'
            alt='a link to the Book Buddy repo on GitHub'
            title='View the GitHub Repo'
            target='_blank'
          >
            <img
              className='github-logo'
              src='github-mark-white.png'
              alt='the GitHub logo'
            />
          </a>
          <h3>Fullstack Academy Assignment</h3>
          <a
            href='https://jmacebookbuddy.netlify.app/'
            alt='a link to the deployed site'
            title='View the site'
            target='_blank'
          >
            <img
              src='bookbuddyhome.PNG'
              alt='a screenshot of the final project'
            />
          </a>
          <p>
            A project to build a front end application called BookBuddy for a
            library utilizing their API.
          </p>
        </div>

        <div className='photo-div'>
          <h2 className='project-title'>Puppy Bowl</h2>
          <a
            className='repo-link'
            href='https://github.com/JMace88/puppy-bowl-react'
            alt='a link to the Puppy Bowl repo on GitHub'
            title='View the GitHub Repo'
            target='_blank'
          >
            <img
              className='github-logo'
              src='github-mark-white.png'
              alt='the GitHub logo'
            />
          </a>
          <h3>Fullstack Academy Assignment</h3>
          <a
            href='https://jmace88puppybowlreact.netlify.app/'
            alt='a link to the deployed site'
            title='View the site'
            target='_blank'
          >
            <img
              src='puppybowlhome.PNG'
              alt='a screenshot of the final project'
            />
          </a>
          <p>
            A project to build a front end application for the 2024 Puppy Bowl
            to view add and remove players utilizing their API.
          </p>
        </div>

        <div className='photo-div'>
          <h2 className='project-title'>The Tiny Zoo</h2>
          <a
            className='repo-link'
            href='https://github.com/JMace88/zoo-problem-workshop'
            alt='a link to The Tiny Zoo repo on GitHub'
            title='View the GitHub Repo'
            target='_blank'
          >
            <img
              className='github-logo'
              src='github-mark-white.png'
              alt='the GitHub logo'
            />
          </a>
          <h3>Fullstack Academy Assignment</h3>
          <img
            src='myzoo.PNG'
            alt='a photo of the homepage showing zoo animals'
          />

          <p>
            A project from a zoo to create a page
            that would help their new zoo keepers identify individual animals
            and their specific needs.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Projects;
