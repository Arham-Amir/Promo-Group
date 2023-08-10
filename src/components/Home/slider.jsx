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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-2">
      <button onClick={() => handleSlideChange((currImg - 1 + imgs.length) % imgs.length)} className='absolute top-1/2 left-6'>
        <BsFillArrowLeftCircleFill className='text-white' size={46} />
      </button>
      <Image src={imgs[currImg]} width={0} height={0}
        className="object-cover w-full xs:h-[80vh] 2xl:h-[90vh]" alt="Slider1"
      />
      <button onClick={() => handleSlideChange((currImg + 1) % imgs.length)} className='absolute top-1/2 right-6'>
        <BsFillArrowRightCircleFill className='text-white' size={46} />
      </button>
      <h1 className='absolute top-1/2 text-center left-1/2 transform -translate-x-1/2 text-white xl:text-3xl lg:text-2xl ,md:text-lg sm:text-lg xs:text-sm xs-mx-2 font-bold p-4 -skew-x-12 bg-blue-800 bg-opacity-60 backdrop-blur-lg'>Welcome to {' '}
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
      <section className='absolute bottom-8 flex justify-center text-gray-500 left-1/2 transform -translate-x-1/2'>
        {imgs.map((_, index) => (
          <AiOutlineLine key={index} className={`${currImg === index ? 'text-white' : ''}`} size={50} />
        ))}
      </section>

    </div>
  );
};

export default Slider;
