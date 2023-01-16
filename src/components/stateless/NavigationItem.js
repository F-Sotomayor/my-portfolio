import { motion } from "framer-motion";

export default function NavigationItem({
  animationDuration,
  animationDelay,
  navigationItemName,
  navigationItemURL,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeIn",
        delay: animationDelay,
      }}
    >
      <a href={navigationItemURL}>{navigationItemName}</a>
    </motion.div>
  );
}
