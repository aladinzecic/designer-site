import React from "react";
import "./Main.css";
import image from "../../assets/img1.png";
export default function MainPage() {
  return (
    <div className="hero-div">
      <div className="navbar">
        <h2>MENU</h2>
          <img
            src="https://images.squarespace-cdn.com/content/v1/53ed27dae4b08ff9931317ea/825c7caf-d0af-418f-8004-10a17379d27d/Brobel_long_blue.png"
            alt="img"
          ></img>
        <h2>CONTACT</h2>
      </div>
      <div className="handwriting">
        <img src={image} alt="img"></img>
      </div>
      <div className="lines lineOne">
        <h1>THE POWER</h1>
      </div>
      <div className="liness">
        <p>OF ART</p>
      </div>
      <div className="lines">
        <h1>THE BEAUTY</h1>
      </div>
      <div className="liness">
        <p>OF IDEAS</p>
      </div>
    </div>
  );
}
