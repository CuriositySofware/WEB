import { range } from "lodash";
import React from "react";
import PropTypes from "prop-types";

export default function Pagination({
  numberOfPages,
  activePage,
  setactivePage,
}) {
  let ceilingPage;
  let floorPage;
  if (activePage <= 3 && numberOfPages >= 7) {
    ceilingPage = 7 + activePage - 1;
    floorPage = activePage;
  } else if (
    activePage > 3 &&
    activePage + 3 < numberOfPages &&
    numberOfPages >= 7
  ) {
    ceilingPage = activePage + 3;
    floorPage = activePage - 3;
  } else if (activePage + 3 >= numberOfPages && numberOfPages >= 7) {
    ceilingPage = numberOfPages;
    floorPage = numberOfPages - 7 + 1;
  } else if (numberOfPages < 7) {
    ceilingPage = numberOfPages;
    floorPage = 1;
  } else {
    ceilingPage = activePage + 3;
    floorPage = activePage - 3;
  }

  return (
    <ul className="pagination pagination-lg justify-content-center">
      <li className="page-item">
        <span className="page-link" onClick={() => setactivePage(1)}>
          First
        </span>
      </li>
      {range(floorPage, ceilingPage + 1, 1).map((number) => (
        <li className="page-item" key={number}>
          <span
            className={`page-link number ${
              activePage === number ? "actual" : ""
            }`}
            onClick={() => setactivePage(number)}
          >
            {number}
          </span>
        </li>
      ))}
      <li className="page-item">
        <span
          className="page-link"
          onClick={() =>
            activePage < numberOfPages && setactivePage(numberOfPages)
          }
        >
          Last
        </span>
      </li>
    </ul>
  );
}

Pagination.propTypes = {
  numberOfPages: PropTypes.number,
  activePage: PropTypes.number,
  setactivePage: PropTypes.func,
};
