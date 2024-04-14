import { motion } from "framer-motion";
import Button from "./Button";
import { fadeIn } from "../data/variant";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
    >
      <div className="w-[300px]  py-8 px-8 grid gap-2 shadow-xl border border-gray-100 rounded-xl transition duration-250 hover:scale-105">
        <div>
          <i></i>
          <p className="text-[1.5rem]">Marketing</p>
        </div>

        <div className="flex">
          <h3 className="bg-gray-200 border border-gray-300 inline-block px-2 rounded-md">
            Fresher/experience
          </h3>
        </div>
        <p className="mx-auto">
          description about the role of the job description about the role of
          the job description about the role of the job
        </p>
        <Link to="/job_apply" className="mx-auto">
          <Button className="bg-rose-200 px-4 py-2 hover:bg-rose-300 rounded-full">
            Apply Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
