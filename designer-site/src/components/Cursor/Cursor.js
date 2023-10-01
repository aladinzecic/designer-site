import React, { useState, useEffect,useContext } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
const {isMenuOn}=useContext(AppContext)
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };


    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
    },
    hover: {
      x: position.x,
      y: position.y,
    },
  };

  return (
    <>
      <motion.div className="cursor" variants={variants} animate="default" style={isMenuOn?{backgroundColor:"white"}:{backgroundColor:"#2596be"}}></motion.div>
    </>
  );
}





