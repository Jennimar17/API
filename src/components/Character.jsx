import React, {Component} from "react";
import axios from "axios";
import { personaje } from "../data2";
//import SearchBar from './components/SearchBar.jsx';
//import estilos from "./card.module.css";
// id, name, status, species, type, gender, originLocation, originUrl, image, onClose
var index = document.getElementById("input").value;

class Container extends Component {
  componentDidMount(){
  axios.get("https://rickandmortyapi.com/api/character/"+ index )
  .then(result=>{
  console.log(result)
  var personaje = {result}
  console.log(personaje);
  }).catch(console.log)
  }
  
  render (){
  return(
  <div>
  <h1>Henry APP</h1>
  <h2> {personaje.name} </h2>
  <img src={personaje.image}></img>
  <input id="input" type="text" placeholder={'City...'}/>
  <button onClick ={() => }>Search</button>
  </div>
  );
  }

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
export default Container;