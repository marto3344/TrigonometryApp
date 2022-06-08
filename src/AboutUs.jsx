import React from "react";
import "./AboutUs.css";
import reactIcon from "./Images/react.png";
import logo from "./Images/logo.png";

function AboutUs() {
  return (
    <>
      <div className="container">
        <div>
          <div className="nameBox">
            <h2>Проектът е изработен от</h2>
            <h4>Мартин Стоянов</h4>
            <h5>email: martinstoyanov_b18@schoolmath.eu</h5>
          </div>
          <div className="nameBox">
            <h4>Христо Исов</h4>
            <h5>email: christoisov_b18@schoolmath.eu</h5>
          </div>
        </div>
        <div className="technologyContainer">
          <h2>Използвани технологии</h2>
          <img src={reactIcon} alt="" id="reactLogo" />
          <img src={logo} alt="" id="htmlLogo" />
        </div>
      </div>
    </>
  );
}
export default AboutUs;
