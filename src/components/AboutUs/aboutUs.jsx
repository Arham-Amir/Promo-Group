'use client'
import VideoSection from "@components/AboutUs/videoSection.jsx";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RevealRight } from "@utilities/animation";
import Galary from "@components/Galary/galary";

const AboutUs = () => {
  const [data, setData] = useState([
    "https://www.youtube.com/embed/VKFADBNbcAU",
    "https://www.youtube.com/embed/CIwHxqlhpZo",
    "https://www.youtube.com/embed/VKFADBNbcAU",
  ])
  const curr = Math.floor(data.length / 2)
  const [currVideo, setcurrVideo] = useState(curr);

  function handleSlideChange(choice) {
    let tdata = [...data];
    if (choice == 'dec') {
      tdata.unshift(tdata.pop());
      setData(tdata);
    }
    else {
      tdata.push(tdata.shift())
      setData(tdata);
    }
  }
  useEffect(() => {

  }, [data]);
  return (
    <section id="about" className="overflow-x-hidden py-8 h-auto bg-[url('/image/about.png')] flex-center flex-col text-indigo-950">
      <section className="w-full sm:p-10 xs:p-6 flex md:flex-row xs:flex-col">
        <RevealRight>
          <section className="w-full flex-center">
            <h1 className="hover-underline-animation after:bg-indigo-800 hover:text-indigo-800 2xl:text-4xl 3xl:text-5xl text-3xl font-bold pb-2 mb-4">Hello, We are Promo Group</h1>
          </section>
          <p className="md:w-4/5 xs:w-[96%] mx-auto text-lg 2xl:text-2xl 3xl:text-3xl">As multibusiness organization, PromoGroup operates in the real estate, construction, building material, agriculture, dairy and livestock sector. Since 2018, we have been categorically providing and meeting the demands of both domestic and global markets in the name of our products.
          </p>
        </RevealRight>
      </section>
      <Galary />
      <section className="my-5 flex items-center gap-3 relative overflow-x-hidden" >
        {data.map((el, i) => {
          if (currVideo == i) {
            return (
              <VideoSection className='shadow-lg lg:h-[400px] lg:w-[680px]
              xs:w-[82vw] xs:h-[315px] ms:w-[500px] ms:h-[345px] md:w-[700px] md:h-[375px] 2xl:w-[1100px] 2xl:h-[500px]' classP='z-20' key={i} video={el}>
                <button onClick={() => handleSlideChange('inc')} className='absolute top-1/2 left-6'>
                  <BsFillArrowLeftCircleFill className='text-black' size={46} />
                </button>
                <button onClick={() => handleSlideChange('dec')} className='absolute top-1/2 right-6'>
                  <BsFillArrowRightCircleFill className='text-black' size={46} />
                </button>
              </VideoSection>
            )
          }
          else {
            return (
              <VideoSection className="opacity-50 lg:w-[380px] pointer-events-none
            xs:w-[75vw] xs:h-[285px] ms:w-[450px] ms:h-[315px] md:w-[550px] md:h-[315px] 2xl:w-[850px] 2xl:h-[420px]"
                key={i} video={el}></VideoSection>
            )
          }

        })}

      </section>
    </section>
  );
}

export default AboutUs;
