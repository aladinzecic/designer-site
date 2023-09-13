import React, { useState, useEffect } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const scrollUpdate = () => {
      // Update cursor position when scrolling
      setPosition((prevPosition) => ({
        x: prevPosition.x + window.scrollX,
        y: prevPosition.y + window.scrollY,
      }));
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("scroll", scrollUpdate);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("scroll", scrollUpdate);
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
    },
    hover: {
      x: position.x,
      y: position.y,
    },
  };

  return (
    <>
      <motion.div className="cursor" variants={variants} animate="default"></motion.div>
    </>
  );
}





