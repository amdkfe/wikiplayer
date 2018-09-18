import React from 'react';

const SearchBox = ({searchfield,searching}) => {
  return (
    <div>
      <input 
        className='br2 pa3 bg-light-gray w-100 b--near-white ' 
        type='search' 
        placeholder='seach for clubs'
        onChange = {searching}
      />
    </div>
  )
}

export default SearchBox;