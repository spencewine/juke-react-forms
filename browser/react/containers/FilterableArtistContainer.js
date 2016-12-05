import React, { Component } from 'react';


import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';


export default class FilterableArtistContainer extends Component{
  constructor(){
      super()
      this.state = {inputValue: ""}
      this.handleChangeInput = this.handleChangeInput.bind(this);
  }



  handleChangeInput(e){
    const value = e.target.value;
    this.setState({
      inputValue: value
    })
  }






  render(){
    const inputValue = this.state.inputValue
    const filteredArtists = this.props.artists.filter(artist=>
      artist.name.match(inputValue))

    return (
      <div>
        <FilterInput filter={this.handleChangeInput}/>
        <Artists artists={filteredArtists}/>
      </div>
    )
  }
}








    //



// }
