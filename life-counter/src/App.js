import React, { Component } from 'react';
import LifeCounter from './LifeCounter';
import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {
  state = {
    amount: 2,
    lcList: [1, 2, 3, 4, 5, 6, 7, 8],
    currentlist: [1, 2]
  }
 
  render() {
    const LifeCounterList = ({ lcList }) => {
      return (
        <div className="box">
          {
            lcList.map((lc, idx) => {
              return <LifeCounter key={ idx } player={ lc } />
            })
          }
        </div>
      );

    }

    return (
      <div id="page">
        <div>
            <center>
              <h1 className="title is-1">Life Counter</h1>
              <h3 className="title is-3">Player Amount</h3>
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

export default App;
