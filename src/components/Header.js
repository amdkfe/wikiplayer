import React from 'react';
import logo from '../containers/logo.svg';
import '../containers/Header.css';
import SearchBox from './SearchBox';


const Header = ({searchfield,searching}) => {
  return (
    <div className=' center fl w-100 pa4'style={{paddingBottom:'5px'}}>
      <div className=' tl fl pa1' style={{width:'30%'}}>
        <img src={logo} className="App-logo dib v-mid" alt="logo" />
        <h4 className='App-title dib'> Clubipedia</h4>
      </div>
      <div className=' tc fl pa2 pl4 ' style={{width:'65%'}}>
        <SearchBox searching = {searching} />
      </div>
    </div>
  )
}

export default Header;