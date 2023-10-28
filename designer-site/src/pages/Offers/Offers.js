import React, { useContext } from "react";
import "./Offers.css";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
export default function Offers() {
  const { setIsBackgroundBlack } = useContext(AppContext);

  const variants9 = {
    initial: {
      marginLeft: "-100%",
    },
    animate: {
      marginLeft: "0",
    },
  };
  const variants10 = {
    initial: {
      marginTop: "60px",
    },
    animate: {
      marginTop: "0",
    },
  };
  const variants11 = {
    initial: {
      width: "0%",
    },
    animate: {
      width: "100%",
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
        <div className="down-left-offer">
          <motion.div className="img-offer">
            <motion.img
              variants={variants9}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              src="https://assets-global.website-files.com/64c29599af562adb656080df/64c29599af562adb6560814f_IMG_0849-p-500.jpg"
              alt="img"
            ></motion.img>
          </motion.div>
          <div className="img-offer">
            <motion.img
              variants={variants9}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              src="https://assets-global.website-files.com/64c29599af562adb656080df/64c29599af562adb6560814e_IMG_0858-p-500.jpg"
              alt="img"
            ></motion.img>
          </div>
        </div>
        <div className="offer-offers">
          <div className="hidden">
            <motion.h1
              variants={variants10}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
            >
              LAUNCH A BRAND THAT’S DIFFERENT AND CREDIBLE
            </motion.h1>
          </div>
          <motion.hr
            variants={variants11}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              delay: 1.05,
              duration: 0.5,
            }}
          />
          <div className="hidden">
            <motion.h1
              variants={variants10}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 1.1,
                duration: 0.5,
              }}
            >
              REFRESH A BRAND TO BUILD LOYALTY
            </motion.h1>
          </div>
          <motion.hr
            variants={variants11}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              delay: 1.15,
              duration: 0.5,
            }}
          />
          <div className="hidden">
            <motion.h1
              variants={variants10}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 1.2,
                duration: 0.5,
              }}
            >
              RE-ENERGIZE A BRAND THROUGH EXTENSION
            </motion.h1>
          </div>
          <motion.hr
            variants={variants11}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            transition={{
              delay: 1.25,
              duration: 0.5,
            }}
          />
          <motion.div className="hidden"
           whileInView={()=>{setIsBackgroundBlack(false)}}
          >
            <motion.h1
              variants={variants10}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 1.3,
                duration: 0.5,
              }}
            >
              RE-ACTIVATE A BRAND THROUGH EXPERIENCE
            </motion.h1>
          </motion.div>
          <motion.hr
            variants={variants11}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              delay: 1.35,
              duration: 0.5,
            }}
          />
          <div className="hidden">
            <motion.h1
              variants={variants10}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 1.4,
                duration: 0.5,
              }}
            >
              EMBRACE SHIFTS IN CULTURE AND NEED
            </motion.h1>
          </div>
          <motion.hr
            variants={variants11}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              delay: 1.45,
              duration: 0.5,
            }}
          />
          <div className="hidden">
            <motion.h1
              variants={variants10}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{
                delay: 1.5,
                duration: 0.5,
              }}
            >
              MAKE AUDIENCES FALL IN LOVE WITH YOU
            </motion.h1>
          </div>
          <motion.hr
            variants={variants11}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              delay: 1.55,
              duration: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}
