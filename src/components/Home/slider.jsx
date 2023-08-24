'use client'
import Image from "next/image"
import Link from "next/link";

const Slider = () => {
  const imgs = ['/image/slider1.jpg', '/image/slider3.jpg', '/image/slider4.jpg', '/image/slider5.jpg'];
  const businesses = [
    ['Promo Developers', 'https://www.promodevelopers.com/'],
    ['Promo Brick', 'https://www.promobrick.com/'],
    ['Promo Garlic', 'http://promogarlic.com/'],
    ['Promo Farms', '/']
  ]
  return (
    <section id='home' className="relative w-screen xs:h-auto md:h-screen flex md:flex-row xs:flex-col overflow-hidden box-border">
      {imgs.map((img, i) => (
        <section key={i}
          className={`relative xs:h-[30vh] md:h-full md:basis-1/4 md:hover:basis-1/3 transition-all duration-300 md:sliderImg border-r-6 border-slate-500`}>
          <Image src={img} width={0} height={0} className="grayscale-[50] hover:grayscale-0 object-cover w-full h-full" alt="Slider1" />
          <section className='xs:backdrop-blur-[1px] flex flex-col justify-center items-center gap-4 absolute md:bottom-6 xs:bottom-0 lg:text-right xs:text-center text-white 2xl:text-4xl md:text-lg sm:text-lg xs:text-sm xs-mx-2 font-bold p-4 w-[90%] left-1/2 -translate-x-1/2'>
            <h1 className='w-full'>{businesses[i][0]}
            </h1>
            <p className='lg:block md:hidden text-[0.7em] font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ratione fuga quisquam, reiciendis</p>
            <Link href={businesses[i][1]} target="_blank" className='bg-indigo-950 xpy-1 px-4 min-w-[90%] text-center -skew-x-12 text-[0.7em]'><h1 className='skew-x-12'>Read More</h1></Link>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Slider;
