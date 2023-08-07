import React, { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  // Get results about Pokemon
  const [pokemons, setPokemons] = useState([]);
  const sourceImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${word}.png`;

  const FetchPokemonHandler = (e) => {
    e.preventDefault();
    // Fetch data from API
    fetch(`https://pokeapi.co/api/v2/pokemon/${word}`)
      .then((response) => response.json())
      .then(setPokemons);
  };

  return (
    <div className="App">
      {/* User Input */}
      <form onSubmit={FetchPokemonHandler}>
        <label htmlFor="word-input">Pick your POKEMON: </label>
        {/* Keep track of userinput using useState */}
        <input
          value={word}
          id="word-input"
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
      <div>
        <li>ID: {pokemons.id}</li>
        <li>Name: {pokemons.name}</li>
        <li>Weight: {pokemons.weight}g</li>
        {/* <li>Test: {pokemons.map(image => <p>image.sprites</p>)}</li> */}
        <li>
          <img src={sourceImage} />
        </li>
      </div>
    </div>
  );
}

export default App;
