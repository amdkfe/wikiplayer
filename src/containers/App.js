import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import ClubCard from '../components/ClubCard';
import CardList from '../components/CardList';

class App extends Component {
  constructor() {
    super()
    this.state ={
    clubs : [],
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
      this.setState({clubs :name.teams})
    })
  };

  render() {
      const filter = this.state.clubs.filter(club => {
      return club.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <Header searching = {this.searchEvent}/>  
        <CardList Clubs = {filter}/>
      </div>
    );
  }
}

export default App;
