import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super();

    this.state = {
      toggle: true
    }
  }

  clicked = () => {
    if (this.state.toggle === true){
      this.setState({
        toggle: false
      })
    }else{
      this.setState({
        toggle: true
      })
    }
  };

  render() {
    const {name, sprites, stats } = this.props.pokemon;

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.toggle ? sprites.front : sprites.back} onClick={this.clicked}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => stat.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
