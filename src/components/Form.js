import React, { useRef, useState } from 'react'
import { AiOutlineMail, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai'
import Buttons from './Buttons'
import emailjs from '@emailjs/browser'
import { mailInfo } from '../utils/mail-info'
import ReCAPTCHA from 'react-google-recaptcha'

const Form = () => {
  const form = useRef()
  const captcha = useRef(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [validCapcha, setValidCapcha] = useState()
  const [messageSend, setMessageSend] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    if(captcha.current.getValue()) {
      emailjs.sendForm(mailInfo.serviceID, mailInfo.templateID, form.current, mailInfo.API)
      .then(res => {
        console.log(res.text);
      }).catch(error => {
        console.log(error.text);
      })

      setName('')
      setEmail('')
      setMessage('')
      setValidCapcha(true)
      setMessageSend('Mail sent correctly!')
      setTimeout(() => {
        setMessageSend(null)
      }, 3000)
    } else {
      setValidCapcha(false)
    }
  }

  const onChange = () => {
    if(captcha.current.getValue()) {
      setValidCapcha(true)
    } else {
      setValidCapcha(false)
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className='max-w-[600px] mx-auto'>
      <h1 className='text-center text-2xl font-bold mb-8 sm:text-4xl'>Contact Me</h1>

      <div className='grid gap-y-6 mb-6'>
      <div className='grid grid-cols-[max-content_1fr] items-center gap-x-3 border-b-[2px] border-white'>
          <AiOutlineUser className='text-xl text-orange-300' />
          <div className='relative'>
            <input value={name} name='user_name' onChange={e => setName(e.target.value)} type='text' required placeholder=' ' className='text-base font-poppins border-none outline-none w-full py-3 bg-transparent text-white relative z-1 peer' />
            <label htmlFor='user_name' className='text-orange-300 absolute left-0 top-[13px] font-medium duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Name</label>
          </div>
        </div>

        <div className='grid grid-cols-[max-content_1fr] items-center gap-x-3 border-b-[2px] border-white'>
          <AiOutlineMail className='text-xl text-orange-300' />
          <div className='relative'>
            <input value={email} name='user_email' onChange={e => setEmail(e.target.value)} type='email' required placeholder=' ' className='text-base font-poppins border-none outline-none w-full py-3 bg-transparent text-white relative z-1 peer' />
            <label htmlFor='user_email' className='text-orange-300 absolute left-0 top-[13px] font-medium duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
          </div>
        </div>

        <div className='grid grid-cols-[max-content_1fr] items-center gap-x-3 border-b-[2px] border-white'>
          <AiOutlineMessage className='text-xl relative -top-4 text-orange-300' />
          <div className='relative'>
            <textarea name='message' rows={1} value={message} onChange={e => setMessage(e.target.value)} required placeholder=' ' className='text-base font-poppins border-none outline-none w-full py-3 bg-transparent text-white relative z-1 peer'></textarea>
            <label htmlFor='message' className='text-orange-300 absolute left-0 top-[13px] font-medium duration-300 transform -translate-y-8 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Message</label>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <ReCAPTCHA
          ref={captcha}
          sitekey='6LfLexAmAAAAAEj0f3Hl46wHaaTB5nR4kZK1i2jA'
          onChange={onChange}
        />
        {validCapcha && <p className='w-full bg-red-400 text-center my-2 rounded-lg max-w-[600px]'>Captch is mandatory</p>}
      </div>
      <div className='flex flex-col items-center justify-center my-2'>
        {messageSend && <p className='bg-green-700 text-center mb-4 rounded-lg w-full max-w-[600px]'>{messageSend}</p>}
        <Buttons type='submit' className='py-4'>Submit</Buttons>
      </div>
    </form>
  )
}

export default Form