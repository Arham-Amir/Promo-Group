'use client'
import { useState } from 'react';
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from 'react-icons/ai'

const Video = () => {
  const data = [
    "https://www.youtube.com/embed/xDxWfakk_Pc?si=M2M3x8-oN0CYWzPv",
    "https://www.youtube.com/embed/CIwHxqlhpZo",
    "https://www.youtube.com/embed/VKFADBNbcAU",
  ]
  const [currVideo, setcurrVideo] = useState(1);

  function handleLeftButton() {
    if (currVideo == 0) {
      setcurrVideo(data.length - 1)
    }
    else {
      setcurrVideo(currVideo - 1)
    }
  }
  function handleRightButton() {
    if (currVideo == data.length - 1) {
      setcurrVideo(0)
    }
    else {
      setcurrVideo(currVideo + 1)
    }
  }
  return (
    <section className='max-w-screen h-[65vh] md:h-screen bg-bg'>
      <section className='mx-auto w-11/12 h-full py-10 md:py-10 relative'>
        <button onClick={handleLeftButton} className='absolute top-1/2 left-6 -translate-y-1/2'>
          <AiOutlineVerticalRight className='text-[#007aff]' size={46} />
        </button>
        <button onClick={handleRightButton} className='absolute top-1/2 right-6 -translate-y-1/2'>
          <AiOutlineVerticalLeft className='text-[#007aff]' size={46} />
        </button>
        <iframe className={`w-full h-full rounded-3xl`} src={data[currVideo]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
    </section>
  );
}

export default Video;
