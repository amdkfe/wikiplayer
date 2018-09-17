import React from 'react';
import ClubCard from  './ClubCard'
import Particles from 'react-particles-js'
import '../containers/particles.css';

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
         
const ClubPage = ({Page}) => {
  // const SelectedPage = Page.map((Page, i) => {
  //   return <ClubCard 
  //     key ={Page[i].id} 
  //     name={Page[i].shortName} 
  //     team={Page[i].website} 
  //     image= {`./badges/${Page[i].shortName}.png`}
  //     // OnCardClick = {OnCardClick}
  //   />;
  // })

 return (
    <div>
    {console.log(Page)}
      <div className='tc bg-near-white dib br3 pa6 ma3 bw2 shadow-4' > 
        <Particles className = 'particles' params = {params} />
        <img className='mw-50' alt={Page.shortName + ' logo'} src={`./badges/${Page.shortName}.png`} height='300px'/>
          <h2>{Page.name}</h2>
          <br/>
          <hr/>
          <p>{Page.website}</p>
          <p>{Page.address}</p>
        <Particles/>
      </div>
    </div>
  );
}


export default ClubPage;