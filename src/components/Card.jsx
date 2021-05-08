import React from "react";
import estilos from "./card.module.css";
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
export default function Card({ name, min, max, img, onClose }) {


switch(img){
  case "09d":
    var imagen= <Sunny/>
    break;
  case "03n":
    var imagen= <Rain/>
    break;
  case "01d":
    var imagen= <Snow/>
    break;
}


  return (
    <div className={estilos.carta}>
      <div className={estilos.top}>
        <h3 className={estilos.name}>{name}</h3>
        <button className={estilos.btn} onClick={onClose}>
          <span>x</span>
        </button>
      </div>
      <div className={estilos.informacion}>
        <div className={estilos.contenedor}>
          <div className={estilos.datos}>
            <h5>Max:</h5>
            <h5>{max}°</h5>
          </div>
          <div className={estilos.datos}>
            <h5>Min:</h5>
            <h5>{min}°</h5>
          </div>
        </div>
        <div>
          {imagen}
        </div>
      </div>
    </div>
  );
}