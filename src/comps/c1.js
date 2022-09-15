import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const C1 = ({ animate }) => {
  useEffect(() => {
    console.log("C1 Mounted ..........");
    return () => {
      console.log("C1 Unmounted.........");
    };
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={animate ? { opacity: 0, scale: 0 } : {}}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        exit={animate ? { opacity: 0, scale: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="w-[500px] flex items-center justify-center min-h-[300px] bg-gray-600"
      >
        COMP 1
      </motion.div>
    </AnimatePresence>
  );
};

export default C1;
