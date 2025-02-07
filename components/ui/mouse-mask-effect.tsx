"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const MouseMaskEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-[50px] h-[50px] pointer-events-none"
      animate={{
        x: position.x - 25,
        y: position.y - 25,
      }}
      transition={{ type: "keyframes", stiffness: 150, damping: 20 }}
    >
      <img src="/mask.svg" alt="" className="w-full h-full opacity-15" />
    </motion.div>
  );
}; 