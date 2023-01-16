import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="introductionContainer">
        <div className="myName">Hi, my name is</div>
        <div className="titleName">Facundo Sotomayor.</div>
        <div className="titleProfession">
          I build interactive and beautifull websites.
        </div>
        <div className="description">
          I'm a Frontend Developer specializing in React and NextJs. I'm
          passionate and curious about what i do and that keeps me constantly
          learning and investigating <span>new technologies</span>.
        </div>
        <button>Check out my work!</button>
      </div>
    </motion.div>
  );
}
