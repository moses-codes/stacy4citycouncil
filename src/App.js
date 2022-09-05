import './App.css';


import About from './components/About'
import Banner from './components/Banner'
import Endorsements from './components/Endorsements'
import Header from './components/Header'
import Hero from './components/Hero'
import Positions from './components/Positions'
import Join from './components/Join'
import Footer from './components/Footer'

import Content from './data/content'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

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

        <Join />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
