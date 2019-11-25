import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()

    this.state = {
      front: true
    }
  }

  changeImage = () => {
    if (this.state.front){
      this.setState({
        front: false
      })
    } else {
      this.setState({
        front: true
      })
    }
  }

  render() {
    let image;
    this.state.front ? image = this.props.pokemonObject.sprites.front : image = this.props.pokemonObject.sprites.back

    let stats = this.props.pokemonObject.stats //saving stats to an array bc react doesnt like my other way...

    return (
      <Card>
        <div>
          <div className="image" onClick={this.changeImage}>
            <img alt="oh no!" src={image}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObject.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
