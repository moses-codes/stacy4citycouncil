import './App.css';


import About from './components/About'
import Banner from './components/Banner'
import BannerTwo from './components/BannerTwo'
import Endorsements from './components/Endorsements'
import Header from './components/Header'
import Hero from './components/Hero'
import Positions from './components/Positions'
import Join from './components/Join'
import Footer from './components/Footer'
import FadeInSection from './components/FadeInSection';
import Updates from './components/Updates'

import Events from './components/Events'

import Content from './data/content'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App relative">
        <div className='header-hero'>
          <Header className='sticky top-0' />
          <Hero />
        </div>

      
        <Updates></Updates>

        <Positions
          id="positions"
          props={Content}
        />
        <FadeInSection>
          <Banner />
        </FadeInSection>
        <About
          content={Content.about}
        />
        <FadeInSection>
          <Endorsements
            props={Content}
          />
        </FadeInSection>

        <FadeInSection>
          <BannerTwo />
        </FadeInSection>

        <FadeInSection>
          <Join />
        </FadeInSection>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
