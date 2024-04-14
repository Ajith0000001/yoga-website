import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../../data/variant";

export default function PriceCard({
  title,
  price,
}: {
  title: string;
  price: number | string;
}) {
  return (
    <motion.div
      className="w-[300px] border border-gray-200 py-10 grid gap-4 shadow-xl  rounded-2xl"
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      whileHover={{ scale: 1.1 }}
    >
      <h2 className="text-[1.5rem] pl-4">{title}</h2>

      <p className="px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        explicabo totam mollitia ullam cum animi quisquam laboriosam et odit
        enim nulla quae, repudiandae doloribus doloremque sequi error velit
        veniam repellat.
      </p>

      <div className="flex justify-around">
        <h4 className="text-lg text-rose-400 inline-block font-bold">
          Price:${price}
        </h4>
        <Link
          to="/"
          className="bg-rose-300 px-2 py-1 rounded-xl hover:bg-rose-400"
        >
          Join Now
        </Link>
      </div>
    </motion.div>
  );
}
