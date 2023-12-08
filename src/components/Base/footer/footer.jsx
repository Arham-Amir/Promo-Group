import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import LazyImage from '../lazyImage';
const Footer = () => {
  return (
    <section className="bg-[#0A1128] flex flex-col">
       <section className="w-[85%] mx-auto flex flex-row xs:flex-wrap md:flex-nowrap justify-center md:gap-x-10 py-6">
        <a href="https://www.promodevelopers.com/" target='_blank' className="h-full mx-auto xs:w-1/2 md:w-1/5 px-4 xs:order-2 md:order-1">
          <LazyImage className="h-[80px] md:h-[90px] 2xl:h-[120px] p-3 w-full object-contain hover:-translate-y-2 md:hover:border-t-4 border-themeColor transition-all duration-75" src="/logos/promodevelopers.gif"/>
        </a>
        <a href="https://www.promobrick.com/" target='_blank' className="h-full mx-auto xs:w-1/2 md:w-1/5 px-4 xs:order-3 md:order-2">
          <LazyImage className="h-[80px] md:h-[90px] 2xl:h-[120px] p-3 w-full object-contain hover:-translate-y-2 md:hover:border-t-4 border-themeColor transition-all duration-75" src="/logos/promobrick.gif"/>
        </a>
        <a href="https://www.promogroup.com.pk/" target='_blank' className="h-full mx-auto xs:w-full md:w-1/5 px-4 xs:order-1 md:order-3">
          <LazyImage className="h-[80px] md:h-[160px] 2xl:h-[180px] w-full object-contain hover:-translate-y-2 md:hover:border-t-4 border-themeColor transition-all duration-75" src="/logos/promogroup.gif"/>
        </a>
        <a href="https://www.promogarlic.com/" target='_blank' className="h-full mx-auto xs:w-1/2 md:w-1/5 px-4 xs:order-4 md:order-4">
          <LazyImage className="h-[80px] md:h-[90px] 2xl:h-[120px] p-3 w-full object-contain hover:-translate-y-2 md:hover:border-t-4 border-themeColor transition-all duration-75" src="/logos/promogarlic.gif"/>
        </a>
        <a href="https://www.promoland.com.pk/" target='_blank' className="h-full mx-auto xs:w-1/2 md:w-1/5 px-4 xs:order-5 md:order-5">
          <LazyImage className="h-[80px] md:h-[90px] 2xl:h-[120px] p-3 w-full object-contain hover:-translate-y-2 md:hover:border-t-4 border-themeColor transition-all duration-75" src="/logos/promofarms.gif"/>
        </a>
      </section>
      <section className="border-b-2 py-3 w-11/12 mx-auto text-white flex flex-col gap-2">
        <h2 className="text-lg w-fit mx-auto  pb-1">Follow us on</h2>
        <section className="flex flex-row gap-7 items-center w-fit mx-auto py-2 text-white">
          <a className='border rounded-full p-2 hover:border-yellow-500' href='https://www.facebook.com/TechnoPakConstruction?mibextid=ZbWKwL' target="_blank"><BsFacebook size={25}></BsFacebook></a>
          <a className='border rounded-full p-2 hover:border-yellow-500' href='https://www.facebook.com/TechnoPakConstruction?mibextid=ZbWKwL' target="_blank"><BsInstagram size={25}></BsInstagram></a>
          <a className='border rounded-full p-2 hover:border-yellow-500' href='https://www.facebook.com/TechnoPakConstruction?mibextid=ZbWKwL' target="_blank"><BsLinkedin size={25}></BsLinkedin></a>
          <a className='border rounded-full p-2 hover:border-yellow-500' href='https://www.youtube.com/@PromoGroup786/featured' target="_blank"><BsYoutube size={25}></BsYoutube></a>
        </section>
      </section>
      <section className='w-screen bg-black'>
        <section className="py-3 px-5 mx-auto xs:text-xs md:text-sm text-white flex justify-between items-center flex-col sm:flex-row gap-y-2">
          <p>&copy; 2018 - Promo Group | All Rights Reserved</p>
          <p >Built by FurmTech</p>
        </section>
      </section>
    </section>
  );
}

export default Footer;
