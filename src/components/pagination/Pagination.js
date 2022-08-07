import React from "react";

import "./Pagination.css";

const Pagination = () => {
  return (
    <nav>
      <ul className="pagination pagination-md">
        <li className="page-item disabled">
          <a className="page-link" href="/">
            prev
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">1</span>
        </li>
        <li className="page-item">
          <a className="page-link" href="1">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
