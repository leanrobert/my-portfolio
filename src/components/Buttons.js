import React from 'react'

const Buttons = ({ children, className }) => {
	return (
		<button className={`text-base font-poppins border-none outline-none px-6 rounded-lg text-medium text-black cursor-pointer mb-8 duration-300 bg-orange-300 hover:text-white hover:bg-orange-500 ${className}`}>
			{children}
		</button>
	)
}

export default Buttons