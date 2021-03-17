import { chunk } from "lodash";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination";
import { search } from "../../services/search";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { main, noResults } from "../../assets";
export default function Home() {
  const [pages, setpages] = useState([]);
  const [fields, setfields] = useState({
    title: "",
    author: "",
    period: "",
    material: "",
    place: "",
  });
  const [activePage, setactivePage] = useState(1);
  const [loading, setloading] = useState(false);
  const [pristine, setpristine] = useState(true);
  const [empty, setempty] = useState(false);

  const allFieldsAreEmpty = () => {
    return Object.values(fields).every((value) => !value);
  };

  const submit = async () => {
    if (!allFieldsAreEmpty()) {
      setpristine(false);
      setloading(true);
      try {
        const response = await search(fields);
        const jsonResponse = await response.json();
        console.log(chunk(jsonResponse.result, 8));
        setpages(chunk(jsonResponse.result, 8));
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    } else {
      setempty(true);
    }
  };

  useEffect(() => {
    setempty(false);
  }, [fields]);

  return (
    <>
      <div className="home-container">
        <div className="row">
          <div className="row-item">
            <Input
              label="Autor"
              setfields={setfields}
              fields={fields}
              name="author"
              empty={empty}
            />
          </div>
          <div className="row-item">
            <Input
              label="Material"
              setfields={setfields}
              fields={fields}
              name="material"
              empty={empty}
            />
          </div>
          <div className="row-item">
            <Input
              label="Lugar"
              setfields={setfields}
              fields={fields}
              name="place"
              empty={empty}
            />
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <Input
              label="Periodo"
              setfields={setfields}
              fields={fields}
              name="period"
              empty={empty}
            />
          </div>
          <div className="row-item">
            <Input
              label="Titulo"
              setfields={setfields}
              fields={fields}
              name="title"
              empty={empty}
            />
          </div>
          <div className="control">
            <button
              onClick={() => submit()}
              disabled={loading}
              className={loading ? "disabled" : ""}
            >
              Buscar
            </button>
          </div>
        </div>
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
        {loading && (
          <div className="loader-container">
            <Loader
              type="Circles"
              color="#313B72"
              height={100}
              width={100}
              visible={true}
            />
          </div>
        )}
        <div className="cards-container">
          {/* {chunk(pages[activePage - 1], 4).map((row, idx) => (
            <div className="cards-row" key={idx}>
              {row.map((card) => (
                <Card infoCard={card} />
              ))}
            </div>
          ))} */}
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
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
