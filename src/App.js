import React from 'react'
import Image from './components/Image'
import bg from '../src/assets/bg.jpg'
import Hero from './components/sections/Hero'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'

const App = () => {
  return (
    <div className='p-0 m-0 text-base text-white font-poppins'>
      <div className='relative grid items-center w-full md:justify-center'>
        <Image src={bg} alt='Login image' />
        <Navbar />
        <Hero id='main' />
        <About id='about' />
        <Skills id='skills' />
      </div>
    </div>
  )
}

export default App
