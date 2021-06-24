import Carousel from "../../components/Carousel";
import Filter from "../../components/Filter";

export default function Home() {
  return (
    <>
      <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-pause="false">
        <Carousel />
        <Filter />
        <Overlay />
      </div>
    </>
  );
}

function Overlay() {
  return (
      <div className="overlay align-items-center">
          <div className="overlay-text text-end">
              <h1>CURIOCITY</h1>
              <p className="d-none d-md-block">Llevando la historia y la cultura peruana a tu hogar</p>
          </div>
      </div>
  )
}