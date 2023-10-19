import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { MdOutlineNavigateNext } from 'react-icons/md'


const BottomTop = () => {
  return (
    <section className=" bg-gradient-to-br from-indigo-950 to-sky-600">
      <section className="2xl:text-xl 2xl:h-auto lg:h-auto xs:h-auto px-6 py-10 text-white
    flex lg:justify-around lg:flex-row xs:flex-col">
        <section className="py-4  flex flex-col items-center gap-3">
          <Image src={'/image/nav_logo.png'} width={0} height={0}
            className="w-20 h-auto object-cover" alt="nav_logo" ></Image>
          <h1 className="text-2xl">Promo Group</h1>
          <h2 className="text-lg">Follow us on</h2>
          <span className="flex flex-row gap-7 items-center object-cover py-2">
            <Link href='https://www.facebook.com' target="_blank"><BsFacebook size={25}></BsFacebook></Link>
            <Link href='https://www.instagram.com' target="_blank"><BsInstagram size={25}></BsInstagram></Link>
            <Link href='https://www.linkedin.com' target="_blank"><BsLinkedin size={25}></BsLinkedin></Link>
            <Link href='https://www.youtube.com' target="_blank"><BsYoutube size={30}></BsYoutube></Link>
          </span>
        </section>
        <section className="py-4  flex justify-start">
          <section className="text-start flex gap-3 flex-col min-w-max">
            <h1 className="hover-underline-animation after:bg-white text-2xl 2xl:text-3xl pb-5 lg:border-b-0">Businesses</h1>
            <a href='https://www.promodeveloper.com' target="blank" className="text-slate-200 hover:text-white ">
              <MdOutlineNavigateNext stroke="white" className="pr-2 inline-block text-2xl"/>Promo Developer</a>
            <a href='https://promobrick.com/' target="blank" className="text-slate-200 hover:text-white ">
              <MdOutlineNavigateNext stroke="white" className="pr-2 inline-block text-2xl"/>Promo Brick</a>
            <a href='https://www.promogarlic.com' target="blank" className="text-slate-200 hover:text-white ">
              <MdOutlineNavigateNext stroke="white" className="pr-2 inline-block text-2xl"/>Promo Garlic</a>
            <a href='#' className="text-slate-200 hover:text-white ">
            <MdOutlineNavigateNext stroke="white" className="pr-2 inline-block text-2xl"/>Promo Farm</a>
          </section>
        </section>
        <section className="py-4 basis-2/5 lex flex-col items-start gap-3">
          <h1 className="hover-underline-animation after:bg-white text-2xl pb-5 lg:border-b-0  2xl:text-3xl xs:mb-4">Contact-Us</h1>
          <section className="flex lg:flex-row  xs:flex-col w-full gap-4  pb-2 mb-2 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
            <p className="text-slate-200 hover:text-white min-w-[140px]">Whatsapp:</p>
            <section className="flex gap-2 items-center w-fit break-words text-left">
              <span style={{ maxWidth: "100%" }}>+92 300 4439445</span>
            </section>
          </section>
          <section className="flex lg:flex-row  xs:flex-col w-full gap-4  pb-2 mb-2 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
            <p className="text-slate-200 hover:text-white min-w-[140px]">Telephone:</p>
            <section className="flex gap-2 items-center w-fit break-words text-left">
              <span style={{ maxWidth: "100%" }}>042 37512219</span>
            </section>
          </section>
          <section className="flex lg:flex-row xs:flex-col w-full gap-4 pb-2 mb-2 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
            <p className="text-slate-200 hover:text-white  min-w-[140px]">Email:</p>
            <p className="text-slate-200 w-fit hover:text-white">info@promogroup.com</p>
          </section>
          <section className="flex lg:flex-row xs:flex-col w-full gap-4 pb-2 mb-2 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
            <p className="text-slate-200 hover:text-white min-w-[140px]">Head Office:</p>
            <p className="text-slate-200 hover:text-white w-fit">
              60-J Block, DHA EME Sector, Multan Road, Lahore, Pakistan
            </p>
          </section>
          <section className="flex lg:flex-row xs:flex-col w-full gap-4 pb-2 mb-2 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
            <p className="text-slate-200 hover:text-white min-w-[140px]">Site Office:</p>
            <p className="text-slate-200 hover:text-white w-fit">
              Office no. 16 Ground Floor, Future Tower, Jubilee Town, Lahore
            </p>
          </section>
          {/* <section  className="flex lg:flex-row xs:flex-col w-full gap-4 pb-2 mb-2 xs:border-b-2 lg:border-b-0 xs:border-slate-400">
          <p className="min-w-[140px]"></p>
          <p className="text-slate-200 hover:text-white w-2/3 pt-2">Feel free to contact us.</p>
        </section> */}
        </section>
      </section>
      <hr className="w-11/12 mx-auto bg-slate-300"/>
      <section className='flex justify-between items-center px-20 gap-10 h-[200px]'>
        <a target='blank' className='h-full' href="https://www.promodevelopers.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_35px_35px_rgba(255,255,255,0.40)]' src="/logos/promodevelopers.gif" alt="" /></a>
        <a target='blank' className='h-full' href="https://www.promobrick.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_35px_35px_rgba(255,255,255,0.40)]' src="/logos/promobrick.gif" alt="" /></a>
        <a target='blank' className='h-full' href="https://www.promogarlic.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_35px_35px_rgba(255,255,255,0.40)]' src="/logos/promogarlic.gif" alt="" /></a>
        <a target='blank' className='h-full' href="https://www.promofarms.com/"><img className='h-full object-contain hover:-translate-y-4 transition-all duration-200 cursor-pointer drop-shadow-[0_35px_35px_rgba(255,255,255,0.40)]' src="/logos/promofarms.gif" alt="" /></a>
      </section>
    </section>
  );
}

export default BottomTop;
