import React from 'react'

const Image = ({ src, alt }) => {
	return (
		<img className='max-w-full absolute w-full min-w-[414px] min-h-full object-cover object-center' src={src} alt={alt} />
	)
}

export default Image