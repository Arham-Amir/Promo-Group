import { ImMenu } from 'react-icons/im'
const Nav_Links = () => {
  return (<>
    <div className="lg:flex gap-12 font-normal nav_links xs:hidden">
      <a href="#" className="">HOME </a>
      <a href="#" className="">SERVICES </a>
      <a href="#" className="">CONTACT US </a>
      <a href="#" className="re">ABOUT-US </a>
    </div>
    <ImMenu className='lg:hidden' size={25}/>
  </>
  );
}

export default Nav_Links;
