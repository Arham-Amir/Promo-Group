'use client'
import { useEffect, useState } from 'react';
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
  const imgs = ['/image/slider1.png', '/image/slider2.png', '/image/slider3.png', '/image/slider4.png'];
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
          delaySpeed={300}
        /></span>
      </h1>
    </section>
  );
};

export default Slider;
