import React from "react";
import "./LowerSection.css";
import play from "../../assets/playButton.svg";

const LowerSection = () => {
  return (
    <div className="LowerSection">
      <div className="top">
        <div className="button">
          <img src={play} />
        </div>
        <p>Watch Our Latest Video</p>
      </div>
      <div className="down">
        <div className="left">
          <div className="buttons">
            <button>Web Analytics</button>
            <button>Cold E-Mails</button>
            <button>SEO 2.0</button>
            <button>Case Study</button>
          </div>
        </div>
        <div className="right">
          <div className="container1">
            <div className="another">
              <p>INNOVATIVE SOLUTIONS FOR YOUR BUSINESS</p>
            </div>
          </div>
          <div className="container2">
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
            </div>
            <div className="case">
              <p>CASE STUDIES</p>
            </div>
          </div>
          <div className="container3">
            <div className="upar">
              <p>SUCCESSFUL PROJECTS</p>
            </div>
            <div className="neeche">
              <p>1000</p>
            </div>
            <div className="plus">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
