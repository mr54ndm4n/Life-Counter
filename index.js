var player = 0;

class LifeCounter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {score: 8000, playerid: ('player'+props.player)};
    }

    render(){
        return (
            <div className="container">
            <div className="box">
                <h2 className="title is-2">Player {this.props.player}</h2>
                <h3 className="title is-3">Score: {this.state.score}</h3>

                {/*Change Value Form*/}
                <p className="control has-addons has-addons-centered">
                    <span className="select is-large">
                        <select id={'op' + this.state.playerid}>
                            <option>-</option>
                            <option>+</option>
                        </select>
                    </span>
                    <input className="input is-expanded is-large" type="text" id={this.state.playerid}/>
                    <a className="button is-large is-primary"
                    onClick={
                        () => {

                            var opt = $("#op" + this.state.playerid + " :selected").text();
                            var newScore = this.state.score;

                            {/*Calculate value*/}
                            if(opt == '-'){
                                newScore -= parseInt(document.getElementById(this.state.playerid).value)
                            }
                            else if(opt == '+'){
                                newScore += parseInt(document.getElementById(this.state.playerid).value)
                            }

                            {/*Change value*/}
                            if(isNaN(newScore)){
                                alert('Invalid value');
                            }
                            else{
                                alert(newScore);
                                this.setState({
                                    score: newScore
                                })
                            }

                            {/*Clear textbox*/}
                            document.getElementById(this.state.playerid).value = "";
                    }}>
                        OK
                    </a>
                </p>
            </div>
            </div>
        )
    }
}

class LifeCounterList extends React.Component{
  render(){
    return (
      <div>
          <center>
            <h1 className="title is-1">Life Counter</h1>
            <LifeCounter player="1" />
            <LifeCounter player="2" />
            <LifeCounter player="3" />
            <LifeCounter player="4" />
            <LifeCounter player="5" />
          </center>
      </div>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <div id="page">
          <LifeCounterList />
        </div>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('main'));
