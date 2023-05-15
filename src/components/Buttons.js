import React from 'react'

const Buttons = ({ children }) => {
	return (
		<button className='text-base font-poppins border-none outline-none w-full p-4 rounded-lg bg-white text-medium text-black cursor-pointer mb-8'>
			{children}
		</button>
	)
}

export default Buttons