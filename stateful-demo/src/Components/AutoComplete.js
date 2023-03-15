import React, { Component } from 'react'

export default class AutoComplete extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         query:[
            "abc",
            "xyz"
         ]
      }
      this.queryInput=React.createRef();
    }
    handleClick=()=>{
        const q=this.queryInput.current.value;
        console.log(q);
        this.setState({
            query:this.state.query.push(q)
        })
        console.log(this.state.query)
    }
  render() {
    return (
      <div>
        <label>Enter Your Query</label>
        <input type="text" ref={this.queryInput} />
        <button onClick={this.handleClick}>Execute</button>
        
       {/*  {this.state.query.map((str)=>{
            return(
                <p>{str}</p>
            );
        })} */}
      </div>
    )
  } 
}
