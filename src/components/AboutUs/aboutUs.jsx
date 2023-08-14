'use client'
import ImgCards from "@components/AboutUs/imgCards.jsx";
import VideoSection from "@components/AboutUs/videoSection.jsx";
import { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RevealLeft, RevealRight } from "@utilities/animation";

const AboutUs = () => {
  const data = [
    "https://www.youtube.com/embed/CIwHxqlhpZo",
    "https://www.youtube.com/embed/VKFADBNbcAU"
  ]
  const [currVideo, setcurrVideo] = useState(0);

  function handleSlideChange(newIndex) {
    setcurrVideo(newIndex);
  }
  return (
    <section id="about" className="py-8 h-auto bg-[url('/image/about.png')] flex-center flex-col text-indigo-950">
      <section className="sm:w-[94%] 2xl:w-[80%] sm:p-10 xs:p-6 flex md:flex-row xs:flex-col">
        <section className="p-4 basis-1/2 flex flex-col gap-y-6 ">
          <RevealRight>
            <h1 className="hover-underline-animation after:bg-indigo-800 hover:text-indigo-800 2xl:text-4xl 3xl:text-5xl text-3xl font-bold w-fit pb-2">Hello, We are Promo Group</h1>
            <section className="flex flex-col gap-5 text-lg 2xl:text-2xl 3xl:text-3xl">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates ducimus sapiente voluptatem praesentium repellat, est aliquid provident ut enim qui, assumenda inventore quasi.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates ducimus sapiente voluptatem praesentium repellat, est aliquid provident ut enim qui, assumenda inventore quasi.</p>
            </section>
          </RevealRight>
        </section>
        <section className="basis-1/2 h-auto">
          <RevealLeft>
            <ImgCards img='/image/about_pic.png' name='Ahsan Ali' position='Accountant' />
          </RevealLeft>
        </section>
      </section>
      <section className="my-5 flex gap-3 relative" >
        <button onClick={() => handleSlideChange((currVideo - 1 + data.length) % data.length)} className='absolute top-1/2 left-6'>
          <BsFillArrowLeftCircleFill className='text-black' size={46} />
        </button>
        <VideoSection video={data[currVideo]}></VideoSection>
        <button onClick={() => handleSlideChange((currVideo + 1) % data.length)} className='absolute top-1/2 right-6'>
          <BsFillArrowRightCircleFill className='text-black' size={46} />
        </button>
      </section>
    </section>
  );
}

export default AboutUs;
