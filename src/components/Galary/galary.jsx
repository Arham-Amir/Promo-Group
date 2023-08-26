'use client'
import React, { useState } from 'react';

const Galary = () => {
  const [isHovered, setIsHovered] = useState(false);
  const width = '45vw';
  return (
    <div className="overflow-hidden">
      <div style={{ '--imgs': 3, '--width': width }} className="scroll-section flex gap-8 max-w-full flex-row items-center">
        <ImgCard isHovered={isHovered} setIsHovered={setIsHovered} img='/image/slider1.jpg' />
        <ImgCard isHovered={isHovered} setIsHovered={setIsHovered} img='/image/slider2.jpg' />
        <ImgCard isHovered={isHovered} setIsHovered={setIsHovered} img='/image/slider3.jpg' />
        <ImgCard isHovered={isHovered} setIsHovered={setIsHovered} img='/image/slider4.jpg' />
        <ImgCard isHovered={isHovered} setIsHovered={setIsHovered} img='/image/slider5.jpg' />
      </div>
    </div>
  );
};

function ImgCard(props = {}) {
  return (
    <section
      className={`${props.className} mb-10 h-80 min-w-[30vw] max-w-[30vw] hover:h-96 hover:min-w-[40vw] transition-all duration-150`}
      onMouseEnter={() => props.setIsHovered(true)}
      onMouseLeave={() => props.setIsHovered(false)}
    >
      <div className="overflow-hidden card-img h-full w-full">
        <img
          src={props.img}
          alt="img/ISO.png"
          className={`h-full w-full ${props.isHovered ? 'opacity-40' : 'opacity-100'}
          hover:opacity-100 hover:shadow-lg hover:shadow-black transition-opacity duration-150`}
        />
      </div>
    </section>
  );
}

export default Galary;
