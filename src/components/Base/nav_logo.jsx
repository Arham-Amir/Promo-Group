import Link from "next/link";

const Nav_Logo = () => {
  return (
    <div className="lg:basis-1/2 xs:basis-3/4 flex items-center gap-3 font-medium sm:text-lg lg:text-2xl 2xl:text-4xl">
      <Link href='/'><img src='/image/nav_logo.png' width={70} alt="Company Logo Image for Navbar" /></Link>
      <Link href='/'><p className="xs:text-sm md:text-lg xl:text-xl font-semibold hover:text-2xl transition-all duration-200 ease-in-out ">
        Promo Group
      </p></Link>
    </div>
  );
}

export default Nav_Logo;
