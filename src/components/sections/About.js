import React from 'react'
import Layout from '../Layout'
import me from '../../assets/yo.jpg'
import Buttons from '../Buttons'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <Layout>
      <div>
        <h2 className='text-2xl text-center font-bold'>About <span className='text-orange-300'>Me</span></h2>

        <div className='flex justify-center py-4'>
          <img src={me} alt='Lean Robert' className='rounded-full h-28 w-28 border-[0.2rem] border-orange-300' />
        </div>

        <div className='flex flex-col items-center gap-2'>
          <h3 className='font-bold text-xl'>Software Developer &amp; Sysadmin</h3>
          <p className='text-sm'>
            Welcome! I'm an experienced software developer with a background in sysadmin and one year
            of dedicated software development experience. I specialize in the MERN stack, using
            JavaScript and Python along with frameworks like React, Next, and Express. I excel in
            building robust and user-friendly web applications, and my deep understanding of database
            management ensures efficient and secure systems. With a track record of delivering
            high-quality solutions, I follow agile methodologies and bring a unique problem-solving
            perspective to projects. I stay updated with emerging technologies, always seeking to
            deliver cutting-edge solutions. Explore my portfolio to see examples of my work.
          </p>

          <Buttons className='py-2 mt-4'>
            <Link to='contact' smooth={true} duration={500}>
              Let's collaborate!
            </Link>
          </Buttons>
        </div>
      </div>
    </Layout>
  )
}

export default About