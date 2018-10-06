import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class LifeCounter extends Component{
    operand = '-';
    newScore = 0;

    selectOpenrandOnchange = (event) => {
        this.operand = +event.target.value;
    }

    inputNewScoreOnChange = (event) => {
        this.newScore = +event.target.value;
    }

    render(){
        return (
            <div className="container">
                <div className="box">
                    <h2 className="title is-2">Player {this.props.playerId}</h2>
                    <h3 className="title is-3">Score: {this.props.score}</h3>

                    {/* Change Value Form */}
                    <p className="control has-addons has-addons-centered">
                        <span className="select is-large">
                            <select onChange={ this.selectOpenrandOnchange }>
                                <option>-</option>
                                <option>+</option>
                            </select>
                        </span>
                        <input style={{width: "80%"}} className="input is-expanded is-large" type="text" id={ this.props.playerId } onChange={ this.inputNewScoreOnChange }/>
                        <button className="button is-large is-primary" onClick={ () => this.props.submitScoreClicked(this.newScore, this.operand) }>OK</button>
                    </p>
                </div>
            </div>
        )
    }
}

export default LifeCounter;