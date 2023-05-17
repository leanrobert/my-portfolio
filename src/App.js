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
    <div className='p-0 m-0 text-base text-white font-poppins w-full min-w-full'>
      <div className='relative grid items-center w-full'>
        <Image src={bg} alt='Login image' />
        <Navbar />
        <section id='main' className='px-4' >
          <Hero />
        </section>
        <section id='about' className='px-4'>
          <About />
        </section>
        <section id='skills' className='px-4'>
          <Skills />
        </section>
        <section id='projects' className='px-4'>
          <Projects />
        </section>
        <section id='contact' className='px-4'>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
