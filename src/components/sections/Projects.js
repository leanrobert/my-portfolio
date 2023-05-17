import React from 'react'
import Layout from '../Layout'
import proy1 from '../../assets/proy1.png'
import proy2 from '../../assets/proy2.png'
import proy3 from '../../assets/proy3.png'
import Buttons from '../Buttons'

const Projects = () => {
  return (
    <Layout className='md:py-20'>
      <h2 className='text-2xl text-center font-bold md:text-3xl'>Some Projects</h2>

      <div className='flex-wrap justify-center gap-4 flex'>
        <div className='border-[0.2rem] border-orange-300 rounded-xl py-4 px-6 my-4 flex flex-col items-center gap-4 max-w-[400px]'>
          <h3 className='font-bold text-xl'>Quota Controller</h3>
          <img src={proy1} alt='Quota project' className='rounded-lg' />
          <p className='text-sm mb-4'>
            Quota is a project that offers a user-friendly dashboard interface to help clients monitor and understand
            their internet consumption. By analyzing data and presenting key metrics, Quota empowers users to make
            informed decisions, optimize their data usage, and avoid unexpected charges. With personalized
            recommendations and insights, Quota revolutionizes the way clients interact with their internet usage data,
            enabling them to have greater control over their online experiences.
          </p>
          <div className='flex justify-center items-center gap-1'>
            <Buttons>
              <a href='https://github.com/leanrobert/quota' target='_blank' rel='noreferrer'>Github</a>
            </Buttons>
            <Buttons className='px-4'>
              <a href='http://quota.westnet.com.ar/' target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </Buttons>
          </div>
        </div>

        <div className='border-[0.2rem] border-orange-300 rounded-xl py-4 px-6 my-4 flex flex-col items-center gap-4 max-w-[400px]'>
          <h3 className='font-bold text-xl'>Refine Dashboard</h3>
          <img src={proy2} alt='Yariga Project' className='rounded-lg' />
          <p className='text-sm mb-4'>
            The mockup project creates a realistic admin dashboard resembling popular property rental platforms like
            Airbnb. Designed to simulate the functionalities of a real admin dashboard, it allows users to manage
            properties, handle bookings and reservations, communicate with users, and access essential features for
            efficient property management. With a focus on delivering a seamless user experience, the project serves
            as a valuable tool for testing, refining, and showcasing the potential functionality of a property rental
            platform.
          </p>
          <div className='flex justify-center items-center gap-1'>
            <Buttons>
              <a href='https://github.com/leanrobert/refine-dashboard' target='_blank' rel='noreferrer'>Github</a>
            </Buttons>
            <Buttons className='px-4'>
              <a href='https://refine-dashboard-lr.netlify.app/' target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </Buttons>
          </div>
        </div>

        <div className='border-[0.2rem] border-orange-300 rounded-xl py-4 px-6 my-4 flex flex-col items-center gap-4 max-w-[400px]'>
          <h3 className='font-bold text-xl'>AI-Image Generator</h3>
          <img src={proy3} alt='AI-Generator Project' className='rounded-lg' />
          <p className='text-sm mb-4'>
            The OpenAI API-powered mockup project allows users to generate images based on prompts they provide. By
            leveraging the capabilities of the OpenAI API, this project enables users to input specific prompts and
            receive corresponding images as output. Whether it's creating visual representations of ideas, generating
            concept art, or exploring creative possibilities, the project harnesses the power of artificial intelligence
            to bring users' visions to life. With the OpenAI API at its core, this mockup project opens up a world of
            endless image generation possibilities for users to explore and utilize in their creative endeavors.
          </p>
          <div className='flex justify-center items-center gap-1'>
            <Buttons>
              <a href='https://github.com/leanrobert/ai-image-generator' target='_blank' rel='noreferrer'>Github</a>
            </Buttons>
            <Buttons className='px-4'>
              <a href='https://aigeneratorlr.netlify.app/' target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </Buttons>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects