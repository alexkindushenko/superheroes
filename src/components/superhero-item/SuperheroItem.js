import React from "react";
import { Link } from "react-router-dom";

import "./SuperheroItem.css";

const SuperheroItem = ({ nickname, _id, images }) => {
  return (
    <div className="superhero-item">
      <Link to={`${_id}`}>
        <h2>{nickname}</h2>
      </Link>
      <img src={images[0]} alt={nickname} />
    </div>
  );
};

export default SuperheroItem;
