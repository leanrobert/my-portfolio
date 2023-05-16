import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed w-full bg-black top-0 left-0 z-10 px-6'>
      <nav className='flex justify-between items-center h-16'>
        <Link to='main' smooth={true} duration={500} className='text-base font-bold text-white'>Leandro <span className='text-orange-300'>Robert</span></Link>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='fixed top-0 right-0 bg-black/70 w-3/4 h-full text-white pt-20 pl-12 backdrop-blur-md'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <ul className='flex flex-col gap-y-12'>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <Link to='main' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <Link to='about' smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <Link to='skills' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <Link to='projects' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <Link to='contact' smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
              </ul>

              {/* Close button */}
              <div>
                <AiOutlineClose className='flex text-lg text-orange-300 cursor-pointer absolute top-6 right-6' onClick={() => setIsOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <AiOutlineMenu className='flex text-lg text-orange-300 cursor-pointer' onClick={() => setIsOpen(true)} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar