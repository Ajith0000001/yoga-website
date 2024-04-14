import { Link } from "react-router-dom";
import { icons } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";

export default function Footer() {
  return (
    <motion.div
      className="w-full bg-rose-100  py-[5rem] flex justify-center items-center gap-[4rem]"
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
    >
      <ul className="flex justify-center items-center gap-6">
        <Link to="" className="hover:underline ">
          Home
        </Link>
        <Link to="" className="hover:underline">
          Career
        </Link>
        <Link to="" className="hover:underline">
          About us
        </Link>
        <Link to="" className="hover:underline">
          Contact us
        </Link>
      </ul>

      <div>
        <p className="w-[400px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          nostrum perspiciatis quasi illo! Quos obcaecati reiciendis sapiente
          architecto voluptates dignissimos earum tenetur, laboriosam ipsam
          dicta eligendi nesciunt perspiciatis aperiam soluta.
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-[1.5rem]">Follow us</h2>
        <motion.div
          className="flex gap-4"
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
                <i className="text-[1.8rem]  cursor-pointer">{item.icon}</i>
              </motion.li>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
