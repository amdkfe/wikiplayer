import React from 'react';
import PlayerCard from  './PlayerCard'

const CardList = ({Players}) => {
  return (
    <PlayerCard name={Players[0].name} team={Players[0].team} image={Players[0].image}/>
  )
}

export default CardList