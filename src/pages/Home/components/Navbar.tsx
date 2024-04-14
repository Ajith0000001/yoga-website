import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center py-[1.4rem] sticky top-0 bg-white border-b border-gray-100 z-0 ">
        <h2>logo</h2>

        <ul className="flex gap-8">
          <Link to="/" className="hover:underline  focus:text-rose-600">
            Home
          </Link>
          <Link to="/career" className="hover:underline focus:text-rose-600">
            Carrer
          </Link>
          <Link to="about" className="hover:underline focus:text-rose-600">
            About Us
          </Link>
          <Link to="contact" className="hover:underline focus:text-rose-600">
            Contact Us
          </Link>
        </ul>

        <Link
          to="/login"
          className="bg-rose-200 px-3 py-1 hover:bg-rose-300 rounded-full"
        >
          Login
        </Link>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
