import React, { Component } from 'react'

export default class UnControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:0,
         name:"",
         age:0
      }
      this.idInput=React.createRef();
      this.nameInput=React.createRef();
      this.ageInput=React.createRef();
    }
    register=(e)=>{
        e.preventDefault();
        this.setState({
            id:this.idInput.current.value,
            name:this.nameInput.current.value,
            age:this.ageInput.current.value
        })

    }
  render() {
    return (
      <div><h1>UnControlledForm</h1>

        <form>
            <label>Enter Your ID</label>
            <input type="text" ref= {this.idInput} name="id"/><br></br>
            <label>Enter Your Age</label>
             <input type="text" ref={this.ageInput} name="age"/><br/>
            <label>Enter Your Name</label>
             <input type="text"  ref={this.nameInput} name="name"/>
        <button type="submit" onClick={this.register}>Submit Form</button>
        </form>
        <div>
            ID:&nbsp;&nbsp; {this.state.id}<br/>
            NAME:&nbsp;&nbsp; {this.state.name}<br/>
            AGE: &nbsp;&nbsp;{this.state.age}<br/>
        </div>
      </div>
    )
  }
}
