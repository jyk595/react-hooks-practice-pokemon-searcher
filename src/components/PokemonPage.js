import { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    frontUrl: "",
    backUrl: "",
    name: "",
    hp: "", 
  })
  
  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(res=>res.json())
    .then(data=>{setPokemonData(data)})
  },[]);

  function formSubmit(event) {
    event.preventDefault();

    const newFormData = {
      key: pokemonData.length+2,
      sprites: {
        frontUrl: event.target.frontUrl.value,
        backUrl: event.target.backUrl.value,
      },
      name: event.target.name.value,
      hp: event.target.hp.value, 
    };
    console.log(newFormData)
    console.log(pokemonData)

    const combinedDataArray = [...pokemonData, newFormData]
    setPokemonData(combinedDataArray);

    setFormData({
      frontUrl: "",
      backUrl: "",
      name: "",
      hp: "", 
    })
  } 

  function formChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        formSubmit={formSubmit}
        formChange={formChange} 
      />
      <br />
      <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <br />
      <PokemonCollection 
        pokemonData={pokemonData} 
        searchValue={searchValue}
      />
    </Container>
  );
}

export default PokemonPage;
