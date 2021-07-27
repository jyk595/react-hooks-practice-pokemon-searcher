import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData, searchValue}) {

  const searchFilter = pokemonData.filter(individualData=>{
    if (searchValue === "") {
      return true;
    } else if (searchValue.toLowerCase().includes(searchValue.toLowerCase()) === individualData.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    } else {
      return false
    }
  });

  const mappedPokemon = searchFilter.map(individualData=>{
    return <PokemonCard individualData={individualData} />
  });

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
