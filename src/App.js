import React, { Component } from 'react';
import './App.css';
import {Players} from './Players'
import Header from './Header';
import PlayerCard from './PlayerCard';
import CardList from './CardList';

class App extends Component {
  constructor() {
    super()
    this.state ={
    players : Players,
    searchfield : ''
    }
  }
  searchEvent = (event) => {
    // console.log(event.target.value);
    this.setState({searchfield : event.target.value})
 
  };
  render() {
       const filter = this.state.players.filter(players => {
      return players.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <Header searching = {this.searchEvent}/>
        <CardList Players = {filter}/>
      </div>
    );
  }
}

export default App;
