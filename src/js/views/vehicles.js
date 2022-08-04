import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	
  const params = useParams ();

	return (
		<div className="planeta">
			<div className="titulo container"><h1>“Your focus determines your reality.”</h1></div> 
      <div className="secundario row d-flex justify-content-evenly row-cols-1 row-cols-md-3 g-4">
        {store.vehicles.map((e, i) => {
          return (
            <div className="card" style={{width:"18rem"}}>
              <img
                className="card-img-top img-fluid h-5 p-3"
                alt="Card image cap"
                src={"https://starwars-visualguide.com/assets/img/vehicles/"+ e.uid+ ".jpg"}
              />
              <div className="card-body d-flex justify-content-start align-items-end">
                <h5 className="card-title">{e.name}</h5>
                <Link to={"/vehicles/"+e.uid}><button className="button2">More</button></Link>
              </div>
            </div>
          );
        })}
      </div>
		</div>
	);
};
