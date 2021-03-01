import { chunk, range } from "lodash";
import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import { search } from "../../services/search";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
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

  const submit = async () => {
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
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="row">
          <Input
            label="Autor"
            setfields={setfields}
            fields={fields}
            name="author"
          />
          <Input
            label="Material"
            setfields={setfields}
            fields={fields}
            name="material"
          />
          <Input
            label="Lugar"
            setfields={setfields}
            fields={fields}
            name="place"
          />
        </div>
        <div className="row">
          <Input
            label="Periodo"
            setfields={setfields}
            fields={fields}
            name="period"
          />
          <Input
            label="Titulo"
            setfields={setfields}
            fields={fields}
            name="title"
          />
          <div className="control">
            <button onClick={() => submit()}>
              {loading ? (
                <Loader
                  type="Circles"
                  color="#ffff"
                  height={20}
                  width={20}
                  visible={true}
                />
              ) : (
                "Buscar"
              )}
            </button>
          </div>
        </div>
        <div className="cards-container">
          {chunk(pages[activePage - 1], 4).map((row) => (
            <div className="cards-row">
              {row.map((card) => (
                <Card infoCard={card} />
              ))}
            </div>
          ))}
        </div>
        <Pagination
          numberOfPages={pages.length}
          activePage={activePage}
          setactivePage={setactivePage}
        />
      </div>
      <Footer />;
    </>
  );
}
