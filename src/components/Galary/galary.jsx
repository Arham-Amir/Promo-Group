'use client'
import React, { useState } from 'react';

const Galary = () => {
  const width = '45vw';
  return (
    <div className="overflow-hidden">
      <div style={{ '--imgs': 3, '--width': width }} className="scroll-section flex gap-8 max-w-full flex-row items-center">
        <ImgCard img='/image/slider1.jpg' />
        <ImgCard img='/image/slider2.jpg' />
        <ImgCard img='/image/slider3.jpg' />
        <ImgCard img='/image/slider4.jpg' />
        <ImgCard img='/image/slider5.jpg' />
      </div>
    </div>
  );
};

function ImgCard(props = {}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`${props.className} mb-10 h-80 min-w-[30vw] max-w-[30vw] hover:h-96 hover:min-w-[40vw] transition-all duration-150`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden card-img h-full w-full">
        <img
          src={props.img}
          alt="img/ISO.png"
          className={`h-full w-full ${isHovered ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity duration-150`}
        />
      </div>
    </section>
  );
}

export default Galary;
