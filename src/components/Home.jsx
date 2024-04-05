import './styles/home.css';

const Home = () => {
  return (
    <>
      <main>
        <div className='person'>
          <h1>Josh Mace</h1>
          <div className='person__container'>
            <img
              className='person__circle'
              src='moon-png-44668.png'
            />
            <img
              className='person__img'
              src='withyukinobackground.png'
              alt='picture for home'
            />
          </div>
        </div>
        <h1 className='yuki'>and Yuki!</h1>
      </main>
    </>
  );
};

export default Home;
