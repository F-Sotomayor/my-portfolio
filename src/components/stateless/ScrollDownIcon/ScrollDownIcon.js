import { motion } from "framer-motion";

export default function ScrollDownIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <div className="scrollDownIcon">
        <img
          src="https://icongr.am/material/chevron-down.svg?size=128&color=64ffda"
          width={30}
          height={30}
        />
        ;
      </div>
    </motion.div>
  );
}
