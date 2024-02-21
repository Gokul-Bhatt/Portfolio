import React from 'react'
import Nav from './components/Navbar/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
