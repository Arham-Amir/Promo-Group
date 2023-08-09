'use client'
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUsPage = () => {
  function handleClick() {
    toast('Your responce send successfully!')
  }
  return (<section className='text-center'>
    <section className='mx-auto mt-24 p-3 text-4xl text-center font-bold bg-indigo-400 inline-block -skew-x-12'>Contact Us</section>
    <section className='w-3/5 mx-auto my-16 flex flex-col items-center gap-10'>
      <section className='w-full flex lg:flex-row xs:flex-col gap-10'>
        <input className='lg:basis-1/2 bg-slate-200 h-10 p-5 rounded-lg' type="text" placeholder='First Name' />
        <input className='lg:basis-1/2 bg-slate-200 h-10 p-5 rounded-lg' type="text" placeholder='Last Name' />
      </section>
      <input className='w-full bg-slate-200 h-10 p-5 rounded-lg' type="email" name="email" id="email" placeholder='email' />
      <textarea className='w-full bg-slate-200 h-[200px] p-5 rounded-lg' name="message" id="message" cols="30" rows="10" placeholder='message'></textarea>
      <button className='py-4 px-7 bg-indigo-700 text-white rounded-lg' onClick={handleClick}>Submit</button>
    </section>
  </section>);
}

export default ContactUsPage;
