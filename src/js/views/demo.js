import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	
  const params = useParams ();

	return (
		<div className="planeta">
			<div className="titulo container"><h1>"Try not. Do or do not. There is no try"</h1></div> 
      <div className="secundario row row-cols-1 row-cols-md-3 g-4">
        {store.planets.map((e, i) => {
          return (
            <div className="card" style={{width:"18rem"}}>
              <img
                className="card-img-top img-fluid h-5 p-3"
                alt="Card image cap"
                src={"https://starwars-visualguide.com/assets/img/planets/"+ e.uid+ ".jpg"}
              />
              <div className="card-body d-flex justify-content-around align-items-end">
                <h5 className="card-title">{e.name}</h5>
                <Link to={"/demo/"+e.uid}><button className="button2">More</button></Link>
                <button className="button2" onClick={()=>{
                  actions.addFav(e.name)
                }}>🤍</button>
              </div>
            </div>
          );
        })}
      </div>
		</div>
	);
};
