import React, { Component } from 'react';
import LifeCounter from './LifeCounter';
import 'bulma/css/bulma.css'
import './App.css';

const STARTLIFEPOINT = 8000

class App extends Component {
  state = {
    players: [
      { id: 1, lifePoint: STARTLIFEPOINT },
      { id: 2, lifePoint: STARTLIFEPOINT }
    ]
  }

  selectNumOfPlayerHandler = (event) => {
    const numOfPlayers = event.target.value;
    const updatedPlayers = [];

    for(let i = 1; i <= numOfPlayers; i++) {
      updatedPlayers.push({
        id: i,
        lifePoint: STARTLIFEPOINT
      })
    }

    this.setState({
      players: updatedPlayers
    })
  }

  scoreChangeHandler = (id) => {
    return (score, operand) => {
      const updatedPlayers = [ ...this.state.players ];
    
      if(operand === '+') {
        updatedPlayers[id - 1].lifePoint += score;
      }
      else {
        updatedPlayers[id - 1].lifePoint -= score;
      }

      this.setState({
        players: updatedPlayers
      });
    }
  }
 
  render() {
    const lifeCounterList = (
        <div className="box">
          {
            this.state.players.map(player => <LifeCounter key={ player.id } playerId={ player.id } score = { player.lifePoint } submitScoreClicked={ this.scoreChangeHandler(player.id) } />)
          }
        </div>
      );

    return (
      <div id="page">
        <div>
            <center>
              <h1 className="title is-1">Life Counter</h1>
              <h3 className="title is-3">Number of Player</h3>
                <p className="control playerSelect">
                  <span className="select is-large">
                    <select id="amount" onChange={ this.selectNumOfPlayerHandler }>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                  </span>
                </p>
                {lifeCounterList}
            </center>
        </div>
      </div>
    )
  }
}

export default App;
