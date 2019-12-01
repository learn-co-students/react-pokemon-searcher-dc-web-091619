import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    constructor(){
        super();

        this.state = {
            allPokemon: [],
            search: ''
        }
    }

    addNewPokemon = (newPokemon) => {
        this.setState(previousState => {
            return {allPokemon: [...previousState.allPokemon, newPokemon]}
        })
    }


    componentDidMount() {
        fetch('http://localhost:3000/pokemon')
            .then(response => response.json())
            .then(pokemonArray => this.setState(
                {allPokemon: pokemonArray}
            ))
    }

    searchPokemon = (event) => {
        this.setState({
            search: event.target.value
        })
    };


    render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        {/*{<PokemonForm allPokemon={this.state.allPokemon}/>}*/}
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search searchPokemon={this.searchPokemon} search={this.state.search} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon.filter(pokemon =>
        pokemon.name.includes(this.state.search)) }/>
      </Container>
    )
  }
}

export default PokemonPage
