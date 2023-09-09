import React, { useState, useEffect } from "react";
import "./Cursor.css";
import {motion} from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(position);
  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e.clientX);
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: position.x-16,
      y: position.y-16,
    },
    hover:{
        x: position.x,
        y: position.y,
    }
  };
  return <><motion.div className="cursor" variants={variants} animate="default"></motion.div></>;
}
