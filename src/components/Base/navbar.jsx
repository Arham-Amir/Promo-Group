'use client'
import Nav_Logo from "@components/Base/nav_logo";
import Nav_Links from "@components/Base/nav_links";
import Nav_LinksMob from "@components/Base/nav_linksMob";
import { useState } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (<>
    <nav className="w-[92vw] mx-auto mb-5 rounded-b-2xl fixed top-0 left-1/2 -translate-x-1/2 z-30 bg-opacity-60 backdrop-blur-lg shadow-lg bg-zinc-100 h-20 2xl:h-28 text-blue-950 py-3 lg:pl-10 lg:pr-24 sm:px-10 xs:px-4 xl:text-lg
    lg:text-md 2xl:text-xl flex items-center justify-between font-sans">
      <Nav_Logo></Nav_Logo>
      <Nav_Links className='xs:hidden lg:flex gap-12 font-semibold' />
      <button onClick={() => setShowLinks(!showLinks)} className="basis-1/4 xs:flex xs:items-end xs:flex-col lg:hidden">
        <p className="w-5 border-t-2 border-blue-950 mb-1"></p>
        <p className="w-5 border-t-2 border-blue-950 mb-1"></p>
        <p className="w-5 border-t-2 border-blue-950 mb-1"></p>
      </button>
    </nav>
    <Nav_LinksMob abc={() => setShowLinks(!showLinks)} className={`xs:fixed xs:z-10 xs:bg-slate-300 xs:p-4
      ${showLinks ? 'xs:bottom-0 xs:top-20' : 'xs:bottom-[100%]'}
      xs:pt-4 xs:bg-opacity-70 xs:w-full xs:h-auto xs:backdrop-blur-sm xs:text-xl  xs:flex xs:flex-col xs:items-center lg:hidden xs:gap-10 xs:transition-all xs:duration-200 xs:ease-in-out xs:text-blue-950 xs:font-bold`}></Nav_LinksMob>
  </>
  );
}

export default Navbar;
