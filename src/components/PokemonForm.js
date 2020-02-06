import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    let spriteNum = this.randomNumber()
    this.state = {
      name: '',
      hp: '',
      frontUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteNum}.png`,
      backUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${spriteNum}.png`
    }
  }

  //generate random number between 718 and 151
  randomNumber(){
    return Math.floor( Math.random() * (718-151) + 151 )
  }

  resetState = () => {
    let spriteNum = this.randomNumber()
    this.setState({
      name: '',
      hp: '',
      frontUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteNum}.png`,
      backUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${spriteNum}.png`
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const {name, hp, frontUrl, backUrl} = this.state

    let data = {
      name, 
      stats: [
        {
          value: 100,
          name: "speed"
        },
        {
          value: 100,
          name: "special-defense"
        },
        {
          value: 100,
          name: "special-attack"
        },
        {
          value: 100,
          name: "defense"
        },
        {
          value: 100,
          name: "attack"
        },
        {
          value: parseInt(hp,10),
          name: "hp"
        }
      ],
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }

    this.props.addPokemon(data)
    this.resetState()
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            {/* <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" /> */}
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm