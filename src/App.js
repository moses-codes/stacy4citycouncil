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


        <Positions
          id="positions"
          props={Content}
        />
        <Banner />

        <About
          content={Content.about}
        />

        <Endorsements
          props={Content}
        />
        <BannerTwo />

        <Join />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
