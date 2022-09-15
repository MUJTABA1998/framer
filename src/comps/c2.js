import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const C2 = ({ animate }) => {
  useEffect(() => {
    console.log("C2 Mounted ..........");
    return () => {
      console.log("C2 Unmounted.........");
    };
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={animate ? { opacity: 0, scale: 0 } : {}}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        exit={animate ? { opacity: 0, scale: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="w-[500px] min-h-[300px] flex items-center justify-center bg-gray-400"
      >
        COMP 2
      </motion.div>
    </AnimatePresence>
  );
};

export default C2;
