import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokemon={this.props.pokemon} addPokeMon={this.props.addPokeMon} />
        <br />
        <Search onChange={() => console.log('🤔')} pokemon={this.props.pokemon} filterPokeMon={this.props.filterPokeMon}  />
        <br />
        <PokemonCollection pokemon={this.props.pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
