import './styles/home.css';

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <div className='all-items'>
            <div className='person'>
              <div className='person__container'>
                <img className='person__circle' src='crabnebula.jpg' />
                <img
                  className='person__img'
                  src='withyukinobackground.png'
                  alt='picture for home'
                />
              </div>
            </div>
          <div >
            <h1 className='yuki'>Josh</h1>
            <h1 className='yuki'>& Yuki!</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
