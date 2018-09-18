import React from 'react';
import logo from '../containers/logo.svg';
import '../containers/Header.css';
import SearchBox from './SearchBox';
import Navigation from './Navigation'

const Header = ({searchfield,searching}) => {
  return (
    <div className=' center fl w-100 pa4'>
      <div className=' tl fl w-25 pa1'>
        <img src={logo} className="App-logo dib v-mid" alt="logo" />
        <h1 className='App-title dib'> Clubpedia</h1>
      </div>
      <div className=' tc fl w-70 pa2'>
        <SearchBox searching = {searching} />
      </div>
      
      {/*<div>
        <Navigation className=' tc fl dib w-15 pa2'/> 
      </div>*/}

    </div>
  )
}

export default Header;