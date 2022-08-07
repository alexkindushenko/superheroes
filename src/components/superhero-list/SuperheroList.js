import React from "react";

import SuperheroItem from "../superhero-item";

import "./SuperheroList.css";

const SuperheroList = () => {
  return (
    <div className="superhero-list">
      <SuperheroItem />
      <SuperheroItem />
      <SuperheroItem />
      <SuperheroItem />
      <SuperheroItem />
    </div>
  );
};

export default SuperheroList;
