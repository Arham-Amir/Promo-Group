'use client'
import Nav_Logo from "@components/Base/nav_logo";
import Nav_Links from "@components/Base/nav_links";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoYoutube, BiLogoTwitter, BiLogoWhatsapp } from 'react-icons/bi'

const Navbar = () => {
  const [ham, showHam] = useState(false);
  const navRef = useRef(null);
  const navRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navRef2.current.classList.remove('block')
          navRef2.current.classList.add('hidden')
        } else {
          navRef2.current.classList.remove('hidden')
          navRef2.current.classList.add('block')
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, [])
  useEffect(() => {
    if (ham) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [ham]);

  return (<>
    <section ref={navRef} className={`flex overflow-x-hidden flex-col md:absolute top-0 z-30 w-screen  backdrop-blur-[1px] xs:bg-gradient-to-b xs:from-black xs:to-gray-900 md:from-transparent md:to-transparent  xs:relative ${ham ? 'xs:h-screen' : 'md:h-auto'}`}>
      <section className="flex justify-between xs:flex-col sm:flex-row sm:h-10 xs:h-14 2xl:h-14 items-center border-b border-slate-200 lg:w-[80vw]
      xs:w-[90vw] mx-auto text-slate-50 px-2 2xl:py-4 xs:py-2">
        <section className="flex flex-row gap-2 items-center object-cover 3xl:text-2xl">
          <Link className="hover:text-white hover:-translate-y-1 transition-all duration-100" href='https://www.facebook.com' target="_blank"><BiLogoFacebook className="2xl:text-xl 3xl:text-4xl"></BiLogoFacebook></Link>
          <Link className="hover:text-white hover:-translate-y-1 transition-all duration-100" href='https://www.instagram.com' target="_blank"><BiLogoInstagramAlt className="2xl:text-xl 3xl:text-4xl"></BiLogoInstagramAlt></Link>
          <Link className="hover:text-white hover:-translate-y-1 transition-all duration-100" href='https://www.twitter.com' target="_blank"><BiLogoTwitter className="2xl:text-xl 3xl:text-4xl"></BiLogoTwitter></Link>
          <Link className="hover:text-white hover:-translate-y-1 transition-all duration-100" href='https://www.youtube.com' target="_blank"><BiLogoYoutube className="2xl:text-xl 3xl:text-4xl"></BiLogoYoutube></Link>
          <Link className="hover:text-white hover:-translate-y-1 transition-all duration-100" href='https://www.linkedin.com' target="_blank"><BiLogoLinkedin className="2xl:text-xl 3xl:text-4xl"></BiLogoLinkedin></Link>
        </section>
        <section className="flex flex-row gap-2 items-center object-cover 2xl:text-3xl">
          <Link className="hover:text-white hover:scale-110 transition-all duration-100 text-sm 2xl:text-lg 3xl:text-xl flex flex-row gap-2 items-center" href='https://www.linkedin.com' target="_blank">
            For Queries: <span className="flex flex-row items-center"><BiLogoWhatsapp className="2xl:text-xl 3xl:text-4xl"></BiLogoWhatsapp> +92 300 4439445</span>
          </Link>
        </section>
      </section>
      <nav className="xs:w-[90vw] lg:w-[80vw] mx-auto mb-5 rounded-b-2xl h-20 2xl:h-28 text-white py-3 lg:pl-8 lg:pr-12 xl:pl-10 xl:pr-24 sm:px-10 xs:px-4 xl:text-lg lg:text-md 2xl:text-2xl 3xl:text-3xl flex items-center justify-between font-sans">
        <Nav_Logo></Nav_Logo>
        <Nav_Links childClass = "px-3 py-1" className='xs:hidden md:flex md:gap-7 lg:gap-12 font-semibold' />
        <section onClick={() => { showHam(!ham) }} className="z-30 md:hidden xs:flex flex-col items-end justify-center gap-2 pr-4" >
          <p className={`${ham ? 'w-6 rotate-[495deg] translate-y-[10px]' : 'w-8'}  transition-all duration-500 p-[1px] bg-white`}></p>
          <p className={`w-6 p-[1px] transition-all duration-500 bg-white ${ham ? 'opacity-0' : 'opacity-100'} transform ${ham ? '-translate-y-10' : 'translate-y-0'}`}></p>

          <p className={`${ham ? 'w-6 rotate-[405deg] -translate-y-[10px]' : 'w-4'} transition-all duration-500
          p-[1px] bg-white`}></p>
        </section>
        <Nav_Links childClass = "px-3 py-1" showHam={() => showHam(false)} className={`xs:flex ${ham ? 'xs:right-0' : 'xs:right-[-100%]'} md:hidden
        fixed top-0 z-20 w-full h-screen transition-all duration-500 justify-center
        flex-col items-center gap-10 xs:bg-gradient-to-b xs:from-black xs:to-gray-900`} />
      </nav>
    </section>
    <section ref={navRef2} className="bg-black w-screen fixed top-0 z-40 sm:text-sm xs:text-[7px]">
      <Nav_Links childClass = "p-3" className= "text-white flex items-center justify-center gap-5"></Nav_Links>
    </section>
  </>
  );
}

export default Navbar;
