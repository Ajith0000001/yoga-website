import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";

export default function Header() {
  return (
    <div className="flex justify-center items-center my-[3rem] gap-[3rem]">
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-[2.4rem]">
          Start your <span className="text-rose-500">Career</span> with us!{" "}
        </h1>
        <p className="w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          illum adipisci dolore corporis sed repellat, culpa architecto.
          Inventore sequi consectetur molestias quae aperiam officiis.
          Cupiditate quisquam quidem a sed aut.
        </p>
      </motion.div>
      <motion.img
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        src="yoga/career.jpg"
        alt="yoga"
        className="w-[450px] rounded-2xl"
      />
    </div>
  );
}
