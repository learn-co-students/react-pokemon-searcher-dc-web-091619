import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from '../components/PokemonForm'
import Search from '../components/Search'
import { Container } from 'semantic-ui-react'

let url = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor(){
    super()

    this.state = {
      allPokemon: [],
      searchText: ""
    }
  }

  componentDidMount(){
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allPokemon: data
      })
    })
  }

  changeSearchText = (event) =>{
    let newSearch = event.target.value
    
    this.setState({
      searchText: newSearch
    })
  }

  addNewPokemon = (newPokemon) => {
    console.log('attempting to add another pokemon')

    fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: newPokemon.name, 
        stats: [
          {value: newPokemon.hp, name: "hp"}
        ],
        sprites: {front: newPokemon.frontUrl, back: newPokemon.backUrl}
      })
    })
    .then(res => res.json())
    .then(newPokemon => {
      console.log(newPokemon)
      this.setState({
        allPokemon: [...this.state.allPokemon, newPokemon]
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={this.changeSearchText} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchText))}/>
      </Container>
    )
  }
}

export default PokemonPage
