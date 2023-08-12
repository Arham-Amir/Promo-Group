'use client'
import { useRouter } from 'next/navigation'

const Nav_LinksMob = ({ abc, className }) => {
  const router = useRouter()
  function handleClick(e, url) {
    abc()
    router.push(url)
  }

  return (<>
    <section className={`${className} lg:nav_links`}>
      <button onClick={(e) => { handleClick(e, "/") }}>HOME </button>
      <button onClick={(e) => { handleClick(e, "#services") }}>BUSINESSES</button>
      <button onClick={(e) => { handleClick(e, "#contactus") }}>CONTACT-US</button>
      <button onClick={(e) => { handleClick(e, "#about") }}>ABOUT</button>
    </section>
  </>
  );
}

export default Nav_LinksMob;
