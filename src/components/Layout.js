import React from 'react'

const Layout = ({ children, className }) => {
  return (
    <div className={`mx-4 mt-20 mb-2 bg-black/50 border-[2px] border-white pt-6 px-6 rounded-xl backdrop-blur-sm ${className}`}>
      {children}
    </div>
  )
}

export default Layout