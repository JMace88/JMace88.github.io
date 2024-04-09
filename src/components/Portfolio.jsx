import './styles/portfolio.css';

const Portfolio = () => {
  return (
    <>
      <main>
        <article>
          <div className='card'>
            <h2>The Tiny Zoo</h2>

            <p>
              The Tiny Zoo project is about a request from a zoo to create a
              page that would help their new zoo keepers identify individual
              animals and their specific needs.
              <br />
              <br />
              In this project I created sections based on species with links to
              their specific needs. Within these sections I made a card for each
              individual that helps the keeper identify them.
            </p>
            <a
              href='https://github.com/JMace88/zoo-problem-workshop'
              alt='a link to The Tiny Zoo reop on GitHub'
              title='View the GitHub repo'
              target='_blank'
            >
              <img src='myzoo.PNG' alt='project 1 pic' />
            </a>
          </div>

          <div className='card'>
            <h2>The "Goldblum" Problem</h2>

            <p>
              The Picasso (Goldblum for me) Problem provided our cohort with an
              image to recreate using only HTML and CSS to create shapes and
              format the picture.
              <br />
              <br />
              For my version of the solution I created the objects with HTML and
              CSS but also added images of the beloved actor Jeff Goldblum.
            </p>

            <a
              href='https://github.com/JMace88/picasso-workshop'
              alt='a link to the Picasso Workshop on GitHub'
              title='View the GitHub repo'
              target='_blank'
            >
              <img
                src='goldblumproblem.PNG'
                alt='project 2 pic'
              />
            </a>
          </div>

          <div className='card'>
            <h2>Project Pantry</h2>
            <p>
              Project Pantry had an objective of sorting a grocery list into
              multiple categories using HTML and CSS.
              <br />
              <br />
              In this project I created the sections based on food type and used
              colors through CSS styling to assist in quickly identifying the
              needed items.
            </p>
            <a
              href='https://github.com/JMace88/block6_grocery_list'
              alt='a link to Grocery List workshop on GitHub'
              title='View the GitHub repo'
              target='_blank'
            >
              <img src='pantry.PNG' alt='project 3 pic' />
            </a>
          </div>
        </article>
      </main>
    </>
  );
};

export default Portfolio;
