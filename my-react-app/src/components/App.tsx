import { useState } from "react";
import PokemonCard from "./PokemonCard"

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

  const handlePrecedentClick = () => {
    setPokemonIndex (pokemonIndex > 0 ? pokemonIndex - 1 : PokemonList.length - 1);
  }
  
  const handleSuivantClick = () => {
    setPokemonIndex ((pokemonIndex + 1) % PokemonList.length);
  }

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return(
    <>
    <div> 
    <PokemonCard name={PokemonList[pokemonIndex].name} imgSrc={PokemonList[pokemonIndex].imgSrc}/>
    </div>

    <button onClick={handlePrecedentClick}>Précédent</button>
    <button onClick={handleSuivantClick}>Suivant</button>

    </>
  )
}

export default App
