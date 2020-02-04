import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState(prevState => {
      return {clicked: !prevState.clicked}
    })
  }

  render() {
    const {sprites: {front, back}, name, stats: [specialDefense, specialAttack, defense, attack, hp]} = this.props.pokemon
    
    return (
      <Card onClick={this.clickHandler}>
        <div>
          <div className="image">
            <img src={this.state.clicked ? back : front} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {`${hp.value} hp`}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
