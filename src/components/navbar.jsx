import Nav_Logo from "@components/nav_logo";
import Nav_Links from "@components/nav_links";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-opacity-60 backdrop-blur-lg shadow-md bg-gray-500 h-24 text-white py-3 pl-5 pr-24 text-xl flex items-center
     justify-between font-sans">
      <Nav_Logo></Nav_Logo>
      <Nav_Links></Nav_Links>
    </nav>
  );
}

export default Navbar;
