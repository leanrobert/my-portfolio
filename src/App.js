import React from 'react'
import Image from './components/Image'
import bg from '../src/assets/bg.jpg'
import Hero from './components/sections/Hero'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

const App = () => {
  return (
    <div className='p-0 m-0 text-base text-white font-poppins'>
      <div className='relative grid items-center w-full md:justify-center'>
        <Image src={bg} alt='Login image' />
        <Navbar />
        <section id='main'>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
