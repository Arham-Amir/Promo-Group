import { Link as Lin } from "react-scroll";
import Link from "next/link";

const Nav_Links = (props = {}) => {

  return (<>
    <section className={`${props.className} font-nav`}>
      <Link href="/" className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer
      ${props.path == '/' && 'bg-indigo-950'}`} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>
        HOME
      </Link>
      <Link href="/gallery" className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer
      ${props.path == '/gallery' && 'bg-indigo-950'}`} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>
        Gallery
      </Link>
      <Lin className={`${props.childClass} ${props.path == '/gallery' && 'hidden'} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} to="about" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>ABOUT</Lin>
      <Link href="/#about" className={`${props.childClass} ${props.path == '/' && 'hidden'} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`}  onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>ABOUT</Link>
      <Lin className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>CONTACT-US</Lin>
    </section>
  </>
  );
}

export default Nav_Links;
