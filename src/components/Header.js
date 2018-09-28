import React from 'react';
import logo from '../containers/logo.svg';
import '../containers/Header.css';
import SearchBox from './SearchBox';


const Header = ({searchfield,searching}) => {
  return (
    <div className='wrap'>
      <div className=' logocontainer leftcolumn'>
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className='App-title'> Clubipedia</h4>
      </div>
      <div className='rightcolumn'>
        <SearchBox searching = {searching} />
      </div>
    </div>
  )
}

export default Header;