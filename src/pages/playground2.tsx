import React, { useState } from "react";
import styles from "./playground2.module.scss";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0.3, x: "-100%" },
};

function Playground2() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div className={styles.wrapper}>
      <div className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        Click me
      </div>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 1 }}
        className={styles.object1}
      />
    </div>
  );
}

export default Playground2;
