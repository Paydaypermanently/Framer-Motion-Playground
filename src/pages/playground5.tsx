import React, { useEffect, useState } from "react";
import styles from "./playground5.module.scss";
import { motion, AnimatePresence, useAnimate } from "framer-motion";

function Playground5() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // This "li" selector will only select children
    // of the element that receives `scope`.
    animate(scope.current, { opacity: 0.5 }, { duration: 1 });
  });

  function onUpdate(latest: any) {
    console.log("end");
  }

  return (
    <div className={styles.wrapper}>
      <motion.div
        animate={{ x: 100, opacity: 0 }}
        onAnimationComplete={onUpdate}
        className={styles.object1}
        transition={{ duration: 1 }}
      />

      <div ref={scope} className={styles.object2} />
    </div>
  );
}

export default Playground5;
