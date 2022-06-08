import React from "react";
import { Nav } from "./NavElements";
import "./Header.css";

function Header() {
  return (
    <>
      <Nav>
        <div className="navBarBox">
          <a href="/" className="navBarButton">
            Тригонометрия
          </a>
        </div>
        <div className="navBarBox">
          <a href="/geometry" className="navBarButton">
            Геометрия
          </a>
        </div>
        <div className="navBarBox">
          <a href="/about" className="navBarButton">
            За нас
          </a>
        </div>
      </Nav>
    </>
  );
}
export default Header;
