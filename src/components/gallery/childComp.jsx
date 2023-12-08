import React from 'react';
import Slider from '../base/slider/slider';
import Video from './video/video';


const ChildComp = () => {

  const brick = [
    "/brick/building2.png",
    "/brick/building1.png",
    "/brick/clay1.png",
    "/brick/clay3.png",
    "/brick/handmade1.png",
    "/brick/handmade2.png",
    "/brick/handmade3.png",
    "/brick/slips2.png",
    "/brick/pots1.jpg",
    "/brick/pots2.jpg",
    "/brick/pots3.jpg",
    "/brick/clay2.png",
    "/brick/building3.png",
    "/brick/slips1.jpg",
  ]
  const garlic = [
    "/garlic/bulb1.jpg",
    "/garlic/bulb2.jpg",
    "/garlic/clove1.jpg",
    "/garlic/clove2.jpg",
    "/garlic/peeled1.jpg",
    "/garlic/peeled2.jpg",
    "/garlic/peeled3.jpg",
    "/garlic/powder1.jpg",
    "/garlic/powder2.jpg",
    "/garlic/powder3.jpg",
    "/garlic/paste1.png",
    "/garlic/paste2.png",
  ]


  return (
    <section >
      <section className='pb-10 flex flex-col gap-10'>
        <Video />
        {/* <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='w-4/5 border border-indigo-950/20 text-center mt-5 p-5 mx-auto font-heading'>Promo Group</h1>
          <section className='w-11/12 px-5'>
            <Slider data={clove} />
          </section>
        </section>
        <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='w-4/5 border border-indigo-950/20 text-center mt-5 p-5 mx-auto font-heading'>Promo Developer</h1>
          <section className='w-11/12 px-5'>
            <Slider data={bulb} />
          </section>
        </section> */}
        <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-4/5 border border-indigo-950/20 text-center mt-5 p-5 mx-auto font-heading'>Promo Brick</h1>
          <section className='w-11/12 px-5'>
            <Slider data={brick} />
          </section>
        </section>
        <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-4/5 border border-indigo-950/20 text-center mt-5 p-5 mx-auto font-heading'>Promo Garlic</h1>
          <section className='w-11/12 px-5'>
            <Slider data={garlic} />
          </section>
        </section>
      </section>
    </section>
  );
}

export default ChildComp;

