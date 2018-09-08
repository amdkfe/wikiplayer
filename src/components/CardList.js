import React from 'react';
import ClubCard from  './ClubCard'

const CardList = ({Clubs}) => {
  const ClubList = Clubs.map((club, i) => {
    return <ClubCard 
      key ={Clubs[i].id} 
      name={Clubs[i].shortName} 
      team={Clubs[i].website} 
      image= {`./badges/${Clubs[i].shortName}.png`}
    />;
  })

  return (
    <div className='dib min-vh-100'>
      {ClubList}
    </div>
  )
}

export default CardList