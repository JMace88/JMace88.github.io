import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element= {<Home />} />
      </Routes>
    </>
  );
}

export default App;
