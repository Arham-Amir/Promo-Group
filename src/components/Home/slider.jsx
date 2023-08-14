'use client'
import { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
  const imgs = ['/image/slider2.png', '/image/slider3.png', '/image/slider1.png'];
  const [currImg, setCurrImg] = useState(0);

  function handleSlideChange(newIndex) {
    setCurrImg(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <Image src={imgs[currImg]} width={0} height={0}
        className="object-cover w-full xs:h-[100vh] 2xl:h-[90vh]" alt="Slider1"
      />
      <h1
       className='absolute top-1/2 text-center left-1/2 transform -translate-x-1/2 text-white xl:text-4xl lg:text-2xl ,md:text-lg sm:text-lg xs:text-sm xs-mx-2 font-bold p-4 '>
        Welcome to {' '}
        <span><Typewriter
          words={['Promo Group Website ...', 'Promo Group World ...']}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={120}
          deleteSpeed={50}
          delaySpeed={1000}
        /></span>
      </h1>
      <section className='absolute gap-3 bottom-8 flex justify-center text-gray-500 left-1/2 -translate-x-1/2'>
        {imgs.map((_, index) => (
          <button key={index} onClick={() => handleSlideChange(index)}><Image src={imgs[index]} width={0} height={0}
            className="border border-white object-cover xs:w-[50px] xs:h-[50px]
           md:h-[100px] md:w-[100px] 2xl:h-[190px] 2xl:w-[190px]" alt="Slider1"
          /></button>
        ))}
      </section>
    </section>
  );
};

export default Slider;
