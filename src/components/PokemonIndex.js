import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemonArray => {      
      this.setState({
      pokemons: pokemonArray
    })})
  }
  
  search = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  addPokeFromForm = (newPoke) => {
    this.setState(pre => {
      return {pokemons: [...pre.pokemons, newPoke]}
    })
  }

  sortByName = () => {
    const sortedPokemons = this.state.pokemons.sort((a,b) => a.name < b.name ? -1 : 1)
    this.setState({ pokemons: sortedPokemons })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokeFromForm={this.addPokeFromForm} />
        <br />
        <Search onChange={this.search} sortByName={this.sortByName}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons.filter(poke => poke.name.includes(this.state.searchTerm))} />
      </Container>
    )
  }
}

export default PokemonPage  
