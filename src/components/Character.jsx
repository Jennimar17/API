import React from "react";
//import estilos from "./card.module.css";
// id, name, status, species, type, gender, originLocation, originUrl, image, onClose
export default function Character({ name }) {

  return (
    <div>
        <h1>ASJDKASHD</h1>
        <h1> {name} </h1>
    </div>
  );
}

/*<div className={estilos.carta}>
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
</div> */