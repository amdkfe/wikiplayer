import React from 'react';
import Clubs from './Clubs'
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
        value: 10,
      },
      bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},
    }
  }
         
const ClubPage = ({name,team,image}) => {
 return (
    <div>
      <Particles className = 'particles' params = {params} />
    </div>
  );
}


export default ClubPage;