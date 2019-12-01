import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  newPokemon = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    console.log('handling submit...');
    event.target.reset(); //reset the form

    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{name: 'hp', value: this.state.hp}],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
        .then(response => response.json())
        // .then(newPM => {
        //   this.setState({
        //   allPokemon: [...this.props.allPokemon, newPM]
        //   })
        // })
        .then(newPM => {
         this.props.addNewPokemon(newPM)
        })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.newPokemon}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.newPokemon}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.newPokemon}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.newPokemon}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
