import Link from 'next/link';
import { ImMenu } from 'react-icons/im'
const Nav_Links = (props = {}) => {
  return (<>
    <div className="lg:flex gap-12 font-normal nav_links xs:hidden">
      <Link href="/" className="">HOME </Link>
      <Link href="#services" className="">BUSINESSES</Link>
      <Link href="#contactus" className="">CONTACT-US</Link>
      <Link href="#about" className="re">ABOUT</Link>
    </div>
    <button className='lg:hidden'  onClick={()=>{props.showHamBurger()}}><ImMenu size={25} /></button>
  </>
  );
}

export default Nav_Links;
