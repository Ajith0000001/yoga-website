import { motion } from "framer-motion";
import { fadeIn } from "../../data/variant";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container mx-auto md:flex-row flex flex-col justify-center items-center gap-[10rem] my-[5rem] ">
      <motion.div
        className="flex flex-col gap-2 justify-center items-center px-6 pt-8 md:pt-0 md:px-8"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        <h2 className="text-[2.5rem] mt-4">
          Welcome to <span>Yoga</span> Online Training
        </h2>

        <p>
          These class provides All your needs hese class provides All your needs
        </p>
        <div className="flex">
          <Link
            to="/demo"
            className="bg-rose-300 px-2 py-1 rounded-lg hover:bg-red-400"
          >
            Demo
          </Link>
        </div>
      </motion.div>

      <motion.img
        src="yoga/welcome.jpg"
        alt="yoga"
        className="w-[400px]"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        exit={{}}
      />
    </div>
  );
}
