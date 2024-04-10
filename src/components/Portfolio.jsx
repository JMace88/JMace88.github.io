import './styles/portfolio.css';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <>
      <main>
        <div id='portfolio-card' className='carousel first-card'>
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Portfolio;
