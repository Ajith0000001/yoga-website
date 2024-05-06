import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { fadeIn } from "../../data/variant";
import { listDatas } from "../../data/data";

export default function Feature() {
  return (
    <div className="container mx-auto  flex flex-col md:flex-row justify-center items-center gap-[4rem] mt-[10rem] py-10 ">
      <motion.img
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        src="pose-2.jpg"
        alt="feature"
        className="w-[400px] h-[400px] rounded-2xl object-cover"
      />

      <motion.div className="flex flex-col  gap-4">
        <motion.h2
          className="text-[2rem] "
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          Why you should learn
          <br /> from us ?
        </motion.h2>
        <motion.p
          className="w-[500px] px-4 md:px-0"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusamus, quas rerum laboriosam corporis reprehenderit iusto
          aspernatur quidem, exercitationem perferendis quis magnam vitae quae,
          quos ab illum magni. Pariatur, consequatur!
        </motion.p>

        <motion.ul
          className="text-red-400 list-none"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          {listDatas.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex gap-2">
                  <CircleCheck className="w-[20px]  " />
                  <p>{item.desc}</p>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
}
