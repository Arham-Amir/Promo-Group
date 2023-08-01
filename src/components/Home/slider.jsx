'use client'
import { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';

const Slider = () => {
  const imgs = ['/image/slider2.png', '/image/slider3.png', '/image/slider1.png'];
  const [currImg, setCurrImg] = useState(0);

  function handleSlideChange(newIndex) {
    setCurrImg(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-2">
      <button onClick={() => handleSlideChange((currImg - 1 + imgs.length) % imgs.length)} className='absolute top-1/2 left-6'>
        <BsFillArrowLeftCircleFill className='text-white' size={46} />
      </button>
      <img className="object-cover w-full xs:h-[80vh] 2xl:h-[90vh]" src={imgs[currImg]} alt="Slider1"
        loading='lazy' />
      <button onClick={() => handleSlideChange((currImg + 1) % imgs.length)} className='absolute top-1/2 right-6'>
        <BsFillArrowRightCircleFill className='text-white' size={46} />
      </button>
      <section className='absolute bottom-8 flex justify-center text-gray-500 left-1/2 transform -translate-x-1/2'>
        {imgs.map((_, index) => (
          <AiOutlineLine key={index} className={`${currImg === index ? 'text-white' : ''}`} size={50} />
        ))}
      </section>

    </div>
  );
};

export default Slider;