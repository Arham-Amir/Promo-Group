'use client'
import React, { useState, useRef } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Galary = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const images = [
    '/image/slider1.jpg',
    '/image/slider2.jpg',
    '/image/slider3.jpg',
    '/image/slider5.jpg',
    '/image/slider4.jpg',
    '/image/galery.jpg',
  ];

  const scrollGallery = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const activeImage = direction === "left"
      ? slider.scrollLeft
      : slider.scrollLeft + slider.clientWidth;

    let totalWidth = 0;

    Array.from(slider.children).some((img, index) => {
      totalWidth += img.clientWidth;
      if (totalWidth > activeImage) {
        if (direction === "left") {
          slider.scrollLeft -= img.clientWidth+50;
        } else {
          slider.scrollLeft += img.clientWidth+50;
        }
        return true;
      }
      return false;
    });
  };

  return (
    <div className="max-w-screen w-screen relative mb-10">
      <GrPrevious
        className='z-20 ms:block xs:hidden absolute left-0 top-1/2 -translate-y-1/2 text-indigo-950 w-10 h-10 p-2 bg-white'
        onClick={() => scrollGallery('left')}
      />
      <div
        className="mx-10 flex gap-8 max-w-full flex-row flex-nowrap items-center whitespace-nowrap overflow-x-auto scrollbar-none"
        ref={sliderRef}
      >
        {images.map((el, i) => {
          return <ImgCard key={i} isHovered={isHovered} setIsHovered={setIsHovered} img={el} />;
        })}
      </div>
      <GrNext
        className='z-20 ms:block xs:hidden absolute right-0 top-1/2 -translate-y-1/2 text-indigo-950 w-10 h-10 p-2 bg-white'
        onClick={() => scrollGallery('right')}
      />
    </div>
  );
};

function ImgCard(props = {}) {
  return (
    <section className={`${props.className} 2xl:h-[35vh] xs:h-44 sm:h-56 md:h-80 md:min-w-[30vw] md:max-w-[30vw] xs:min-w-[45vw] xs:max-w-[45vw] hover:md:h-96 hover:sm:h-72 hover:xs:h-56 hover:2xl:h-[45vh] md:hover:min-w-[40vw] xs:hover:min-w-[55vw] transition-all duration-150 border-4 border-white`}
      onMouseEnter={() => props.setIsHovered(true)}
      onMouseLeave={() => props.setIsHovered(false)}
    >
      <section className="overflow-hidden card-img h-full w-full">
        <img src={props.img} alt="img/ISO.png" className={`h-full w-full ${props.isHovered ? 'opacity-40' : 'opacity-100'} hover:opacity-100 hover:shadow-lg hover:shadow-black transition-opacity duration-150`} />
      </section>
    </section>
  );
}

export default Galary;
