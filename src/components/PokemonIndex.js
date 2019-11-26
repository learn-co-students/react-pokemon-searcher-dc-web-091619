import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({pokemon: pokemon})
    })
  }

  onChangeHandler = (event) => {
    this.setState(
      {search: event.target.value}
    )
    let filteredPokemon = this.state.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.state.search)
    })
    this.setState(
      {pokemon: filteredPokemon}
    )
  }

  addPokemon = (newpokemon) => {
    let stateCopy = [...this.state]
    this.setState({
      pokemon: [...stateCopy, newpokemon]
    })
  }

  

 


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={(event) => this.onChangeHandler(event)} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
