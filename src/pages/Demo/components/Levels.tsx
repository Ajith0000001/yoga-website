import { AnimatePresence, motion } from "framer-motion";
import { image } from "../../data/data";

export default function Levels() {
  return (
    <AnimatePresence>
      <h3 className="text-[2.5rem] text-gray-900 pl-8 mt-[2rem]">
        Choose your style & Level
      </h3>
      <motion.div
        className="container flex flex-wrap  justify-center my-8"
        variants={{
          hidden: { opacity: 1, scale: 1 },
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        animate="visible"
      >
        {image.map((item) => {
          return (
            <motion.li
              key={item.id}
              className="list-none "
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              exit={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100, duration: 1.8 }}
            >
              <motion.img
                src={item.img}
                alt={`${item.id}`}
                className="w-[16rem] h-[16rem] rounded-lg "
              />
            </motion.li>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
