import React, { Component } from 'react'

export default class UpdateTheme extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         bgColor:'blue'
      }
    }
    handleClick=(e)=>{
        this.setState({
            bgColor:e.target.value
        });
    }
  render() {
    return (
      <div style={{ width:150, height:150, backgroundColor:this.state.bgColor}}>
        UpdateTheme
        <button onClick={this.handleClick} value="green">Green</button>
        <button onClick={this.handleClick} value="red">Red</button>
        <button onClick={this.handleClick} value="grey">Grey</button>
      </div>
    )
  }
}
