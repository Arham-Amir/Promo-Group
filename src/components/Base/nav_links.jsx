import Link from 'next/link';
import { ImMenu } from 'react-icons/im'
const Nav_Links = (props = {}) => {
  return (<>
    <div className="lg:flex gap-12 font-normal nav_links xs:hidden">
      <Link href="/" className="">HOME </Link>
      <Link href="#services" className="">SERVICES</Link>
      <Link href="#" className="">CONTACT-US</Link>
      <Link href="#" className="re">ABOUT</Link>
    </div>
    <button onClick={()=>{props.showHamBurger()}}><ImMenu className='lg:hidden' size={25} /></button>

  </>
  );
}

export default Nav_Links;
