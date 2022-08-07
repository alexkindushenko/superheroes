import React from "react";
import { Link } from "react-router-dom";

import "./SuperheroItem.css";

const SuperheroItem = ({ nickname, _id }) => {
  return (
    <div className="superhero-item">
      <Link to={`${_id}`}>
        <h2>{nickname}</h2>
      </Link>
      <img src="https://www.elcbrands.com/media/superman1.1.jpg" alt={nickname} />
    </div>
  );
};

export default SuperheroItem;
