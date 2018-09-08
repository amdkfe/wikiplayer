import React from 'react';
import PlayerCard from  './PlayerCard'

const CardList = ({Players}) => {
  const PlayerList = Players.map((player, i) => {
    return <PlayerCard 
      key ={Players[i].id} 
      name={Players[i].shortName} 
      team={Players[i].website} 
      image= {`./badges/${Players[i].shortName}.png`}
    />;
  })

  return (
    <div className='dib min-vh-100'>
      {PlayerList}
    </div>
  )
}

export default CardList