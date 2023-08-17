'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RevealUp } from '@utilities/animation';

const ContactUsPage = () => {
  const [user_name, setUserName] = useState('')
  const [user_email, setUserEmail] = useState('')
  const [user_message, setUserMessage] = useState('')

  function handleClick() {
    if (user_name == '' || user_email == '' || user_message == '') {
      toast.error('Please Complete All Form Fields First.')
    }
    else {
      emailjs.send(
        "service_es973jf",
        "template_nocv9o9",
        {
          user_name,
          user_email,
          user_message
        },
        "3uBa2MTILF_j_PX_3"
      ).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Your Responce Send Successfully!')
      }, function (error) {
        console.log('FAILED...', error);
        toast('Your Responce Sending Process Failed!')
      });
    }
  }
  return (
    <section id='contactus' className='text-center py-14  bg-[#0A1128]'>
      <RevealUp>
        <section className='hover-underline-animation after:bg-white mx-auto p-3 text-5xl text-white text-center font-bold inline-block'>Contact <span className='font-extralight'>Us</span></section>
      </RevealUp>
      <section className='w-3/5 mx-auto my-12 flex flex-col items-center gap-10 text-white'>
        <input onChange={(e) => setUserName(e.target.value)} className='w-full border-b-2 bg-transparent h-10 py-5 px-2 focus-within:outline-none rounded-lg' type="text" name="name" id="name" placeholder='Full Name' />
        <input onChange={(e) => setUserEmail(e.target.value)} className='w-full border-b-2 bg-transparent h-10 py-5 px-2 focus-within:outline-none rounded-lg' type="email" name="email" id="email" placeholder='Email' />
        <textarea onChange={(e) => setUserMessage(e.target.value)} className='w-full border-b-2 bg-transparent h-[100px] py-5 px-2 focus-within:outline-none rounded-lg' name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='py-3 px-7 mt-4 w-full border-4 border-white text-white rounded-full hover:bg-indigo-600' onClick={handleClick}>Submit</button>
      </section>
    </section>);
}

export default ContactUsPage;
