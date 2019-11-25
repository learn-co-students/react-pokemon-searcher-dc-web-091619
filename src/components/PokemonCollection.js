import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displayPokemon(){
    let newArr = this.props.allPokemon.filter(pokemon=> pokemon.name.includes(this.props.filter))
    return newArr
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayPokemon().map(pokemon=> {
          return <PokemonCard pokemonInfo={pokemon} key={pokemon.id}/>
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
