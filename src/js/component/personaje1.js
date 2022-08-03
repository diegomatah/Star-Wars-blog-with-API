import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const Personaje1 = () => {
    const params = useParams()
    const [datos,setDatos] = useState ({})

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://www.swapi.tech/api/people/"+ params.idpersonaje, requestOptions)
            .then(response => response.json())
            .then(result =>setDatos(result))
            .catch(error => console.log('error', error));
    },[])
    console.log(datos);
  return (
    <div className="info">
      <h1>Character details: {params.idpersonaje} </h1>
      <ul>
        <li>Name: {datos.result?.properties.name}</li>
        <li>Description: {datos.result?.description}</li>
        <li>Gender: {datos.result?.properties.gender}</li>
        <li>Birth year: {datos.result?.properties.birth_year}</li>
        <li>Height: {datos.result?.properties.height}</li>
        <li>Mass: {datos.result?.properties.mass}</li>
        <li>Hair color: {datos.result?.properties.hair_color}</li>
        <li>Eyes color: {datos.result?.properties.eye_color}</li>
        <li>Skin color: {datos.result?.properties.skin_color}</li>
      </ul>
    </div>
  );
};
