import React, { Component } from 'react'

export default class CounterArrow extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         count:0
      }
    }
    handleDecreament =()=>{
        
        this.setState({count:this.state.count-1})
        console.log(this.state.count);
    }
    handleIncreament=()=>{
        
        this.setState({count:this.state.count+1})
        console.log(this.state.count);
    }
  render() {
    return (
        <div>
        Counter [Arrow] : <h4>{this.state.count}</h4>
        <button onClick={this.handleIncreament}>+</button>
        <button onClick={this.handleDecreament}>-</button>
      </div>
    )
  }
}
