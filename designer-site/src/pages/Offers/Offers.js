import React from "react";
import "./Offers.css";
import { motion } from "framer-motion";
export default function Offers() {
  const variants9 = {
    initial: {
      marginLeft: "-100%",
    },
    animate: {
      marginLeft: "0",
    },
  };
  return (
    <div className="offers">
      <div className="up-offer">
        <div className="up-text">
          <h1>WE'RE READY TO HELP</h1>
          <h1>YOU TREAD A PATH</h1>
          <h1>LESS TRAVELLED</h1>
        </div>
        <div className="up-img">
          <img
            src="https://assets-global.website-files.com/64c29599af562adb656080df/64c29599af562adb656080fa_BALLERINA%201.svg"
            alt="img"
          ></img>
        </div>
      </div>
      <div className="down-offer">
        <div className="img-offer">
          <motion.img
            variants={variants9}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            src="https://assets-global.website-files.com/64c29599af562adb656080df/64c29599af562adb6560814f_IMG_0849-p-500.jpg"
            alt="img"
          ></motion.img>
        </div>
        <div className="img-offer">
          <motion.img
            variants={variants9}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            
            src="https://assets-global.website-files.com/64c29599af562adb656080df/64c29599af562adb6560814e_IMG_0858-p-500.jpg"
            alt="img"
          ></motion.img>
        </div>
      </div>
    </div>
  );
}
