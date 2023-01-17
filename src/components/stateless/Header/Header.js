import { motion } from "framer-motion";
import NavigationItem from "./NavigationItem";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ height: "10%" }}
    >
      <header className="headerContainer">
        <div className="iconSide">
          <img src="ff.png" width={30} height={30} />
        </div>
        <div className="navigationItemsSide">
          <NavigationItem
            navigationItemURL="#about"
            navigationItemName="About"
            animationDelay={0.15}
          />
          <NavigationItem
            navigationItemURL="#"
            navigationItemName="Experience"
            animationDelay={0.35}
          />
          <NavigationItem
            navigationItemURL="#"
            navigationItemName="Work"
            animationDelay={0.55}
          />
          <NavigationItem
            navigationItemURL="#"
            navigationItemName="Contact"
            animationDelay={0.75}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.9 }}
          >
            <button>Resume</button>
          </motion.div>
        </div>
      </header>
    </motion.div>
  );
}
