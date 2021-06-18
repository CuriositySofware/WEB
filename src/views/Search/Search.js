import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { chunk } from "lodash";
import Loader from "react-loader-spinner";
import { search } from "../../services/search";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { main, noResults } from "../../assets";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Filter from "../../components/Filter";

export default function Search() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const [pages, setpages] = useState([]);
  const [params, setparams] = useState({
    title: query.get("title"),
    author: query.get("author"),
    period: query.get("period"),
    material: query.get("material"),
    place: query.get("place"),
    page: query.get("page"),
  });
  const [activePage, setactivePage] = useState(1);
  const [loading, setloading] = useState(false);
  const [pristine, setpristine] = useState(true);

  const fetchData = async () => {
    setpristine(false);
    setloading(true);
    try {
      const response = await search(params);
      const jsonResponse = await response.json();
      setpages(chunk(jsonResponse.result, 8));
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="home-container">
        <Filter />

        {pristine && (
          <div className="image-container">
            <img src={main} alt="" className="pristine" />
          </div>
        )}
        {!pristine && pages.length === 0 && !loading && (
          <div className="image-container">
            <span>No hay resultados</span>
            <img src={noResults} alt="" className="noResult" />
          </div>
        )}
        {loading ? (
          <div className="loader-container" style={{marginTop: "20vh"}}>
            <Loader
              type="Circles"
              color="#795933"
              height={80}
              width={80}
              visible={true}
            />
          </div>
        ) : (
          <div className="masonry-container">
            {chunk(pages[activePage - 1], 4).map((row, idx) => (
              <div className="masonry" key={idx}>
                {row.map((card) => (
                  <Card infoCard={card} key={card.id.value} />
                ))}
                {row.map((card) => (
                  <Modal infoCard={card} key={card.id.value} />
                ))}
              </div>
            ))}
          </div>
        )}
        {pages.length > 0 && !loading && (
          <Pagination
            numberOfPages={pages.length}
            activePage={activePage}
            setactivePage={setactivePage}
          />
        )}
      </div>
    </>
  );
}
