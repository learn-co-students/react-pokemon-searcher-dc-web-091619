import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={
      allPokemon: [],
      filter: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(response=>response.json())
    .then(data=> {
      this.setState({
        allPokemon: [...data]
      })
    })
  }

  onChange = (event) => {
    let newTerm = event.target.value
    this.setState({
      filter: newTerm
    })
  }
  
  postPokemon=(info)=>{
    let restructuredData = {name: info.name, stats: [{value: info.hp, name: "hp"}], sprites: {front: info.frontUrl, back: info.backUrl}}
    let objConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(restructuredData)
    }
    fetch("http://localhost:3000/pokemon", objConfig)
    .then(response=>response.json())
    .then(pokemon=>{
      this.setState({
        allPokemon: [...this.state.allPokemon, pokemon]
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemon={this.postPokemon}/>
        <br />
        <Search onChange={this.onChange} filter={this.state.filter} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon} filter={this.state.filter} />
      </Container>
    )
  }
}

export default PokemonPage
