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
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <Link
            className="page-link"
            to={`?_skip=${(currentPage - 2) * 5}`}
            onClick={() => dispatch(setCurentPage(currentPage - 1))}
          >
            prev
          </Link>
        </li>

        {[...Array(Math.ceil(totalCount / 5))].map((el, i) => (
          <li
            className={currentPage === i + 1 ? "page-item active" : "page-item"}
            aria-current="page"
            key={i}
            onClick={() => dispatch(setCurentPage(i + 1))}
          >
            <Link to={`?_skip=${i * 5}`} className="page-link ">
              {i + 1}
            </Link>
          </li>
        ))}

        <li className={currentPage >= totalCount / 5 ? "page-item disabled" : "page-item"}>
          <Link
            className="page-link"
            to={`?_skip=${currentPage * 5}`}
            onClick={() => dispatch(setCurentPage(currentPage + 1))}
          >
            next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
