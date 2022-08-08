import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurentPage } from "../../features/superheroes/superheroesSlice";

import "./Pagination.css";

const Pagination = () => {
  const { currentPage, totalCount } = useSelector((state) => state.superheroes);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <nav>
      <ul className="pagination pagination-md">
        {[...Array(Math.ceil(totalCount / 5))].map((el, i) => (
          <li
            className={currentPage === i + 1 ? "page-item active" : "page-item"}
            aria-current="page"
            key={i}
            onClick={() => dispatch(setCurentPage(i + 1))}
          >
            <Link to={"?_skip=6"} className="page-link ">
              {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
