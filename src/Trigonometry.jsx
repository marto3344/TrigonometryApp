import React from "react";
import "./Trigonometry.css";
import osnIdentichnosti from "./Images/OsnovniIdentichnosti.png";
import dvuagalni from "./Images/Dvuagalni.png";
import triagalni from "./Images/Triagalni.png";
import stepen1 from "./Images/Stepen1.png";
import stepen2 from "./Images/Stepen2.png";
import stepen3 from "./Images/Stepen3.png";
//import { useEffect, useRef, useState } from "react";
import trigonometryValues from "./Images/TrigTable.png";
import devidedargument from "./Images/devidedargument.png";
import multiplied from "./Images/multiplied.png";

function Trigonometry() {
  return (
    <>
      <TrigonometryCalculator />
      <Tables />
      <TrigonometryValues />
    </>
  );
}
function Tables() {
  return (
    <>
      <div className="tablesContainer">
        <div className="tableOutline">
          <div className="title">Основни Идентичности</div>
          <img src={osnIdentichnosti} alt="" className="image"></img>
        </div>
        <div className="tableOutline">
          <div className="title">Двуъгълни формули</div>
          <img src={dvuagalni} alt="" className="image"></img>
        </div>
        <div className="tableOutline">
          <div className="title"> Триъгълни формули</div>
          <img src={triagalni} alt="" className="image" />
        </div>
        <div className="tableOutline">
          <div className="title">Формули за понижаване на степента</div>
          <img src={stepen1} alt="" className="image" />
        </div>
        <div className="tableOutline">
          <div className="title">Формули за понижаване на степента</div>
          <img src={stepen2} alt="" className="image" />
        </div>
        <div className="tableOutline">
          <div className="title">Формули за понижаване на степента </div>
          <img src={stepen3} alt="" className="image" />
        </div>
        <div className="tableOutline">
          <div className="title">Формули с половин аргумент </div>
          <img src={devidedargument} alt="" className="image" />
        </div>
        <div className="tableOutline">
          <div className="title">
            Формули за намаляване на степента на половината аргумент{" "}
          </div>
          <img src={multiplied} alt="" className="image" />
        </div>
      </div>
    </>
  );
}
function TrigonometryCalculator() {
  //const [viewResult, setViewResult] = useState(false);
  function inputChanged(event) {
    var input2 = document.getElementById("num");
    const number = input2?.value || "";
    console.log(number);
    console.log(5);
    document.getElementById("sin").innerHTML =
      "sin(" + number + "&deg;) &asymp; " + round(sin(number));
    document.getElementById("cos").innerHTML =
      "cos(" + number + "&deg;) &asymp; " + round(cos(number));
    document.getElementById("tan").innerHTML =
      "tan(" + number + "&deg;) &asymp; " + tan(number);
    document.getElementById("cot").innerHTML =
      "cot(" + number + "&deg;) &asymp; " + cot(number);
  }
  function sin(x) {
    x = ((x % 360) * Math.PI) / 180;

    var sin = 0,
      plus = true;

    for (var y = 1; y <= 99; y += 2) {
      if (plus) {
        sin += Math.pow(x, y) / factorial(y);
      } else {
        sin -= Math.pow(x, y) / factorial(y);
      }

      plus = !plus;
    }

    return sin;
  }

  function cos(x) {
    return sin(90 - x);
  }

  function tan(x) {
    return round(sin(x) / cos(x));
  }
  function cot(x) {
    return round(cos(x) / sin(x));
  }

  function factorial(x) {
    for (var y = x - 1; y > 0; y--) {
      x *= y;
    }

    return x;
  }
  function round(x) {
    var precision = Math.pow(10, 14);
    return Math.round(x * precision) / precision;
  }

  return (
    <>
      <div className="calculatorOutline">
        <div classname="labelForm">
          <h2 className="text">Въведете градусна мярка:</h2>
          <input type="number" id="num" onChange={inputChanged} />
        </div>
        <h2 id="sin">{}</h2>
        <h2 id="cos">{}</h2>
        <h2 id="tan">{}</h2>
        <h2 id="cot">{}</h2>
      </div>
    </>
  );
}
function TrigonometryValues() {
  return (
    <>
      <div className="valuesOutline">
        <div className="tableTitle">
          Стойности на тригонометричните функции{" "}
        </div>
        <img src={trigonometryValues} alt="" className="image" />
      </div>
    </>
  );
}
export default Trigonometry;
