import React from 'react';

const SearchBox = ({searchfield,searching}) => {
  return (
    <div>
      <input 
        className='br2 pa3 bg-light-gray w-100  ' 
        type='search' 
        placeholder='seach for clubs'
        onChange = {searching}
        style={{padding:'15px', boxShadow:' rgb(41, 41, 41) 0px 1px 5px inset', borderWidth:'0px',outline: 'none'}}
      />
    </div>
  )
}

export default SearchBox;