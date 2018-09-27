import React from 'react';
import ClubCard from  './ClubCard'


const CardList = ({Clubs,OnCardClick}) => {
  const ClubList = Clubs.map((club, i) => {
    return <ClubCard 
      key ={Clubs[i].id} 
      name={Clubs[i].shortName} 
      team={Clubs[i].website} 
      id = {Clubs[i].id}
      // defimage= {`./badges/${Clubs[1].shortName}.png`}
      standing={Clubs[i].standing} 
      image={Clubs[i].crestUrl}
      OnCardClick = {OnCardClick}
    />;
  })

  return (
    <div className='dib min-vh-100 fl w-100'>
      {ClubList}
    </div>
  )
}

export default CardList