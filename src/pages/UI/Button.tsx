import { motion } from "framer-motion";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string | undefined;
}) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.button>
  );
}
