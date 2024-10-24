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
    <PokemonCard name={PokemonList[1].name} imgSrc={PokemonList[1].imgSrc}/>
    </div>
  )
}

export default App
