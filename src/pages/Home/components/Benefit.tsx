import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import { data } from "../../data/data";
import { BenefitTypes } from "../../data/types";

export default function Benefit() {
  return (
    <motion.div className="container h-[400px] mx-auto bg-gray-100 flex flex-col lg:grid grid-cols-4 justify-center items-center gap-10 mt-6 px-6 mb-[3rem]">
      {data.map((item: BenefitTypes) => {
        return (
          <motion.li
            key={item.id}
            className="list-none "
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <div className="w-12 h-12 bg-white rounded-full grid justify-center items-center">
              <p>{item.logo}</p>
            </div>
            <h3 className="text-[1.5rem] ">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.li>
        );
      })}
    </motion.div>
  );
}
