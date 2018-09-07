import React from 'react';
import logo from './logo.svg';
import './Header.css';
import SearchBox from './SearchBox';

const Header = ({searchfield,searching}) => {
  return (
    <div className=' center fl w-100 pa4'>
      <div className=' tl fl w-25 pa1'>
        <img src={logo} className="App-logo dib v-mid" alt="logo" />
        <h1 className='App-title dib'> WikiPlayer</h1>
      </div>
      <div className=' tc fl w-75 pa2'>
        <SearchBox searching = {searching} />
      </div>
    </div>
  )
}

export default Header;