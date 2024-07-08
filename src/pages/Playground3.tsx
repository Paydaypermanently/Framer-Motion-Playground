import React, { useState } from "react";
import styles from "./playground3.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-100%" },
};

function Playground3() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div className={styles.wrapper}>
      <div className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        Click me
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className={styles.object1}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Playground3;
