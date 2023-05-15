import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed w-full bg-black top-0 left-0 z-10 px-6'>
      <nav className='flex justify-between items-center h-16'>
        <a href='/' className='text-base font-bold text-white'>Leandro <span className='text-orange-300'>Robert</span></a>
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
                  <a href='#main' onClick={() => setIsOpen(false)}>Home</a>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <a href='#about' onClick={() => setIsOpen(false)}>About</a>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <a href='#skills' onClick={() => setIsOpen(false)}>Skills</a>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <a href='#projects' onClick={() => setIsOpen(false)}>Projects</a>
                </li>
                <li className='text-white-300 font-semibold transition duration-300 hover:text-orange-300'>
                  <a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>
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