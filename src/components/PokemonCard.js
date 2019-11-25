import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)
    this.state={
      pic: "front"
    }
  }

  togglePicture = () => {
    let picState = {
      "front" : "back",
      "back" : "front"
    }
    this.setState({
      pic: picState[this.state.pic]
    })
  }

  render() {
    const {name, sprites} = this.props.pokemonInfo
    let hpObj = this.props.pokemonInfo.stats.find(statObj=>{
      return statObj.name === "hp"
    })
    return (
      <Card>
        <div>
          <div className="image" onClick={this.togglePicture}>
            <img src={sprites[this.state.pic]} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {hpObj.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
