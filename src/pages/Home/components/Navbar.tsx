import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { icons } from "../../data/data";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center py-[1.4rem] sticky top-0 bg-white border-b border-gray-100 z-50 ">
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

        <motion.div
          className="flex gap-6"
          variants={{
            hidden: { opacity: 1, scale: 1 },
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          initial="hidden"
          animate="visible"
        >
          {icons.map((item) => {
            return (
              <motion.li
                key={item.id}
                className="list-none"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring" }}
              >
                <Link to={item.link}>
                  <i className="text-[1.8rem]  cursor-pointer">{item.icon}</i>
                </Link>
              </motion.li>
            );
          })}
        </motion.div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
