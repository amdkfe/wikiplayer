import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import ClubPage from '../components/ClubPage';

class App extends Component {
  constructor() {
    super()
    this.state ={
    clubs : [],
    searchfield : '',
    ClubPage: '',
    }
  }

  searchEvent = (event) => {
    this.setState({searchfield : event.target.value})
  };

  OnCardClick = (name) => {
    this.setState({ClubPage : name}, () => {
      console.log(this.state.ClubPage)
    }
  )}

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

    const select = this.state.clubs.find(club => {
      return club.shortName === this.state.ClubPage;
    })
 
    return (
      <div className='tc'>
        {console.log('filter -> ' + filter)}
        {console.log('select -> ' + select)}
        {console.log('state -> ' + this.state.ClubPage)}
        <Header searching = {this.searchEvent}/>  
        { 
        this.state.ClubPage === '' 
        ? <CardList Clubs = {filter} OnCardClick = {this.OnCardClick}/>
        : <ClubPage Page = {select}/>
        }
      </div>
    );
  }
}

export default App;
