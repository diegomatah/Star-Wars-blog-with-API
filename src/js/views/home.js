import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import r2d from "../../img/r2d.png";
import c3po from "../../img/c3po.png";
import leia from "../../img/leia.png";
import lukesky from "../../img/lukesky.png";
import darthvader from "../../img/darthvader.png";
import r5d4 from "../../img/r5d4.png";
import owen from "../../img/owen.png";
import beru from "../../img/beru.png";
import obiwan from "../../img/obiwan.png";
import biggs from "../../img/biggs.png";
import yoda from "../../img/yodaicon.png";
import { Context } from "../store/appContext";

export const Home = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  //let fotos = [lukesky,c3po,r2d,darthvader,leia,owen,beru,r5d4,biggs,obiwan]; OTRA FORMA DE INSERTAR FOTOS DEL ARCHIVO IMG

  return (
    <div className="principal">
      <div className="titulo container">
        <h1>"May the force be with you"</h1>
      </div>
      <div className="secundario row d-flex justify-content-evenly row-cols-1 row-cols-md-3 g-4">
        {store.people.map((e, i) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top img-fluid h-5 p-3"
                alt="Card image cap"
                src={
                  "https://starwars-visualguide.com/assets/img/characters/" +
                  e.uid +
                  ".jpg"
                }
              />
              <div className="card-body d-flex justify-content-around align-items-end">
                <h5 className="card-title">{e.name}</h5>
                <Link to={"/personajes/" + e.uid}>
                  <button className="button2">More</button>
                </Link>
                <button
                  className="button2"
                  onClick={() => {
                    actions.addFav(e.name);
                  }}
                >
                  🤍
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
