import React, { Component } from 'react';
import './App.css';
import '../containers/Scroll.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import ClubPage from '../components/ClubPage';
import Scroll from '../components/Scroll';
import SlideShow from '../components/SlideShow';


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
    }
  )}

  componentDidMount() {
    Promise.all([
      fetch('https://api.football-data.org/v2/competitions/PL/teams',
        {headers: { 'X-Auth-Token': '60f86103699a4d86bec46a1fb06d2065'},
        dataType: 'json',
        type: 'GET',}
      ),
      fetch('https://api.football-data.org/v2/competitions/BL1/teams',
        {headers: { 'X-Auth-Token': '60f86103699a4d86bec46a1fb06d2065'},
        dataType: 'json',
        type: 'GET',}
      ),
      fetch('https://api.football-data.org/v2/competitions/PD/teams',
        {headers: { 'X-Auth-Token': '60f86103699a4d86bec46a1fb06d2065'},
        dataType: 'json',
        type: 'GET',}
      ),      
      fetch('https://api.football-data.org/v2/competitions/SA/teams',
        {headers: { 'X-Auth-Token': '60f86103699a4d86bec46a1fb06d2065'},
        dataType: 'json',
        type: 'GET',}
      ),
    ])

    .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
    .then(requestData => {
      this.setState({
        clubs: requestData[0].teams
          .concat(requestData[1].teams)
          .concat(requestData[2].teams)
          .concat(requestData[3].teams)
      }) 
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
      <div>
        <div className='tc'>
          <Header searching = {this.searchEvent}/>  
        </div>
          <div className = 'w-100'>
            <div className = 'grow leftbox'>
              <Scroll>
              <CardList Clubs = {filter} OnCardClick = {this.OnCardClick} /> 
              </Scroll>
            </div>
            <div className = 'rightbox scrollbox grow'>
              { this.state.ClubPage === '' 
                ? <div className='' >
                  <SlideShow className="tc w-60 w-100 ma3 "/>
                 </div>
                : <ClubPage Page = {select}/>
              }
            </div>
          </div>
      </div>  
    );
  }
}

export default App;
