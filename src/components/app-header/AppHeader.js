import React from "react";
import { NavLink } from "react-router-dom";

import "./AppHeader.css";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="logo">Superheros</div>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="superheros">Superheros</NavLink>
          </li>
          <li>
            <NavLink to="add_superhero">Add superhero</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;
