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

  handleSubmit = () => {
    // console.log(event.currentTarget.firstChild.firstChild)

    let name = document.getElementsByName("name")[0].value;
    let hp = document.getElementsByName("hp")[0].value;
    let frontUrl = document.getElementsByName("frontUrl")[0].value;
    let backUrl = document.getElementsByName("backUrl")[0].value;

    // console.log(name)
    // console.log(hp)
    // console.log(frontUrl)
    // console.log(backUrl)

    this.setState({
      name: name,
      hp: hp,
      frontUrl: frontUrl,
      backUrl: backUrl
    }, () => {

      this.props.addPokemon(this.state.name, this.state.hp, this.state.frontUrl, this.state.backUrl)
      
    })

  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
