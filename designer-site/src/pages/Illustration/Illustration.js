import React from "react";
import "./Illustration.css";
import { motion } from "framer-motion";
export default function Illustration() {
  return (
    <div className="main">
      <div className="left">
        <div className="img-div">
          <img
            src="https://i.pinimg.com/1200x/60/75/be/6075be0540d4ef33b9d4859d0f60072a.jpg"
            alt="slika"
          ></img>
        </div>
      </div>
      <div className="right-side">
        <div className="right"></div>
        <div className="right"></div>
        <div className="right"></div>
      </div>
      {/* <div className="left">
          <div className="img-div">
            <img
              src="https://i.pinimg.com/1200x/65/f9/2f/65f92f623e59cf095c92cc96388c8a17.jpg"
              alt="slika"
            ></img>
          </div>
        </div> */}

      {/* <div className="left">
          <div className="img-div">
            <img
              src="https://i.pinimg.com/1200x/07/26/1c/07261ca493929aac0f258c9b982446d3.jpg"
              alt="slika"
            ></img>
          </div>
        </div> */}
    </div>
  );
}
