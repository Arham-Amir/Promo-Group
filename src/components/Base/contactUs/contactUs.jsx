'use client'

import { MdLocationPin } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import ContactLeft from './contactLeft'
import ContactRight from './contactRight'
import ContactInfo from './contactInfo'
import { RevealUp } from '@utilities/animation'

const ContactUs = () => {
  return (
    <section id='contactus' className="h-auto py-10 bg-[url('/image/about.png')]">
      <RevealUp className="flex justify-center">
        <section className='text-indigo-950 hover-underline-animation after:bg-indigo-900 p-3 text-5xl hover:text-indigo-900 font-bold'>Contact <span className='font-extralight'>Us</span></section>
      </RevealUp>
      <section className='w-5/6 mx-auto py-5
      flex md:flex-row xs:flex-col xs:gap-x-4 md:gap-0'>
        <ContactLeft className='md:basis-3/5' />
        <ContactRight className='xs:h-[250px] md:h-auto md:basis-2/5' />
      </section>
      <section className="mt-6 grid w-5/6 h-full mx-auto lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 xs:gap-6">
        <ContactInfo>
          <MdLocationPin size={54} className='bg-darkColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Address: <span className='font-normal'>60-J Block, DHA EME Sector, Multan Road, Lahore, Pakistan</span></h2>
        </ContactInfo>
        <ContactInfo>
          <SiMinutemailer size={54} className='bg-darkColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Email: <span className='font-normal'>info@promogroup.com.pk</span></h2>
        </ContactInfo>
        <ContactInfo>
          <FaPhoneAlt size={54} className='bg-darkColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Telephone: <span className='font-normal'>042 37512219</span></h2>
        </ContactInfo>
        <ContactInfo>
          <FaPhoneAlt size={54} className='bg-darkColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Whatsapp: <span className='font-normal'>+92 300 4439445</span></h2>
        </ContactInfo>

      </section>
    </section>
  );
}

export default ContactUs;
