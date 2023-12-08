'use client'
import Nav_Logo from "@components/Base/nav_logo";
import Nav_Links from "@components/Base/nav_links";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
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
    <section ref={navRef} className={`flex overflow-x-hidden items-center justify-center md:from-transparent md:to-transparent ${path == '/' ? 'md:absolute top-0 md:bg-black/10': 'md:static bg-darkColor'} z-30 w-screen  backdrop-blur-[6px] xs:bg-gradient-to-b xs:from-black xs:to-gray-900 xs:relative ${ham ? 'xs:h-screen' : 'md:h-auto'}`}>
      <nav className="xs:w-[90vw] lg:w-[90vw] mx-auto rounded-b-2xl h-20 2xl:h-28 text-white py-3 lg:pl-8 lg:pr-12 xl:pl-10 xl:pr-24 sm:px-10 xs:px-4 xl:text-lg lg:text-md 2xl:text-xl 3xl:text-3xl flex items-center justify-between font-nav">
        <Nav_Logo></Nav_Logo>
        <Nav_Links path = {path} childClass = "px-3 py-1" className='xs:hidden md:flex md:gap-7 lg:gap-12 ' />
        <section onClick={() => { showHam(!ham) }} className="z-30 md:hidden xs:flex flex-col items-end justify-center gap-2 pr-4" >
          <p className={`${ham ? 'w-6 rotate-[495deg] translate-y-[10px]' : 'w-8'}  transition-all duration-500 p-[1px] bg-white`}></p>
          <p className={`w-6 p-[1px] transition-all duration-500 bg-white ${ham ? 'opacity-0' : 'opacity-100'} transform ${ham ? '-translate-y-10' : 'translate-y-0'}`}></p>

          <p className={`${ham ? 'w-6 rotate-[405deg] -translate-y-[10px]' : 'w-4'} transition-all duration-500
          p-[1px] bg-white`}></p>
        </section>
        <Nav_Links path = {path} childClass = "px-3 py-1" showHam={() => showHam(false)} className={`xs:flex ${ham ? 'xs:right-0' : 'xs:right-[-100%]'} md:hidden
        fixed top-0 z-20 w-full h-screen transition-all duration-500 justify-center
        flex-col items-center gap-10 xs:bg-gradient-to-b xs:from-black xs:to-gray-900`} />
      </nav>
    </section>
    <section ref={navRef2} className="bg-black w-screen fixed top-0 z-40 sm:text-sm xs:text-[7px]">
      <Nav_Links path = {path} childClass = "p-3" className= "text-white flex items-center justify-center gap-5"></Nav_Links>
    </section>
  </>
  );
}

export default Navbar;
