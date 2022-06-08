import React from "react";
import "./Geometry.css";
import tryangle from "./Images/tryangle.png";
import pyramide from "./Images/pyramide.png";
import tetraedyr from "./Images/tetraedyr.png";
import pryzma from "./Images/pryzma.png";

function Geometry() {
  return (
    <>
      <div className="tablesContainer">
        <div className="tableOutline">
          <div className="title">Формулиз за лице на триъгълник</div>
          <img src={tryangle} alt="" className="image"></img>
        </div>
        <div className="tableOutline">
          <div className="title">Формулиз за лице на пирамида</div>
          <img src={pyramide} alt="" className="image"></img>
        </div>
        <div className="tableOutline">
          <div className="title">Произволен тетраедър</div>
          <img src={tetraedyr} alt="" className="image"></img>
        </div>
        <div className="tableOutline">
          <div className="title">Права призма</div>
          <img src={pryzma} alt="" className="image"></img>
        </div>
      </div>
    </>
  );
}
export default Geometry;
