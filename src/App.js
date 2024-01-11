import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Services from './components/Services';
import InteriorDesign from './components/InteriorDesign';
import ConstructBuilding from './components/ConstructBuilding';
import Mauris from './components/Mauris';
import Cardlorem from './components/Cardlorem';
import Gatescompany from './components/Gatescompany';
import Gallery from './components/Gallery';
import Imggallery from './components/Imggallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Backtotop from './assets/images/webp/backtotoparrow.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Loader } from './components/Iconimg';

function App() {
  // ----------back-to-top----------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ---------aos------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  });
  // -----------pre-loader-----------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
  }, []);

  return (
    <div className='overflow-x-hidden'>
      {screenLoading ? (
        <>
          <div className='fixed min-h-screen bg-[#025066] top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='max-w-[95px] w-full'>
              <Loader />
            </div>

          </div>

        </>

      ) : (
        <div className='overflow-hidden'>
          <Header />
          <Services />
          <InteriorDesign />
          <ConstructBuilding />
          <Mauris />
          <Cardlorem />
          <Gatescompany />
          <Gallery />
          <Imggallery />
          <Testimonials />
          <Contact />
          <Footer />
          <div className='fixed bottom-4 right-4 z-[6] cursor-pointer'>
            <div className={backToTop ? 'w-[60px] h-[60px] rounded-[60px]' : 'hidden'} onClick={() => top()}>
              <img src={Backtotop} alt="Backtotop" className=' w-full' />
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
