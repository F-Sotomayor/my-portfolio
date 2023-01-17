import { motion } from "framer-motion";

export default function FloatingSocialMediaIcons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="floatingSidePanels"
    >
      <div className="socialMediaContainer">
        <div className="emptyBox"></div>
        <div className="iconsBox">
          <a href="https://github.com/F-Sotomayor">
            <img src="https://icongr.am/material/github.svg?size=128&color=a8b2d1" />
          </a>
          <a href="https://www.linkedin.com/in/facusotomayor/">
            <img src="https://icongr.am/material/linkedin.svg?size=128&color=a8b2d1" />
          </a>
          <a href="mailto:facundosotomayor95@gmail.com?Subject=Contact%20from%20portfolio">
            <img src="https://icongr.am/material/gmail.svg?size=128&color=a8b2d1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
