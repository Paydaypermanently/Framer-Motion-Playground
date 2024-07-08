import React, { useState } from "react";
import styles from "./playground4.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function Playground4() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        animate={{
          x: 0,
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "fixed",
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ duration: 1 }}
        className={styles.object3}
      />

      <motion.div
        transition={{ duration: 1 }}
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        className={styles.object2}
      />

      <motion.div
        transition={spring}
        animate={{ scale: 1.2 }}
        className={styles.object1}
      />
    </div>
  );
}

export default Playground4;
