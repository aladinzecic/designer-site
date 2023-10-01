import React, { useState, useEffect, useContext } from "react";
import "./WhatWeDo.css";
import { transform } from "framer-motion";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
export default function WhatWeDo() {
  const [isHovered, setIsHovered] = useState(0);
  const { setIsBackgroundBlack } = useContext(AppContext);

  useEffect(() => {
    console.log(isHovered);
  });

  return (
    <motion.div
      className="hero"
      
    >
      <h3>what we do</h3>
      <div
        className="line line1"
        onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(0)}
      >
        <h1>BRAND & CREATIVE STRATEGY</h1>
        {isHovered === 1 && (
          <>
            <p className="font">*</p>
            <h1>BRAND & CREATIVE STRATEGY</h1>
            <p className="font">*</p>
            <h1>BRAND & CREATIVE STRATEGY</h1>
            <p className="font">*</p>
            <h1>BRAND & CREATIVE STRATEGY</h1>
          </>
        )}
      </div>
      <div
        className="line line2"
        onMouseEnter={() => setIsHovered(2)}
        onMouseLeave={() => setIsHovered(0)}
      >
        <h1>BRAND CREATION</h1>
        {isHovered === 2 && (
          <>
            <p className="font">*</p>
            <h1>BRAND CREATION</h1>
            <p className="font">*</p>
            <h1>BRAND CREATION</h1>
            <p className="font">*</p>
            <h1>BRAND CREATION</h1>
            <p className="font">*</p>
            <h1>BRAND CREATION</h1>
            <p className="font">*</p>
            <h1>BRAND CREATION</h1>
            <p className="font">*</p>
            <h1>BRAND CREATION</h1>
          </>
        )}
      </div>
      <div
        className="line line3"
        onMouseEnter={() => setIsHovered(3)}
        onMouseLeave={() => setIsHovered(0)}
      >
        <h1>BRAND UNIVERSES</h1>
        {isHovered === 3 && (
          <>
            <p className="font">*</p>
            <h1>BRAND UNIVERSES</h1>
            <p className="font">*</p>
            <h1>BRAND UNIVERSES</h1>
            <p className="font">*</p>
            <h1>BRAND UNIVERSES</h1>
            <p className="font">*</p>
            <h1>BRAND UNIVERSES</h1>
            <p className="font">*</p>
            <h1>BRAND UNIVERSES</h1>
          </>
        )}
      </div>
      <div
        className="line line4 "
        onMouseEnter={() => setIsHovered(4)}
        onMouseLeave={() => setIsHovered(0)}
      >
        <h1>VISUAL & VERBAL IDENTITIES</h1>
        {isHovered === 4 && (
          <>
            <p className="font">*</p>
            <h1>VISUAL & VERBAL IDENTITIES</h1>
            <p className="font">*</p>
            <h1>VISUAL & VERBAL IDENTITIES</h1>
            <p className="font">*</p>
            <h1>VISUAL & VERBAL IDENTITIES</h1>
          </>
        )}
      </div>
      <div
        className="line line5"
        onMouseEnter={() => setIsHovered(5)}
        onMouseLeave={() => setIsHovered(0)}
      >
        <h1>BRAND PACKAGING</h1>
        {isHovered === 5 && (
          <>
            <p className="font">*</p>
            <h1>BRAND PACKAGING</h1>
            <p className="font">*</p>
            <h1>BRAND PACKAGING</h1>
            <p className="font">*</p>
            <h1>BRAND PACKAGING</h1>
            <p className="font">*</p>
            <h1>BRAND PACKAGING</h1>
            <p className="font">*</p>
            <h1>BRAND PACKAGING</h1>
          </>
        )}
      </div>
      <div
        className="line line6"
        onMouseEnter={() => setIsHovered(6)}
        onMouseLeave={() => setIsHovered(0)}
      >
        <h1>BRAND BOOKS & GUIDELINES</h1>
        {isHovered === 6 && (
          <>
            <p className="font">*</p>
            <h1>BRAND BOOKS & GUIDELINES</h1>
            <p className="font">*</p>
            <h1>BRAND BOOKS & GUIDELINES</h1>
            <p className="font">*</p>
            <h1>BRAND BOOKS & GUIDELINES</h1>
          </>
        )}
      </div>
      <motion.h4 whileInView={() => {
        setIsBackgroundBlack(false);
        console.log(1)
      }}>
        WE’VE AMASSED A FEW AWARDS WITH CLIENTS WHO’VE PUT THEIR FAITH IN US
      </motion.h4>
    </motion.div>
  );
}
