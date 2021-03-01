import { range } from "lodash";
import React, { useState } from "react";

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
        >
          {number}
        </span>
      ))}
      {/* <span className="number">1</span>
      <span className="number actual">2</span> */}
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
