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
  return (
    <div className="info">
      <h1>Character details: {params.idpersonaje} </h1>
      <ul>
        <li>Name:</li>
        <li>Description:</li>
        <li>Gender:</li>
        <li>Birth year:</li>
        <li>Height:</li>
        <li>Mass:</li>
        <li>Hair color:</li>
        <li>Eyes color:</li>
        <li>Skin color:</li>
      </ul>
    </div>
  );
};
