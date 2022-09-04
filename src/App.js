import './App.css';


import About from './components/About'
import Banner from './components/Banner'
import Endorsements from './components/Endorsements'
import Header from './components/Header'
import Hero from './components/Hero'
import Positions from './components/Positions'
import Join from './components/Join'


import Content from './data/content'
import {Parallax} from 'react-parallax'

function App() {

  return (
    <div className="App">
      <div className='header-hero'>
      <Header />
      <Hero />
      </div>
      
      
      <Positions 
      props = {Content}
      />
      <Banner />

      <About 
      content = {Content.about}
      />

      <Endorsements 
      props = {Content}
      />

      <Join />
    </div>
  );
}

export default App;
