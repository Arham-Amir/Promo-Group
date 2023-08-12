
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'


const BottomTop = (props = {}) => {
  return (
    <section className="2xl:text-2xl 2xl:h-auto lg:h-auto xs:h-auto px-6 pt-12 pb-16 text-white bg-gradient-to-br from-indigo-950 to-sky-600
    flex lg:justify-around lg:flex-row xs:flex-col">
      <section className="py-4  flex flex-col items-center gap-3">
        <Image src={'/image/nav_logo.png'} width={0} height={0}
          className="w-20 h-auto object-cover" alt="nav_logo" ></Image>
        <h1 className="text-2xl">Promo Group</h1>
        <h2 className="text-lg">Follow us on</h2>
        <span className="flex flex-row gap-7 object-cover py-2">
          <Link href='https://www.facebook.com' target="_blank"><BsFacebook size={25}></BsFacebook></Link>
          <Link href='https://www.instagram.com' target="_blank"><BsInstagram size={25}></BsInstagram></Link>
          <Link href='https://www.linkedin.com' target="_blank"><BsLinkedin size={25}></BsLinkedin></Link>
        </span>
      </section>
      <section className="py-4  flex justify-start">
        <section className="text-start flex gap-3 flex-col">
          <h1 className="text-2xl pb-5 lg:border-b-0">Quick Links</h1>
          <Link href='/' className="text-slate-200 hover:text-white text-md">Home</Link>
          <Link href='#services' className="text-slate-200 hover:text-white text-md">Services</Link>
          <Link href='#contactus' className="text-slate-200 hover:text-white text-md">Contact Us</Link>
          <Link href='#about' className="text-slate-200 hover:text-white text-md">About</Link>
        </section>
      </section>
      <section className="py-4 basis-1/3 lex flex-col items-start gap-3">
        <h1 className="text-2xl pb-5 lg:border-b-0  xs:mb-4">Contact-Us</h1>
        <section className="flex lg:flex-row  xs:flex-col w-full gap-4  pb-4 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
          <p className="text-slate-200 hover:text-white w-[140px]">Whatsapp:</p>
          <section className="flex gap-2 items-center w-fit break-words text-left">
            <Link href={'https://wa.me/+923004439445'} target='_blank'><ImWhatsapp className='text-green-500' size={22} /></Link>
            <span style={{ maxWidth: "100%" }}>+92 300 4439445</span>
          </section>
        </section>
        <section className="flex lg:flex-row xs:flex-col w-full gap-4 pb-4 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
          <p className="text-slate-200 hover:text-white  w-[140px]">Email:</p>
          <p className="text-slate-200 w-fit hover:text-white">promogroup786@gmail.com</p>
        </section>
        <section className="flex lg:flex-row xs:flex-col w-full gap-4 pb-4 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
          {/* <p className="text-slate-200 hover:text-white w-[140px]">Address:</p> */}
          <p className="text-slate-200 hover:text-white uppercase w-fit">
            60-J Block, DHA EME Sector, Multan Road, Lahore, Pakistan
          </p>
        </section>
        <p className="text-slate-200 hover:text-white w-2/3 pt-2">Feel free to contact us.</p>

      </section>
    </section>
  );
}

export default BottomTop;
