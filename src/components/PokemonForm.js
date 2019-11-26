import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    let {name, hp, frontUrl, backUrl} = this.state
    debugger
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {value: hp,
          name: 'hp'
        }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(rsp => rsp.json())
    .then(pokemonObj => {
      this.props.addPokemon(pokemonObj)
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.onSubmitHandler(event)}>
          <Form.Group widths="equal">
            <Form.Input onChange={(event) => this.onChangeHandler(event)} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(event) => this.onChangeHandler(event)} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(event) => this.onChangeHandler(event)} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={(event) => this.onChangeHandler(event)} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
