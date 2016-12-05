import React, {Component} from 'react';
import axios from 'axios';

import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component{
  constructor(){
    super()
    this.state = {inputValue: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  handleChange(e){
    e.preventDefault()
    console.log(e.target.value);
    const value = e.target.value;
    this.setState({
     inputValue: value
    })
  }



handleSubmit(e) {
  e.preventDefault();
  console.log(this.state.inputValue);
  axios.post('/api/playlists', { name:this.state.inputValue})
      .then(res => res.data)
      .then(result => {
        console.log(result) // response json from the server!
      });



  this.setState({
    inputValue: ""
  });
}

disableButton(){
  var inVal = this.state.inputValue;

  if(inVal.length>0 && inVal.length<17){
    return false;
  }
  else {return true}
}


  render(){
    return (
      <div>
        <NewPlaylist disableButton={this.disableButton} handleChange={this.handleChange} value={this.state.inputValue} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
