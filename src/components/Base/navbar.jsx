'use client'
import Nav_Logo from "@components/Base/nav_logo";
import Nav_Links from "@components/Base/nav_links";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [showHamBurger, setShowHamBurger] = useState(false)
  return (<>
    <nav className="w-[92vw] mx-auto mb-5 rounded-b-2xl sticky top-0 z-10 bg-opacity-60 backdrop-blur-lg shadow-lg bg-zinc-100 h-20 2xl:h-24 text-blue-950 py-3 lg:pl-10 lg:pr-24 sm:px-10 xs:px-4 xl:text-xl
    lg:text-md 2xl:text-3xl flex items-center justify-between font-sans">
      <Nav_Logo></Nav_Logo>
      <Nav_Links showHamBurger={() => setShowHamBurger(!showHamBurger)}></Nav_Links>
    </nav>
    {showHamBurger &&
      <div className="lg:hidden z-20 flex flex-col gap-4 font-normal justify-center items-center p-4 mb-4 bg-white w-[100%]">
        <Link href="/" className="w-[90%] border-b-2">HOME </Link>
        <Link href="#services" className="w-[90%] border-b-2">SERVICES</Link>
        <Link href="#" className="w-[90%] border-b-2">CONTACT-US</Link>
        <Link href="#" className="w-[90%] border-b-2">ABOUT</Link>
      </div>
    }
  </>
  );
}

export default Navbar;
