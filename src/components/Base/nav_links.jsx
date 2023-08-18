import {Link} from 'react-scroll';

const Nav_Links = (props = {}) => {
  return (<>
    <section className={`${props.className} lg:nav_links`}>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>HOME </Link>
      <Link to="businesses" spy={true} smooth={true} offset={-50} duration={500}>BUSINESSES</Link>
      <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>ABOUT</Link>
      <Link to="contactus" spy={true} smooth={true} offset={-50} duration={500}>CONTACT-US</Link>
    </section>
  </>
  );
}

export default Nav_Links;
