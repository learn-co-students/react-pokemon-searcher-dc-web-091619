import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(response => this.setState({pokemon: response}))
  }

  addPokeMon = (newPokemon) => {
    this.setState({pokemon: [...this.state.pokemon, newPokemon]})
  }

  filterPokeMon = (newPokemon) => {
    this.setState({pokemon: newPokemon})
  }

  render() {
    return <div className="App">
      <PokemonIndex pokemon={this.state.pokemon} addPokeMon={this.addPokeMon} filterPokeMon={this.filterPokeMon} />
      </div>

  }
}
