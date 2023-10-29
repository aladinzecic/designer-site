import React, { useContext, useState } from "react";
import "./Main.css";
import image from "../../assets/img1.png";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
export default function MainPage() {
  const [inView, setInView] = useState(false);

  const { isRefreshed, setIsBackgroundBlack, isMenuOn,setIsMenuOn, isLoading } =
    useContext(AppContext);

  const variants1 = {
    initial: {
      transform: "scale(1.4,1.2) translateY(130px)",
    },
    animate: {
      transform: "scale(1.4,1.2) translateY(0px)",
    },
  };
  const variants = {
    initial: {
      y: 130,
    },
    animate: {
      y: 0,
    },
  };
  const variants2 = {
    initial: {
      marginLeft: "-100vw",
    },
    animate: {
      marginLeft: "0vw",
    },
  };
  const variants3 = {
    initial: {
      marginTop: "400%",
    },
    animate: {
      marginTop: "40px",
    },
  };

  return (
    <motion.div
      className="hero-div"
      whileInView={() => {
        setIsBackgroundBlack(true);
      }}
    >
      <motion.div
        variants={variants2}
        className="gray"
        initial="initial"
        animate={isRefreshed ? "animate" : "initial"}
        transition={{
          ease: "easeIn",
          duration: 0.7,
        }}
      ></motion.div>
      <motion.div
        variants={variants2}
        className="blue"
        initial="initial"
        animate={isMenuOn ? "animate" : "initial"}
        transition={{
          ease: "easeOut",
          duration: 0.8,
        }}
      >
        <div className="blue-row">
          {isMenuOn&&<motion.h1
            variants={variants3}
            animate={isMenuOn ? "animate" : "initial"}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.9,
              delay: 0.1,
            }}
            onClick={() => {
              setIsMenuOn(false)
              setTimeout(()=>{
                window.scrollTo({
                  top:window.innerHeight-40,
                  behavior: "smooth",
                });
              },800)
            }}
          >
            ILLUSTRATION
          </motion.h1>}
        </div>
        <div className="blue-row">
          {isMenuOn&&<motion.h1
            variants={variants3}
            animate={isMenuOn ? "animate" : "initial"}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.9,
              delay: 0.3,
            }}
            onClick={() => {
              setIsMenuOn(false)
              setTimeout(()=>{
                window.scrollTo({
                  top:window.innerHeight*4-50,
                  behavior: "smooth",
                });
              },800)
            }}
          >
            WHAT WE DO
          </motion.h1>}
        </div>
        <div className="blue-row">
          {isMenuOn&&<motion.h1
            variants={variants3}
            animate={isMenuOn ? "animate" : "initial"}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.9,
              delay: 0.5,
            }}
            onClick={() => {
              setIsMenuOn(false)
              setTimeout(()=>{
                window.scrollTo({
                  top:window.innerHeight*6-350,
                  behavior: "smooth",
                });
              },800)
            }}
          >
            VIDEO 
          </motion.h1>}
        </div>
        <div className="blue-row">
          {isMenuOn&&<motion.h1
            variants={variants3}
            animate={isMenuOn ? "animate" : "initial"}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.9,
              delay: 0.7,
            }}
            onClick={() => {
              setIsMenuOn(false)
              setTimeout(()=>{
                window.scrollTo({
                  top:window.innerHeight*7-250,
                  behavior: "smooth",
                });
              },800)
            }}
          >
            OFFERS
          </motion.h1>}
        </div>
      </motion.div>

      <div className="handwriting">
        {isLoading == false && (
          <svg
            id="exlIYTENQhW1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 2080 1871"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
          >
            <path
              d="M567.994208,526.170389c38.634556-54.723656,58.575023-129.175554,20.634133-139.280397-19.520761-57.426612-180.665469-38.141568-361.097327,77.377997-43.960421,42.38927-120.794974,130.084334-154.755997,175.390129-34.190803,81.771463-94.360899,199.463864-10.317067,247.609594c72.101569,22.633855,266.606493-71.138562,412.682658-123.804797l830.523849-422.999724c138.149512-67.88281,321.929893-188.84736,237.292528-294.036394-56.279333-54.484031-248.454145-20.914667-376.572925,51.585332-95.841791,34.923499-312.500186,186.893661-433.316791,288.877863L382.28701,722.194649C273.150472,851.024527,161.086669,1070.493256,186.262747,1155.51144c110.386579-35.741398,365.733974-176.496786,510.69479-268.243728l-38.877982,48.232286c63.22878-40.944538,190.999476-97.025566,219.426644-89.500551L753.701402,913.060378c-13.504607,30.539311,18.404073,64.880671,56.743865,72.219466l-30.951199,25.792666c76.066405,2.072725,207.652195-30.382232,260.50593-75.572512-28.184195-33.729218-96.534761-15.454066-131.542599,0-28.57657,24.718186,36.002694,46.280293,69.322866,75.572512-35.628484,58.813489-172.012282,159.368564-260.188596,221.816928-87.557502,84.314544,110.34985,21.042626,221.816929,0l221.816929-77.377998c-87.018196,62.137614-150.953922,126.34631-56.743866,92.853598c42.30143-11.640835,125.371858-37.70045,196.024263-67.060932-105.007399,70.553275-278.585826,169.043525-232.133995,180.548663c31.871061,14.50192,222.73679-66.208031,381.731458-118.646264l242.451062-103.170665-835.682383,469.426524l778.938517-324.987593c195.77656-9.422306,112.777153,64.41415,61.902399,113.48773-68.356102,54.374745-184.166299,129.68708-247.609595,118.646265-86.097031,11.267005-156.312836-2.022318-36.109732-72.219466-109.679018,52.196183-47.164021,83.554106,10.317066,98.012132c73.684866,31.41937,233.597051,31.431095,319.82906,0l237.292528-92.853598c-431.647722,181.076372-429.144468,285.228457-465.530048,370.558152c102.331957-337.70828,350.492257-259.760853,533.470478-100.025715"
              transform="translate(.000002 0.000002)"
              fill="none"
              stroke="#0c0c0c"
              stroke-width="4.16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="6"
            />
          </svg>
        )}
      </div>
      <motion.div
        className="lines lineOne"
        whileInView={() => {
          setInView(true);
        }}
      >
        <motion.h1
          variants={variants1}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{
            ease: "linear",
            duration: 0.25,
            delay: 3,
          }}
        >
          THE POWER
        </motion.h1>
      </motion.div>
      <div className="liness">
        <motion.p
          variants={variants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{
            ease: "linear",
            duration: 0.25,
            delay: 3.2,
          }}
        >
          OF ART
        </motion.p>
      </div>
      <motion.div className="lines lineThree">
        <motion.h1
          variants={variants1}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{
            ease: "easeOut",
            duration: 0.25,
            delay: 3.45,
          }}
        >
          THE BEAUTY
        </motion.h1>
      </motion.div>
      <div className="liness">
        <motion.p
          variants={variants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{
            ease: "linear",
            duration: 0.25,
            delay: 3.7,
          }}
        >
          OF IDEAS
        </motion.p>
      </div>
    </motion.div>
  );
}
