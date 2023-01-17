import { motion } from "framer-motion";

export default function FloatingEmail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="floatingSidePanels"
    >
      <div className="floatingEmailContainer">
        <div className="emptyBox"></div>
        <div className="emailBox">
          <span>facundosotomayor95@gmail.com</span>
        </div>
      </div>
    </motion.div>
  );
}
