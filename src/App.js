import React, { Component } from 'react';
import './App.css';
import {Players} from './Players'
import Header from './Header';
import PlayerCard from './PlayerCard';
import CardList from './CardList';

// const state = {
//   players : {Players},
//   searchfield : '',
// }

class App extends Component {

  constructor() {
    super()
    this.state ={
    players : Players,
    searchfield : ''
    }
  };
  render() {
    return (
      <div className='tc'>
        <Header />
        <CardList Players = {Players}/>
      </div>
    );
  }
}

export default App;
