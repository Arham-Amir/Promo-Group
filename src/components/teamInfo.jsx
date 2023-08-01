'use client'
import { useState } from 'react';
import { ImWhatsapp } from 'react-icons/im';

const TeamInfo = (props = {}) => {
  const [showContactInfo, setShowContactInfo] = useState(false)
  return (
    <section className={`${props.class}
     text-indigo-950 flex flex-col items-center justify-center gap-8`}>
      <h1 className="text-2xl font-semibold">Team Construction</h1>
      <p className="w-[72%] text-lg text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni quas est odio nihil dignissimos numquam laborum sint? Architecto necessitatibus aut illo quam repudiandae reprehenderit sunt culpa repellat itaque, et nemo magni.</p>
      <section className='flex-center'>
        <button onClick={() => setShowContactInfo(!showContactInfo)} className={`bg-indigo-950 text-white py-4 px-5 rounded-lg flex-center gap-2
        ${showContactInfo && 'transition-all -translate-x-3 duration-500 ease-in-out'}`}>
          <ImWhatsapp className='text-green-500' size={20} />Contact Info </button>
        {showContactInfo
          &&
          <p className='font-medium'>
            +92 3001114461
          </p>}
      </section>

    </section>
  );
}

export default TeamInfo;
