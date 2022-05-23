import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="home">
        Home
      </NavLink>
      <NavLink to={"/favorites"} className="favorites">
        Favorited Movies
      </NavLink>
      <h1>Rancid Tomatillos</h1>
    </div>
  );
};

export default Navbar;
