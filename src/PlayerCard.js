import React from 'react';
import Players from './Players'

const PlayerCard = ({name,team,image}) => {
 return (
    <div className='tc bg-near-white dib br3 pa4 ma3 grow bw2 shadow-4 w-25'> 
      <img className='mw-50' alt='players' src={image} height='200px'/>
      <div className ='mid-gray'>
        <h2>{name}</h2>
        <p>{team}</p>
      </div>
    </div>
  );
}


export default PlayerCard;