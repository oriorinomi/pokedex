import PokemonCard from "./PokemonCard"

const PokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


function App () {
  return(
    <div> 
    <PokemonCard pokemon={PokemonList[1]}/>
    </div>
  )
}

export default App
