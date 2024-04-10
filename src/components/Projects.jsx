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
            title='View the GitHub repo'
            target='_blank'
          >
            <img
              className='github-logo'
              src='github-mark-white.png'
              alt='a screenshot of the final project home page'
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
            This capstone project was to create an ecommerce site complete with
            front and back end. Myself and 3 teammates worked for two weeks to
            create Little Seed, BIG Garden, a site to sell herb and vegetable
            seeds. The site includes an all product view homepage, single
            product view, a cart, and a profile page (with admin specific views
            and functionality.) While we worked together on many aspects of the
            site, the database was designed and implemented primarily by myself.
          </p>
        </div>

        <div className='photo-div'>
          <h2 className='project-title'>The Tiny Zoo</h2>
          <a
            className='repo-link'
            href='https://github.com/JMace88/zoo-problem-workshop'
            alt='a link to The Tiny Zoo repo on GitHub'
            title='View the GitHub repo'
            target='_blank'
          >
            <img
              className='github-logo'
              src='github-mark-white.png'
              alt='a screenshot of the final project home page'
            />
          </a>
          <a
            // href='https://github.com/JMace88/zoo-problem-workshop'
            // alt='a link to The Tiny Zoo repo on GitHub'
            // title='View the GitHub repo'
            target='_blank'
          >
            <img
              src='myzoo.PNG'
              alt='a photo of the homepage showing zoo animals'
            />
          </a>
          <p>
            The Tiny Zoo project is about a request from a zoo to create a page
            that would help their new zoo keepers identify individual animals
            and their specific needs.
            <br />
            <br />
            In this project I created sections based on species with links to
            their specific needs. Within these sections I made a card for each
            individual that helps the keeper identify them.
          </p>
        </div>

        <div className='photo-div'>
          <h2 className='project-title'>The "Goldblum" Problem</h2>
          <a
            href='https://github.com/JMace88/picasso-workshop'
            alt='a link to The Goldblum Problem repo on GitHub'
            title='View the GitHub repo'
            target='_blank'
          >
            <img
              src='goldblumproblem.PNG'
              alt='a screenshot of the final project'
            />
          </a>
          <p>
            The Picasso (Goldblum for me) Problem provided our cohort with an
            image to recreate using only HTML and CSS to create shapes and
            format the picture.
            <br />
            <br />
            For my version of the solution I created the objects with HTML and
            CSS but also added images of the beloved actor Jeff Goldblum.
          </p>
        </div>

        <div className='photo-div'>
          <h2 className='project-title'>Project Pantry</h2>
          <a
            href='https://github.com/JMace88/block6_grocery_list'
            alt='a link to Project Pantry repo on GitHub'
            title='View the GitHub repo'
            target='_blank'
          >
            <img src='pantry.PNG' alt='a screenshot of the final project' />
          </a>
          <p>
            Project Pantry had an objective of sorting a grocery list into
            multiple categories using HTML and CSS.
            <br />
            <br />
            In this project I created the sections based on food type and used
            colors through CSS styling to assist in quickly identifying the
            needed items.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Projects;
