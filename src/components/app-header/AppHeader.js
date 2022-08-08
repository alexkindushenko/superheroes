import React from "react";
import { NavLink } from "react-router-dom";

import "./AppHeader.css";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="logo">
        <NavLink to="superheroes">Superheroes</NavLink>
      </div>

      <nav className="menu">
        <ul>
          <li>
            <NavLink to="superheroes">Superheroes</NavLink>
          </li>
          <li>
            <NavLink to="/superheroes/add_superhero">Add superhero</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;
