import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generateCards = () => this.props.pokemon.map(pokemon => <PokemonCard pokemon={pokemon}/>)
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.generateCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
