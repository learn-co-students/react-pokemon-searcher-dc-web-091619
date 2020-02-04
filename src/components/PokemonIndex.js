import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemonData: []
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch("http://localhost:3000/pokemon")
      .then(response => response.json())
      .then(pokemonArray => this.setState({
        pokemonData: pokemonArray
      }))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection pokemon={this.state.pokemonData}/>
      </Container>
    )
  }
}

export default PokemonPage
