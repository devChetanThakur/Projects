import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full text-white min-h-screen bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;