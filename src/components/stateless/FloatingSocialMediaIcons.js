import { motion } from "framer-motion";

export default function FloatingSocialMediaIcons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <div className="socialMediaContainer">
        <a href="https://github.com/F-Sotomayor">
          <div className="socialIcon github" />
        </a>
        <a href="https://www.linkedin.com/in/facusotomayor/">
          <div className="socialIcon linkedin" />
        </a>
        <a href="mailto:facundosotomayor95@gmail.com?Subject=Contact%20from%20portfolio">
          <div className="socialIcon gmail" />
        </a>
      </div>
    </motion.div>
  );
}
