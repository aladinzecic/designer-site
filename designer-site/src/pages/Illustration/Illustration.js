import React, { useState, useEffect } from "react";
import "./Illustration.css";
export default function Illustration() {
  const [scroll, setScroll] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 900) {
        setScroll(1);
      } else if (scrollY < 1600) {
        setScroll(2);
      } else {
        setScroll(3);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <div className="left">
        <div className="img-div">
          {scroll === 1 ? (
            <img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64ba9142443f47cb0594a5f9_Illumination_illustration.svg"></img>
          ) : scroll === 2 ? (
            <img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64ba9142207f66103ef37397_Creation_illustration.svg"></img>
          ) : (
            <img src="https://assets.website-files.com/64ae62aeb628eb7f18f1d79c/64bfd0ae75299ea875c11394_Creation_illustration_Revised.svg"></img>
          )}
        </div>
      </div>
      <div className="right-side">
        <div className="right">
          <h4>PART I</h4>
          <h1>ILLUMINATION</h1>
          <p>
            First we seek enlightenment. We’ll uncover the opportunity for your
            brand, define your unique proposition, and divine ways for you to
            stand out amongst your competitors.
          </p>
        </div>
        <div className="right">
          <h4>PART II</h4>
          <h1>REVELATION</h1>
          <p>
            Now, the epiphany. A deceptively simple creative idea brought forth
            to guide your brand experience and set down the principles against
            which all shall be judged.
          </p>
        </div>
        <div className="right">
          <h4>PART III</h4>
          <h1>CREATION</h1>
          <p>
            The final act. Through intelligent design, we bring your brand to
            life wherever devotees gather.
          </p>
        </div>
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
