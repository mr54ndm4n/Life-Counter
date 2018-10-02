import React, { Component } from 'react';
import $ from "jquery";
import 'bulma/css/bulma.css'

class LifeCounter extends Component{
    state = {
        score: 8000,
        playerid: 'player ' + this.props.player
    }

    buttonClickHandler = () => {
        var opt = $("#op" + this.state.playerid + " :selected").text();
        var newScore = this.state.score;

        console.log(opt);

        /*Calculate value*/
        if(opt === '-'){
            newScore -= parseInt(document.getElementById(this.state.playerid).value)
        }
        else if(opt === '+'){
            newScore += parseInt(document.getElementById(this.state.playerid).value)
        }

        /*Change value*/
        if(isNaN(newScore)){
            alert('Invalid value');
        }
        else{
            alert(newScore);
            this.setState({
                score: newScore
            })
        }

        /*Clear textbox*/
        document.getElementById(this.state.playerid).value = "";
    }

    render(){
        return (
            <div className="container">
                <div className="box">
                    <h2 className="title is-2">Player {this.props.player}</h2>
                    <h3 className="title is-3">Score: {this.state.score}</h3>

                    {/* Change Value Form */}
                    <p className="control has-addons has-addons-centered">
                        <span className="select is-large">
                            <select id={'op' + this.state.playerid}>
                                <option>-</option>
                                <option>+</option>
                            </select>
                        </span>
                        <input style={{width: "80%"}} className="input is-expanded is-large" type="text" id={ this.state.playerid }/>
                        <button className="button is-large is-primary" onClick={ this.buttonClickHandler }>OK               </button>
                    </p>
                </div>
            </div>
        )
    }
}

export default LifeCounter;