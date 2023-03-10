import React, { Component } from 'react'

export default class Albums extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photos:[],
         isDataLoaded:false
      }
    }
    componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
           this.setState({photos:json,isDataLoaded:true});
        console.log(json)}
        )
    }
  render() {
    return (
      <div>
        <h1>Our Photo Collections</h1>
        {this.state.photos.map((photo)=>{
            return(
            <div key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.id}></img>
                <h5>{photo.title}</h5>                
            </div>
        )})}
      </div>
    )
  }
}
