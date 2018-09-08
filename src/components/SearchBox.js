import React, { Component } from 'react';

const SearchBox = ({searchfield,searching}) => {
  return (
    <div>
      <input 
        className='br3 pa3 bg-light-gray w-100' 
        type='search' 
        placeholder='seach for clubs'
        onChange = {searching}
      />
    </div>
  )
}

export default SearchBox;