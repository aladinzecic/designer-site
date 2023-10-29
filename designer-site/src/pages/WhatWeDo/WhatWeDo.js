import React, { useState, useEffect, useContext } from "react";
import "./WhatWeDo.css";
import { transform } from "framer-motion";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
export default function WhatWeDo() {
  const [isHovered, setIsHovered] = useState(0);
  const { setIsBackgroundBlack } = useContext(AppContext);
  const [cursorPosition, setCursorPosition] = useState(0);

  return (
    <motion.div className="hero">
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
        onMouseOver={() => setIsHovered(5)}
        onMouseOut={() => setIsHovered(0)}
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
      <motion.h3
        whileInView={() => {
          setIsBackgroundBlack(false);
        }}
        style={{ marginTop: "40px" }}
      >
        WE’VE AMASSED A FEW AWARDS WITH CLIENTS WHO’VE PUT THEIR FAITH IN US
      </motion.h3>
      <div className="sponsors">
        <div><img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64b6b75b82020c34ca922f8c_Design%20Week.svg"></img></div>
        <div><img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64b6b75b087721a85469e564_Clio.svg"></img></div>
        <div><img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64b6b75bee9a2779957857b5_Dieline.svg"></img></div>
        <div><img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64b6b75c7dee090e879d0b11_D%26AD.svg"></img></div>
        <div><img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64b6b75b236708cf047edf20_DBA.svg"></img></div>
        <div><img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64b6b75bb2a7903e5717f9af_The%20Drum.svg"></img></div>
        <div><img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64b6b75b541b392ebc0475e0_Pentawards.svg"></img></div>
      </div>
    </motion.div>
  );
}
