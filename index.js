var player = 0;

class LifeCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { score: 8000, playerid: ('player' + props.player) };
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h2 className="title is-2">Player {this.props.player}</h2>
                </div>
                <div className="card-body">
                    <img className="mb-2" src={"./images/player_" + this.props.player + ".png"} width="100" height="100"></img>
                    <h3 className="title is-3">Score: {this.state.score}</h3>

                    {/*Change Value Form*/}
                    <div className="value-selector input-group">
                        <select id={'op' + this.state.playerid} className="sign-selector custom-select">
                            <option>-</option>
                            <option>+</option>
                        </select>
                        <input className="form-control" type="text" id={this.state.playerid} />
                        <a className="btn btn-dark text-light ml-2"
                            onClick={
                                () => {

                                    var opt = $("#op" + this.state.playerid + " :selected").text();
                                    var newScore = this.state.score;

                                    {/*Calculate value*/ }
                                    if (opt == '-') {
                                        newScore -= parseInt(document.getElementById(this.state.playerid).value)
                                    }
                                    else if (opt == '+') {
                                        newScore += parseInt(document.getElementById(this.state.playerid).value)
                                    }

                                    {/*Change value*/ }
                                    if (isNaN(newScore)) {
                                        alert('Invalid value');
                                    }
                                    else {
                                        alert(newScore);
                                        this.setState({
                                            score: newScore
                                        })
                                    }

                                    {/*Clear textbox*/ }
                                    document.getElementById(this.state.playerid).value = "";
                                }}>
                            OK
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

const LifeCounterList = ({ lcList }) => {

    const eiei = lcList.map((lc) => {
        return (<LifeCounter player={lc} />)
    });

    return (<div className="box">{eiei}</div>);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amount: 2, lcList: [1, 2, 3, 4, 5, 6, 7, 8], currentlist: [1, 2] };
    }
    render() {
        return (
            <div id="page">
                <div className="container">
                    <div className="col">
                        <center>
                            <div className="header d-flex justify-content-center align-items-center">
                                <h1 className="pt-3">
                                    <div className="d-flex align-items-center">
                                        <svg className="heart pr-3" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
                                        Life Counter
                                    </div>
                                </h1>
                            </div>
                            <hr />
                            <div className="player-amount input-group input-group-lg mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text input-group-lg">Player Amount</label>
                                </div>
                                <select id="amount" className="form-control custom-select"
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
                            </div>
                            <p className="control playerSelect">
                                <span className="select is-large">

                                </span>
                            </p>
                            <LifeCounterList lcList={this.state.currentlist} />
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('main'));
