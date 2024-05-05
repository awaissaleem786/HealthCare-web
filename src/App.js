import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/banner';
import Buttons from './components/buttons';
import FooterSection from './components/footersection';
import Section1 from './components/section1';
import Sections2 from './components/section2';
import Section3 from './components/section3';
import Sections4 from './components/section4';
import Sections5 from './components/section5';
import Cards from './components/cards';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Banner />
            <Buttons />
            <Section1 />
            <Sections2 />
            <Section3 />
            <Sections4 />
            <Sections5 />
            <FooterSection />
          </>
        } />
        <Route path='/cards' element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
