import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurentPage } from "../../features/superheroes/superheroesSlice";

import "./Pagination.css";

const Pagination = () => {
  const { currentPage, pageCount } = useSelector((state) => state.superheroes);
  const dispatch = useDispatch();

  // useEffect(() => {}, [currentPage]);

  console.log(currentPage);

  return (
    <nav>
      <ul className="pagination pagination-md">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <Link
            className="page-link"
            to={`?_page=${currentPage - 1}`}
            onClick={() => dispatch(setCurentPage(currentPage - 1))}
          >
            prev
          </Link>
        </li>

        {[...Array(pageCount)].map((el, i) => (
          <li
            className={currentPage === i + 1 ? "page-item active" : "page-item"}
            aria-current="page"
            key={i}
            onClick={() => dispatch(setCurentPage(i + 1))}
          >
            <Link to={`?_page=${i + 1}`} className="page-link ">
              {i + 1}
            </Link>
          </li>
        ))}

        <li className={currentPage >= pageCount ? "page-item disabled" : "page-item"}>
          <Link
            className="page-link"
            to={`?_page=${currentPage + 1}`}
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
