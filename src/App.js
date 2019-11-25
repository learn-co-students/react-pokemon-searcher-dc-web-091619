import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemonList: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemonArray => {
      // console.log(pokemonArray)

      this.setState({
        pokemonList: pokemonArray
      })
    })
  }

  newPokemon = (name, hp, frontUrl, backUrl) => {
    // console.log('adding new pokemon')

    fetch("http://localhost:3000/pokemon",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        "stats": [
          {
            "value": hp,
            "name": "hp"
          }
        ],
        "sprites": {
          "front": frontUrl,
          "back": backUrl
        }
      })

    }).then(response => response.json()).then(newPokemonArray => {
      this.setState({
        pokemonList: [...this.state.pokemonList, newPokemonArray]
      })
      // console.log(newPokemonArray)
    })

    // console.log(name)
    // console.log(hp)
    // console.log(frontUrl)
    // console.log(backUrl)
  }

  searchPokemon = (event) => {
    console.log("searching...")
    console.log(event.target.value)

    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return(
      <div className="App">
        <PokemonIndex 
        pokemon={this.state.pokemonList.filter(p => p.name.includes(this.state.searchTerm))}
        filter={this.searchPokemon}
        addPokemon={this.newPokemon}
        />
      </div>

    )
    }
}

export default App
