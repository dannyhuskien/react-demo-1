import React from 'react';
import List from './List';

class Bucket extends React.Component{
  constructor(props){
    super(props);
    this.state = {evens: [], odds: []};
    this.update = this.update.bind(this);
  }

  update(){
    const evens = this.state.evens;
    const odds = this.state.odds;
    const num = this.refs.num.value * 1;
    num % 2 ? odds.push(num) : evens.push(num);
    this.setState({evens, odds});
  }

  render(){
    const esum = this.state.evens.reduce((a, n) => a + n, 0);
    const osum = this.state.odds.reduce((a, n) => a + n, 0);
    return (
      <div>
        <h3>Bucket List</h3>
        <input ref='num' type='text' />
        <button onClick={this.update}>Add</button>
        <h5>Evens sum: {esum}</h5>
           <List arr= {this.state.evens}/>
        <h5>Odds sum: {osum}</h5>
           <List arr= {this.state.odds}/>
      </div>
    );
  }
}

export default Bucket;
