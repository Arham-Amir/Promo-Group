'use client'
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUsPage = () => {
  function handleClick() {
    toast('Your responce send successfully!')
  }
  return (<section id='contactus' className='text-center py-14  bg-indigo-950'>
    <section className='mx-auto p-3  text-5xl text-white text-center font-bold inline-block'>Contact <span className='font-normal'>Us</span></section>
    <section className='w-3/5 mx-auto my-12 flex flex-col items-center gap-10 text-white'>
      <section className='w-full flex lg:flex-row xs:flex-col gap-10'>
        <input className='lg:basis-1/2 border-b-2 bg-transparent h-10 py-5 px-2 focus-within:outline-none rounded-lg' type="text" placeholder='First Name' />
        <input className='lg:basis-1/2 border-b-2 bg-transparent h-10 py-5 px-2  focus-within:outline-none rounded-lg' type="text" placeholder='Last Name' />
      </section>
      <input className='w-full border-b-2 bg-transparent h-10 py-5 px-2 focus-within:outline-none rounded-lg' type="email" name="email" id="email" placeholder='Email' />
      <textarea className='w-full border-b-2 bg-transparent h-[100px] py-5 px-2 focus-within:outline-none rounded-lg' name="message" id="message" cols="30" rows="10" placeholder='message'></textarea>
      <button className='py-3 px-7 mt-4 w-full border-4 border-white text-white rounded-full' onClick={handleClick}>Submit</button>
    </section>
  </section>);
}

export default ContactUsPage;
