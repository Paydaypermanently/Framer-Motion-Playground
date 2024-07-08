import React from "react";
import styles from "./playground1.module.scss";
import { motion } from "framer-motion";

function Playground1() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.object1}
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={styles.object2}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          x: [0, 100, 0, 40, 90],
        }}
        transition={{ duration: 5 }}
        className={styles.object3}
      />
    </div>
  );
}

export default Playground1;
