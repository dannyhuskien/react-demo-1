import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: props.start , like: props.like};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.likeDislike = this.likeDislike.bind(this);
    this.image = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR22Hr5kEdmDefsR-slOdXGkVfiYWsrEDUKzr3itVOWGDEaQL7eSw_Z_w';
    //debugger;
  }

  increment(){
    //console.log('increment:', this);
    this.setState({count: this.state.count + 1});
  }

  decrement(){
    //console.log('increment:', this);
    this.setState({count: this.state.count - 1});
  }

  likeDislike(){
   if (this.state.like){
     this.setState({like: false});
     this.image = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxONaBFJHNEMsGZaQ5EytUV4lKEvbeqQLxe637BkYQlYCKW0o4bIy-llA'
   }else {
      this.setState({like: true});
     this.image = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR22Hr5kEdmDefsR-slOdXGkVfiYWsrEDUKzr3itVOWGDEaQL7eSw_Z_w'
   }


  }

  render(){
    return (
      <div>
        <h3>Counter</h3>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>++</button>
        <button onClick={this.decrement}>--</button>
        <img src={this.image} />
        <button onClick={this.likeDislike}>Like-Dislike</button>
      </div>
    );
  }
}

//up
//https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxONaBFJHNEMsGZaQ5EytUV4lKEvbeqQLxe637BkYQlYCKW0o4bIy-llA
//down
//https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR22Hr5kEdmDefsR-slOdXGkVfiYWsrEDUKzr3itVOWGDEaQL7eSw_Z_w
export default Counter;
