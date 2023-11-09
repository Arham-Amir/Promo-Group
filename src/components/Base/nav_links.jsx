import { Link as Lin } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav_Links = (props = {}) => {
  const path = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    setDropdownOpen(false);
  }, [path])
  return (<>
    <section className={`${props.className} font-nav`}>
      {path == '/' ? <>
        <Lin className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer ${path == '/' && 'bg-indigo-950'}`} to="home" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>HOME </Lin>
        {/* <Link className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer ${path == '/blogs' && 'bg-indigo-950'}`} href="/blogs" onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>BLOGS</Link> */}
        {/* <button className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer relative`} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          BUSINESSES
          {dropdownOpen &&
            <section className="absolute top-full z-30">
              <p>Promo Developers</p>
              <p>Promo Brick</p>
              <p>Promo Garlic</p>
              <p>Promo Farms</p>
            </section>}
        </button> */}
        <Lin className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} to="about" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>ABOUT</Lin>
        <Lin className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>CONTACT-US</Lin>
      </> : null}
    </section>
  </>
  );
}

export default Nav_Links;
