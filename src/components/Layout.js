import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='mx-4 mt-20 mb-2 bg-black/50 border-[2px] border-white p-6 rounded-xl backdrop-blur-sm'>
      {children}
    </div>
  )
}

export default Layout