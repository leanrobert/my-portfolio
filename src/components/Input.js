import React from 'react'

const Input = ({ type, required=false, placeholder='', className, value, onChange}) => {
	return (
		<input 
			className={`${className} text-base font-poppins border-none outline-none w-full py-3 bg-transparent text-white relative z-1`} 
			type={type}
			placeholder={placeholder}
			required={required}
			value={value}
			onChange={onChange}
		/>
	)
}

export default Input