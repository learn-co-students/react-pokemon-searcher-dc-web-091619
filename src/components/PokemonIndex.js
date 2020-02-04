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
    fetch("http://localhost:3000/pokemon")
      .then(response => response.json())
      .then(pokemonArray => this.setState({
        allPokemon: pokemonArray
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
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemonData={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
