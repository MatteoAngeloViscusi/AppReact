import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import logo from "./logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <div className="leftside">
          <img src={logo} height="40px" width="40px" />
          <Link to="/">Home</Link>
          <Link to="/contact">Contatti</Link>
        </div>
        <div className="rightside">
          <div className="link-container">
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
