'use client'

import LazyImage from "@components/Base/lazyImage";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Slider = () => {
  const imgs = ['/image/slider1.jpg', '/image/slider3.jpg', '/image/slider4.jpg', '/image/slider5.jpg'];
  const businesses = [
    ['Promo Developers', 'https://www.promodevelopers.com/', 'We ensure that every project we undertake is a resounding success'],
    ['Promo Brick', 'https://www.promobrick.com/', 'Emphasize the importance of bricks in building the foundation of any structure'],
    ['Promo Garlic', 'http://promogarlic.com/', 'Grow and Distribute high-quality genuine NARC G1 garlic seed all over the Pakistan.'],
    ['Promo Farms', 'https://www.promoland.com.pk/', 'Emphasize the importance of bricks in building the foundation of any structure'],
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id='home' className="relative min-w-screen xs:h-auto md:h-screen flex md:flex-row xs:flex-col  box-border">
      {imgs.map((img, i) => {
        return <section
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative xs:h-[38vh] ms:h-[38vh]  md:h-full md:w-1/4 md:hover:w-1/3 transition-all duration-300  md:border-slate-500  md:sliderImg`}
        >
          <LazyImage className={`grayscale-[100%] hover:grayscale-0 object-cover w-full h-full ${i !== imgs.length - 1 ? 'md:border-r-8' : ''}`}
            src={img} />
          <section
            className={` xs:backdrop-blur-[1px] flex flex-col justify-center items-center gap-4 absolute md:bottom-6 xs:bottom-0 lg:text-right xs:text-center text-white 2xl:text-2xl 3xl:text-4xl md:text-lg sm:text-lg xs:text-sm xs-mx-2 font-bold p-4 w-[90%] left-1/2 -translate-x-1/2 ${hoveredIndex === i ? 'hovered-section' : ''
              }`}
          >
            <h1 className={`${hoveredIndex === i ? '' : 'block'} -skew-x-12 xs:bg-gradient-to-l px-2 py-1 xs:from-black xs:to-black/30 min-w-[90%]`}>{businesses[i][0]}</h1>
            <p className={`${hoveredIndex === i ? 'hidden' : 'block'} text-[0.7em] font-normal w-[90%]`}>{businesses[i][2]}</p>
            <Link href={businesses[i][1]} target="_blank"
              className='bg-indigo-950 py-1 px-4 min-w-[90%] text-center -skew-x-12 text-[0.7em]'>
              <h1 className='skew-x-12'>Visit Site</h1>
            </Link>
          </section>
        </section>
      })}
    </section>
  );
};

export default Slider;


