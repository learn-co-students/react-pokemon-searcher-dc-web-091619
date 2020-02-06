import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    searchTerm: ""
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  handleSearchChange = event => {
    this.setState({searchTerm: event.target.value}, () => this.filterPokemon())
  }

  fetchPokemon = () => {
    console.log("fetching")
    fetch("http://localhost:3000/pokemon")
      .then(response => response.json())
      .then(pokemonArray => this.setState({
        allPokemon: pokemonArray
      }))
  }

  addPokemon= data => {
    
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(pokemon => this.setState({
        allPokemon: [...this.state.allPokemon, pokemon]
      }))
  }

  

  filterPokemon = () => {
    const {allPokemon, searchTerm} = this.state
    if (searchTerm !== ""){
      return allPokemon.filter(pokemon => pokemon.name.indexOf(searchTerm) !== -1)
    }
    return this.state.allPokemon
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemonData={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
