import React from 'react'

export default class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    }, () => this.props.filterPokeMon(this.newPokeMon()))
  }

  newPokeMon = () => this.props.pokemon.filter(pokemon => pokemon.name.includes(this.state.search))

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" onChange={this.handleChange} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

