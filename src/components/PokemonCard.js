import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    picToggle: false
  }

  onClickHandler = () => {
    this.setState({
      picToggle: !this.state.picToggle
    })
    console.log(this.state.picToggle)
  }



  render() {
    let {name, height, weight, id, abilities, moves, stats, sprites} = this.props.pokemonInfo
    let hp = stats.find(stat => stat.name === 'hp').value
    return (
      <Card>
        <div>
          <div onClick={this.onClickHandler} className="image" >
            <img src={this.state.picToggle ? sprites.back : sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <span>{hp}</span>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
