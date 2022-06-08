import React from "react";
import "./styles.css";
import NavBar from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Trigonometry from "./Trigonometry";
import Geometry from "./Geometry";
import About from "./AboutUs";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Trigonometry} />
        <Route path="/geometry" exact component={Geometry} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}
