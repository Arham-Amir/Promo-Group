'use client'
import ImgCards from "@components/AboutUs/imgCards.jsx";
import VideoSection from "@components/AboutUs/videoSection.jsx";
import { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RevealRight } from "@utilities/animation";

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
      <section className="w-full sm:p-10 xs:p-6 flex md:flex-row xs:flex-col">
        <RevealRight>
          <section className="w-full flex-center">
            <h1 className="hover-underline-animation after:bg-indigo-800 hover:text-indigo-800 2xl:text-4xl 3xl:text-5xl text-3xl font-bold pb-2 mb-4">Hello, We are Promo Group</h1>
          </section>
          <p className="md:w-4/5 xs:w-[96%] mx-auto text-lg 2xl:text-2xl 3xl:text-3xl">As multibusiness organization, PromoGroup operates in the real estate, construction, building material, agriculture, dairy and livestock sector. Since 2018, we have been categorically providing and meeting the demands of both domestic and global markets in the name of our products.
          </p>
        </RevealRight>
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
