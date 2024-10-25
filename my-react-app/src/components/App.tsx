import { useState } from "react";
import PokemonCard from "./PokemonCard"
import NavBar from "./NavBar";

const PokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App () {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return(

    <div> 
    <PokemonCard name={PokemonList[pokemonIndex].name} imgSrc={PokemonList[pokemonIndex].imgSrc}/>
    <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} 
    PokemonList={PokemonList} />
    </div>
   
  )
}

export default App
