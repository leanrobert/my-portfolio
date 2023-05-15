import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import Input from './Input'

const Form = () => {
  return (
    <form className='relative bg-black/50 border-[2px] border-white mx-6 px-6 py-10 rounded-xl backdrop-blur-sm sm:w-[432px] sm:px-12 sm:pt-16 sm:pb-14 sm:rounded-[1.5rem]'>
      <h1 className='text-center text-2xl font-medium mb-8 sm:text-4xl'>Login</h1>

      <div className='grid gap-y-6 mb-6'>
        <div className='grid grid-cols-[max-content_1fr] items-center gap-x-3 border-b-[2px] border-white'>
          <AiOutlineUser className='text-xl' />
          <div className='relative'>
            <Input type='email' required placeholder=' ' className='peer' />
            <label className='absolute left-0 top-[13px] font-medium duration-300 trasnform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
          </div>
        </div>
        <div className='grid grid-cols-[max-content_1fr] items-center gap-x-3 border-b-[2px] border-white'>
          <RiLockPasswordLine className='text-xl' />
          <div className='relative'>
            <Input type='password' required placeholder=' ' className='pr-7 peer' />
            <label className='absolute left-0 top-[13px] font-medium duration-300 trasnform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
            <AiOutlineEyeInvisible className='text-xl absolute right-0 top-[18px] z-10 cursor-pointer' />
          </div>
        </div>
      </div>


      <p className='text-center text-medium'>Don't have an account? <a href='/#about' className='hover:underline'>Register</a></p>
    </form>
  )
}

export default Form