import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
  }
  
  // cleanUpStats = () => {
  //   this.props.pokemon.stats.forEach(obj => console.log(obj.name, obj.value))
  // }

  // cleanUpStats = () => {
  //   this.props.pokemon.stats.forEach(obj => this.setState({pokeStats: {...this.state.pokeStats} }))
  // }
  findHP = () => this.props.pokemon.stats.find(obj => obj.name === 'hp')

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }


  
  render() {

    // console.log(this.props.pokemon.sprites)
    const {name, sprites} = this.props.pokemon

    // this.cleanUpStats()
    // console.log(this.props.pokemon.stats)

    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={this.state.flipped ? sprites.back : sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHP().value} HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

// findHP = () => this.props.pokemon.stats.find(stats => obj.name === hp)