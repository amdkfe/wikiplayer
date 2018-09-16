import React from 'react';
import ClubCard from  './ClubCard'
import Particles from 'react-particles-js'
import '../containers/particles.css';

// const ClubPage= ({page}) => {
  // const ClubList = Clubs.map((club, i) => {
  //   return <ClubCard key ={page.id} name={page.shortName} team={page.website} image= {`./badges/${page.shortName}.png`} selected = {selected}
  //   />;
// })

  const params = {
    particles: {
      shape:{
        type:"star",
        stroke:{width:10,color:"#fff"},
        polygon:{nb_sides:2},
      },
      number: {
        value:30,
        density: {
          enable: true,
          value_area: 800
        },
      },
      bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},
    }
  }
         
const ClubPage = ({name,team,image,page}) => {
  // const thepage =  (page) => {
  //    return <ClubCard key ={page.id} name={page.shortName} team={page.website} image= {`./badges/${page.shortName}.png`} />
  // }
  // const ClubList = ((page, i) => {
  //   return <ClubCard 
  //     key ={page[i].id} 
  //     name={page[i].shortName} 
  //     team={page[i].website} 
  //     image= {`./badges/${page[i].shortName}.png`}
  //     // OnCardClick = {OnCardClick}
  //   />;
  // })

 return (
    <div>
      <Particles className = 'particles' params = {params} />
      <div className='tc bg-near-white dib br3 pa4 ma3 grow bw2 shadow-4' > 
        <img className='mw-50' alt={page + ' logo'} src={image} height='180px'/>
        <div className ='mid-gray'>
          <h2>{page}</h2>
        
      </div>
    </div>
  
    </div>
  );
}


export default ClubPage;