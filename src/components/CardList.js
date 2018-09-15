import React from 'react';
import ClubCard from  './ClubCard'

const CardList = ({Clubs,selected}) => {
  const ClubList = Clubs.map((club, i) => {
    return <ClubCard 
      key ={Clubs[i].id} 
      name={Clubs[i].shortName} 
      team={Clubs[i].website} 
      image= {`./badges/${Clubs[i].shortName}.png`}
      selected = {selected}
    />;
  })

  return (
    <div className='dib min-vh-100'>
      {ClubList}
    </div>
  )
}

export default CardList