import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.handleIncreament=this.handleIncreament.bind(this);
      this.handleDecreament=this.handleDecreament.bind(this);
    }
    handleDecreament()
    {
        this.setState({count:this.state.count-1})
        console.log(this.state.count);
    }
    handleIncreament()
    {
       // this.state.count=this.state.count+1;
       this.setState({count:this.state.count+1})
        console.log(this.state.count);
    }
  render() {
    return (
      <div>
        Counter : <h4>{this.state.count}</h4>
        <button onClick={this.handleIncreament}>+</button>
        <button onClick={this.handleDecreament}>-</button>
      </div>
    )
  }
}
