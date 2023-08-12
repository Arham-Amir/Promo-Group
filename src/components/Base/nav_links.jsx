import Link from 'next/link';

const Nav_Links = (props = {}) => {
  return (<>
    <section className={`${props.className} lg:nav_links`}>
      <Link href="/" className="">HOME </Link>
      <Link href="#services" className="">BUSINESSES</Link>
      <Link href="#contactus" className="">CONTACT-US</Link>
      <Link href="#about" className="re">ABOUT</Link>
    </section>
  </>
  );
}

export default Nav_Links;
