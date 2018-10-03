var player = 0;

class LifeCounter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {score: 8000, playerid: ('player'+props.player)};
    }

    render(){
        return (
            <div className="container">
            <div className={`box player-${this.props.player}`}>
                <h2 className="title is-2 title-player">Player {this.props.player}</h2>
                <h3 className="title is-3 score">Score: {this.state.score}</h3>

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

const LifeCounterList = ({lcList}) => {

  const eiei = lcList.map((lc) => {
    return (<LifeCounter player={lc} />)
  });

  return (<div className="box">{eiei}</div>);
}

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {amount: 2, lcList: [1, 2, 3, 4, 5, 6, 7, 8], currentlist : [1, 2]};
  }
  render(){
    return (
    <div id="page">
      <div>
          <center>
            <h1 className="title is-1">Life Counter</h1>
            <h3 className="title is-4">Player Amount</h3>
              <p className="control playerSelect">
                <span className="select is-large">
                  <select id="amount"
                    onChange={
                      () => {
                        var newAmount = document.getElementById('amount').value;
                        this.setState({
                          amount: newAmount,
                          currentlist: this.state.lcList.slice(0, newAmount)
                        });
                      }
                    }>
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
              <LifeCounterList lcList={this.state.currentlist} />
          </center>
      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('main'));
