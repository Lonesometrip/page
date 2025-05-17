import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) => () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }} // Reduced threshold for earlier animation trigger
    className={`${styles.padding} max-w-7xl mx-auto relative z-0 py-20 section-container`}
  >
    <span className="hash-span" id={idName}>
      &nbsp;
    </span>
    <Component />
  </motion.section>
);

export default StarWrapper;
