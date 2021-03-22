import { range } from "lodash";
import React from "react";
import PropTypes from "prop-types";

export default function Pagination({
  numberOfPages,
  activePage,
  setactivePage,
}) {
  return (
    <div className="pagination-container">
      <span
        className="arrow"
        onClick={() => activePage > 1 && setactivePage(activePage - 1)}
      >
        {"<"}
      </span>
      {range(1, numberOfPages + 1, 1).map((number) => (
        <span
          className={`number ${activePage === number ? "actual" : ""}`}
          onClick={() => setactivePage(number)}
          key={number}
        >
          {number}
        </span>
      ))}
      <span
        className="arrow"
        onClick={() =>
          activePage < numberOfPages && setactivePage(activePage + 1)
        }
      >
        {">"}
      </span>
    </div>
  );
}

Pagination.propTypes = {
  numberOfPages: PropTypes.number,
  activePage: PropTypes.number,
  setactivePage: PropTypes.func,
};
