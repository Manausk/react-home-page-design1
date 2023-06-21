import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow2.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="left">
        <div className="one">
          <p>Transforming Ideas Into Successful Ventures</p>
          <div className="people">
            <div className="circle circleone">
              {/* <div className="img1">
                <img src={model1} />
              </div> */}
            </div>
            <div className="circle circletwo"></div>
            <div className="circle circlethree"></div>
          </div>
        </div>
        <div className="two">
          <hr />
          <div className="twoLines">
            <p>Our Solutions</p>
            <p>Join our Leadership Program</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="Demo">
          <p>Book Demo Call</p>
          <div className="button">
            <img src={arrow} />
          </div>
        </div>
        <div className="dots2">
          <div className="dotOne"></div>
          <div className="dotTwo"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
