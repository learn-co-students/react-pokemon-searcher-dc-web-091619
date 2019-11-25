import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle: false
  }

  cardClicked = () => {
    this.setState(pre => {
      return {toggle: !pre.toggle}
    })
  }
  
  render() {
    const hp = this.props.pokemon.stats.find(stat => stat.name === "hp").value
    return (
      <Card onClick={this.cardClicked}> 
        <div>
          <div className="image">
            {this.state.toggle ? (<img alt="oh no!" src={this.props.pokemon.sprites.back} />) : (<img alt="oh no!" src={this.props.pokemon.sprites.front} />)}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }  
}

export default PokemonCard
