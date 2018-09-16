import React from 'react';
import Clubs from './Clubs'


const ClubCard = ({name,team,image,selected}) => {

 return (
    <div className='tc bg-near-white dib br3 pa4 ma3 grow bw2 shadow-4' onClick = {selected.bind(this,name)}> 
      <img className='mw-50' alt={name + ' logo'} src={image} height='180px'/>
      <div className ='mid-gray'>
        <h2>{name}</h2>
        <p>{/*team*/}</p>
      </div>
    </div>
  );
}


export default ClubCard;