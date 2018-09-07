import React from 'react';
import PlayerCard from  './PlayerCard'

const CardList = ({Players}) => {
  const PlayerList = Players.map((player, i) => {
    return <PlayerCard key ={i} name={Players[i].name} team={Players[i].team} image={Players[i].image}/>;
  })

  return (
    <div className='dib min-vh-100'>
      {PlayerList}
    </div>
  )
}

export default CardList