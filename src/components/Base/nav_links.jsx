import Link from 'next/link';

const Nav_Links = (props = {}) => {
  return (<>
    <section className={`${props.className} lg:nav_links`}>
      <Link href="/">HOME </Link>
      <Link href="#businesses">BUSINESSES</Link>
      <Link href="#contactus">CONTACT-US</Link>
      <Link href="#about">ABOUT</Link>
    </section>
  </>
  );
}

export default Nav_Links;
