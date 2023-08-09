import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const BottomTop = (props = {}) => {
  return (
    <section className="lg:h-[70vh] xs:h-auto px-6 py-10 text-white bg-gradient-to-br from-indigo-950 to-sky-600
    flex lg:justify-around lg:flex-row xs:flex-col">
      <section className="py-4  flex flex-col items-center gap-3">
        <Image src={'/image/nav_logo.png'} width={0} height={0}
          className="w-20 h-auto object-cover" ></Image>
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
          <h1 className="text-2xl pb-5 lg:border-b-0 xs:border-b-2">Quick Links</h1>
          <Link href='/' className="text-slate-200 hover:text-white text-md">Home</Link>
          <Link href='/about' className="text-slate-200 hover:text-white text-md">About</Link>
          <Link href='/contactus' className="text-slate-200 hover:text-white text-md">Contact Us</Link>
        </section>
      </section>
      <section className="py-4  flex flex-col items-start gap-3">
        <h1 className="text-2xl pb-5 lg:border-b-0 xs:border-b-2">Contact-Us</h1>
        <section className="flex w-full">
          <p className="text-slate-200 hover:text-white flex-1">Telephone:</p>
          <p className="text-slate-200 hover:text-white flex-1">090-0078601</p>
        </section>
        <section className="flex w-full">
          <p className="text-slate-200 hover:text-white flex-1">Customer Care:</p>
          <p className="text-slate-200 hover:text-white flex-1">090-0078601</p>
        </section>
        <section className="flex w-full">
          <p className="text-slate-200 hover:text-white flex-1">Email:</p>
          <p className="text-slate-200 hover:text-white flex-1">promogroups@gmail.com</p>
        </section>
        <p className="text-slate-200 hover:text-white w-2/3 pt-4">We ensure to provide the best quality work to our clients.</p>

      </section>
    </section>
  );
}

export default BottomTop;
