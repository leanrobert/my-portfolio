import React from 'react'
import Buttons from '../Buttons'
import Layout from '../Layout'
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'

const Hero = () => {

  return (
    <Layout>
      <div className='py-6 md:py-20'>
        <h1 className='text-4xl font-bold text-center md:text-5xl'>Hi, I'm <span className='block md:inline'>Leandro Robert</span></h1>
        <div className='relative mt-8'>
          <TypeAnimation
            sequence={[ 'Software Developer', 2000, 'Sysadmin', 2000 ]}
            wrapper='h2'
            repeat={Infinity}
            className='text-2xl font-bold text-transparent text-stroke text-center md:text-3xl'
          />
        </div>
        <p className='text-md mt-8 mx-0 mb-8 max-w-[600px] sm:text-center md:text-lg md:mx-auto'>
          Experienced full stack developer dedicated to crafting exceptional web solutions that seamlessly blend functionality and aesthetics.
        </p>
        <div className='relative flex justify-center h-20 gap-6'>
          <Buttons>
            <a href='/CV-Leandro-Robert-EN.pdf' download='LRobert-EN.pdf'>Resume</a>
          </Buttons>
          <Buttons>
            <Link to='contact' href='/contact' smooth={true} duration={500}>Let's Talk</Link>
          </Buttons>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <a href='https://github.com/leanrobert' aria-label='Lean Github profile' target='_blank' rel='noreferrer' className='w-10 h-10 border-[0.2rem] border-orange-300 rounded-full flex items-center justify-center text-orange-300 text-xl duration-300 hover:text-white hover:border-white hover:bg-orange-500'><SlSocialGithub /></a>
          <a href='https://www.linkedin.com/in/leandro-robert-sosa-166204188' aria-label='Lean Linkedin profile' target='_blank' rel='noreferrer' className='w-10 h-10 border-[0.2rem] border-orange-300 rounded-full flex items-center justify-center text-orange-300 text-xl duration-300 hover:text-white hover:border-white hover:bg-orange-500'><SlSocialLinkedin  /></a>
        </div>
      </div>
    </Layout>
  )
}

export default Hero