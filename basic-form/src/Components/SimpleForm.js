import React, { Component } from 'react'

export default class SimpleForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"CareerX",
         age:0,
         email:"abc@gail.com"
      }
    }
    handleChange=(e)=>{
        var field=e.target.name;
        var val=e.target.value;
        if(field==="name")
            this.setState({name:val});
        else if(field==="age")
            this.setState({age:val});
        else
            this.setState({email:val});       
      
        console.log(field+":"+val);
    }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <form>
            <label>Enter Your Name</label>
            <input type="text" value={this.state.name} 
            onChange={this.handleChange} name="name"/><br></br>
            <label>Enter Your Age</label>
             <input type="text" value={this.state.age} 
            onChange={this.handleChange} name="age"/><br/>
            <label>Enter Your Email</label>
             <input type="text" value={this.state.email} 
            onChange={this.handleChange} name="email"/>

        </form>
      </div>
    )
  }
}
