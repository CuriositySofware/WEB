import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { NoApplications } from "../../assets";
import Application from "../../components/Application";
import { search } from "../../services/search";

export default function Applications() {
 
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeApplication = (idx) => {
    const newArray = applications.filter((_, valueIdx) => idx !== valueIdx);
    setApplications(newArray);
  };

  useEffect(() => {
    search({ status: "Unverified" })
      .then((resp) => resp.json())
      .then((resp) => {
        setApplications(resp.result);
      })
      .catch((err) => {
        console.log(err());
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="applications">
      <h1>Solicitudes</h1>
      {loading ? (
        <div className="applications__loader">
          <Loader
            type="Circles"
            color="#233d4d"
            height={80}
            width={80}
            visible={true}
          />
        </div>
      ) : applications.length > 0 ? (
        <div className="applications__container">
          {applications.map((app, idx) => (
            <Application
              key={app.id.value}
              app={app}
              idx={idx}
              removeApplication={removeApplication}
            />
          ))}
        </div>
      ) : (
        <div className="applications__empty">
          <img src={NoApplications} alt="" />
          <p>No hay nuevas solicitudes</p>
        </div>
      )}
    </div>
  );
}
