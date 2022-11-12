import React, { useContext } from "react";
import { Link } from "react-router-dom";
import darth from "../../img/darth.png";
import starwarslogo from "../../img/starwarslogo.png";
import casco from "../../img/casco.png";
import planeta from "../../img/planeta.png";
import nave from "../../img/nave.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const deleteTask = (key) => {
    actions.removeFavorite(key);
}
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-brand">
          <img src={darth} />
        </span>
      </Link>
      <img className="logo" src={starwarslogo} />
      <Link to="/">
        <img className="casco" src={casco} />
        <button className="button1">Characters</button>
      </Link>
      <Link to="/demo">
        <img className="planeta" src={planeta} />
        <button className="button1">Planets</button>
      </Link>
      <Link to="/vehicles">
        <img className="nave" src={nave} />
        <button className="button1">Vehicles</button>
      </Link>
      <div className="dropdown">
        <button
          type="button"
          className="button1 dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul class="dropdown-menu">
          {store.fav?.map((e,i)=>{
            return <li className="dropdown-item d-flex justify-content-between" > {e.name} <button onClick={() => {
              deleteTask(i);
          }}>X</button></li>
          })}
        </ul>
      </div>
    </nav>
  );
};
