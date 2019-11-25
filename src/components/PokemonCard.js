import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      imageFront: true
    }
  }

  changeImage = () => {
    // console.log("image change")

    this.setState({
      imageFront: !this.state.imageFront
    })
  }

  render() {
    return (
      <Card onClick={this.changeImage}>
        <div>
          <div className="image">

            {this.state.imageFront ? (

              <img src={this.props.pokemon.sprites.front} alt={this.props.pokemon.name} />
              
              ) : (
                
                <img src={this.props.pokemon.sprites.back} alt={this.props.pokemon.name} />

            )
          }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.map(hp => {
                if(hp.name === 'hp'){
                  return hp.value
                }
              })} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
