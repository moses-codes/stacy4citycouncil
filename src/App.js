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

function App() {

  return (
    <div className="App">
      <div className='header-hero'>
        <Header />
        <Hero />
      </div>


      <Positions
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
  );
}

export default App;
