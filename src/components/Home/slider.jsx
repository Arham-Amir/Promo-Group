'use client'
import { useState } from 'react';
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

const Slider = () => {
  const imgs = ['/image/slider1.jpg', '/image/slider3.jpg', '/image/slider4.jpg', '/image/slider5.jpg',];
  const paths = [
    ['polygon(0 0, 30% 0, 20% 100%, 0% 100%)',
      'polygon(30% 0, 55% 0, 45% 100%, 20% 100%)',
      'polygon(55% 0, 80% 0, 70% 100%, 45% 100%)',
      'polygon(80% 0, 100% 0, 100% 100%, 70% 100%)'],
    ['polygon(0 0, 39% 0, 29% 100%, 0% 100%)',
      'polygon(33% 0, 58% 0, 48% 100%, 23% 100%)',
      'polygon(58% 0, 83% 0, 73% 100%, 48% 100%)',
      'polygon(83% 0, 100% 0, 100% 100%, 73% 100%)'],
    ['polygon(0 0, 27% 0, 17% 100%, 0% 100%)',
      'polygon(27% 0, 64% 0, 54% 100%, 17% 100%)',
      'polygon(58% 0, 83% 0, 73% 100%, 48% 100%)',
      'polygon(83% 0, 100% 0, 100% 100%, 73% 100%)'],
    ['polygon(0 0, 27% 0, 17% 100%, 0% 100%)',
      'polygon(27% 0, 52% 0, 42% 100%, 17% 100%)',
      'polygon(52% 0, 89% 0, 79% 100%, 42% 100%)',
      'polygon(89% 0, 100% 0, 100% 100%, 79% 100%)'],
    ['polygon(0 0, 27% 0, 17% 100%, 0% 100%)',
      'polygon(27% 0, 52% 0, 42% 100%, 17% 100%)',
      'polygon(52% 0, 71% 0, 61% 100%, 42% 100%)',
      'polygon(71% 0, 100% 0, 100% 100%, 61% 100%)']
  ]
  const [clipPath, setClipPath] = useState(paths[0]);
  return (
    <section id='home' className="relative w-screen h-screen flex overflow-hidden box-border">
      {imgs.map((img, i) => (
        <section key={i}
          onMouseEnter={() => setClipPath(paths[i + 1])} onMouseLeave={() => setClipPath(paths[0])} style={{ '--path': clipPath[i] }} className={`sliderImg border-r-6 border-slate-500`}>
          <Image src={img} width={0} height={0} className="relative grayscale-[50] hover:grayscale-0 object-cover w-full h-full" alt="Slider1" />
        </section>
      ))}
      <section className='flex flex-col justify-center items-center gap-4 absolute top-1/2 text-center left-1/2 transform -translate-x-1/2 text-white xl:text-4xl lg:text-2xl ,md:text-lg sm:text-lg xs:text-sm xs-mx-2 font-bold p-4 '>
        <h1>Welcome to {' '}
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
        <Link href={'#businesses'} className='bg-indigo-950 w-fit px-8 py-4 rounded-2xl text-lg'>Our Businesses</Link>
      </section>

    </section>
  );
};

export default Slider;
