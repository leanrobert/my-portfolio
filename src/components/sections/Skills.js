import React from 'react'
import Layout from '../Layout'
import { DiCss3, DiLinux, DiMongodb, DiNodejsSmall, DiPython, DiReact, DiRedis } from 'react-icons/di'
import { SiExpress, SiJavascript, SiJsonwebtokens, SiPowershell, SiTailwindcss } from 'react-icons/si'
import { BsFiletypeSql } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { GrNetwork, GrVirtualMachine }  from 'react-icons/gr'
import { MdMonitor, MdSecurity } from  'react-icons/md'

const Skills = () => {
  return (
    <Layout>
      <h2 className='text-2xl text-center font-bold'>Skills</h2>

      <div className='py-4'>
        <div className='border-[0.2rem] border-orange-300 rounded-xl py-4 px-6 my-4'>
          <h3 className='text-center underline text-lg'>Backend Development</h3>
          <ul>
            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Python</span>
                <DiPython className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '35%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Node.js</span>
                <DiNodejsSmall className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '65%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Express.js</span>
                <SiExpress className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '60%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>SQL</span>
                <BsFiletypeSql className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '45%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>MongoDB</span>
                <DiMongodb className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '55%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Redis</span>
                <DiRedis className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '25%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>JWT</span>
                <SiJsonwebtokens className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '46%' }} />
              </div>
            </li>
           </ul>
        </div>

        <div className='border-[0.2rem] border-orange-300 rounded-xl py-4 px-6 my-4'>
          <h3 className='text-center underline text-lg'>Frontend Development</h3>
          <ul>
            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>HTML</span>
                <AiFillHtml5 className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '80%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>CSS</span>
                <DiCss3 className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '75%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>JavaScript</span>
                <SiJavascript className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '90%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>React</span>
                <DiReact className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '80%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>TailwindCSS</span>
                <SiTailwindcss className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '80%' }} />
              </div>
            </li>
           </ul>
        </div>

        <div className='border-[0.2rem] border-orange-300 rounded-xl py-4 px-6 my-4'>
          <h3 className='text-center underline text-lg'>Sysadmin Skills</h3>
          <ul>
            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Linux</span>
                <DiLinux className='text-lg text-black bg-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '95%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Shell</span>
                <SiPowershell className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '65%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Network Administration</span>
                <GrNetwork className='text-lg bg-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '90%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Security</span>
                <MdSecurity className='text-lg text-orange-300 bg-black' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '50%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Virtualization</span>
                <GrVirtualMachine className='text-lg bg-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '45%' }} />
              </div>
            </li>

            <li>
              <div className='flex justify-between items-center'>
                <span className='text-base'>Monitoring</span>
                <MdMonitor className='text-lg text-orange-300' />
              </div>
              <div className='w-full bg-gray-500 rounded-full h-1.5 mb-2'>
                <div className='bg-orange-300 h-1.5 rounded-full' style={{ width: '85%' }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Skills