// import nav_logo from 'next/image'
const Nav_Logo = () => {
  return (
    <div className="flex items-center gap-3 font-medium text-2xl">
      <img src='/image/nav_logo.png' width={70} alt="Company Logo Image for Navbar" />
      <p>
        Promo <span className="text-blue-950">Group</span>
      </p>
    </div>
  );
}

export default Nav_Logo;
