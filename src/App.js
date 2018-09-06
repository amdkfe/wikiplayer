import React, { Component } from 'react';
import './App.css';
import {Players} from './Players'
import Header from './Header';
import PlayerCard from './PlayerCard';
import CardList from './CardList';

class App extends Component {
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
