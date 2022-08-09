import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCurentPage } from "../../features/superheroes/superheroesSlice";

import "./AppHeader.css";

const AppHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="app-header">
      <div onClick={() => dispatch(setCurentPage(1))} className="logo">
        <NavLink to="superheroes">Superheroes</NavLink>
      </div>

      <nav className="menu">
        <ul>
          <li onClick={() => dispatch(setCurentPage(1))}>
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
