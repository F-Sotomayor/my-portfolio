import { motion } from "framer-motion";
import NavigationItem from "./NavigationItem";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <header className="headerContainer">
        <div className="iconSide">
          <img src="ff.png" width={30} height={30} />
        </div>
        <div className="navigationItemsSide">
          <NavigationItem
            navigationItemURL="#"
            navigationItemName="About"
            animationDelay={0.25}
          />
          <NavigationItem
            navigationItemURL="#"
            navigationItemName="Experience"
            animationDelay={0.5}
          />
          <NavigationItem
            navigationItemURL="#"
            navigationItemName="Work"
            animationDelay={0.75}
          />
          <NavigationItem
            navigationItemURL="#"
            navigationItemName="Contact"
            animationDelay={1}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeIn", delay: 1 }}
          >
            <button>Resume</button>
          </motion.div>
        </div>
      </header>
    </motion.div>
  );
}
