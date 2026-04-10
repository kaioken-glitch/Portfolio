import { useState } from 'react'
import './App.css'
import Nav from './Components/Navbar'
import Hero from './Components/hero'
import Banner from './Components/Skillsbanner'
import Projects from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Hero />
        <Banner />
        <Projects />
        <About />
        <Footer/>
      </div>
    </div>
  )
}

export default App
