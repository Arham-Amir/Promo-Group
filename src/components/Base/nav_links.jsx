import { Link as Lin } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav_Links = (props = {}) => {
  const path = usePathname();
  return (<>
    <section className={`${props.className}`}>
      {path == '/' ? <>
        <Lin className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer ${path == '/' && 'bg-indigo-950'}`} to="home" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>HOME </Lin>
        <Link className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer ${path == '/blogs' && 'bg-indigo-950'}`} href="/blogs" onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>BLOGS</Link>
        <Lin className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} to="about" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>ABOUT</Lin>
        <Lin className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} to="contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>CONTACT-US</Lin>
      </> : <>
        <Link className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer ${path == '/' && 'bg-indigo-950'}`} href="/" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>HOME </Link>
        <Link className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer ${path == '/blogs' && 'bg-indigo-950'}`} href="/blogs" onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>BLOGS</Link>
        <Link className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} href="/#about" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>ABOUT</Link>
        <Link className={`${props.childClass} hover:bg-indigo-950 transition-all duration-100 ease-in-out cursor-pointer`} href="/#contactus" spy={true} smooth={true} duration={500} onClick={() => { document.body.classList.remove('overflow-hidden'); props.showHam?.() }}>CONTACT-US</Link>
      </>}
    </section>
  </>
  );
}

export default Nav_Links;
