interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    PokemonList: {name: string; img?: string} [] ;
   }


function NavBar ({ pokemonIndex, setPokemonIndex, PokemonList}: NavBarProps) {

    const handlePrecedentClick = () => {
        setPokemonIndex (pokemonIndex > 0 ? pokemonIndex - 1 : PokemonList.length - 1);
      }
      
    const handleSuivantClick = () => {
        setPokemonIndex ((pokemonIndex + 1) % PokemonList.length);
      }

    return(

        <>
         <button onClick={handlePrecedentClick}>Précédent</button>
         <button onClick={handleSuivantClick}>Suivant</button>
        </>

    )
}

export default NavBar