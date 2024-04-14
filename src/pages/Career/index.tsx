import { motion } from "framer-motion";
import Card from "../UI/Card";
import Header from "./components/Header";
import { fadeIn } from "../data/variant";

export default function Career() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <motion.div
        className="flex justify-center pt-[2rem] "
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <h3 className="text-[2.3rem] ">Openings</h3>
      </motion.div>

      <div className="flex justify-center items-center gap-14 my-[4rem] ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
