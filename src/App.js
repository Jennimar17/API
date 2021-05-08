import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import { personaje } from './data2.js';

import Character from './components/Character';
//import Character from './src/components/character.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <Character
          name = {personaje.name}
          
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
