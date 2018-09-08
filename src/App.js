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
    players : [],
    searchfield : ''
    }
  }

  searchEvent = (event) => {
    this.setState({searchfield : event.target.value})
  };

  componentDidMount() {
    fetch('https://api.football-data.org/v2/competitions/PL/teams' ,{
      headers: { 'X-Auth-Token': '60f86103699a4d86bec46a1fb06d2065' },
      dataType: 'json',
      type: 'GET',
    })
    .then(response => response.json())
    .then(name => {
      this.setState({players :name.teams})
    })
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
