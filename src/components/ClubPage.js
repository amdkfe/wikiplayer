import React from 'react';
import ClubCard from  './ClubCard'
import '../containers/Scroll.css';


const cors = require('cors');
// import Particles from 'react-particles-js'
// import '../containers/particles.css';

  // const params = {
  //   particles: {
  //     shape:{
  //       type:"star",
  //       stroke:{width:10,color:"#fff"},
  //       polygon:{nb_sides:2},
  //     },
  //     number: {
  //       value:30,
  //       density: {
  //         enable: true,
  //         value_area: 800
  //       },
  //     },
  //     bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},
  //   }
  // }
         
const ClubPage = ({Page}) => {

      fetch('https://api.football-data.org/v2/competitions/PL/standings' ,{
      headers: { 'X-Auth-Token': '60f86103699a4d86bec46a1fb06d2065' },
      dataType: 'json',
      type: 'GET',
    })
    .then(response => console.log(response.json()))

 return (
    <div>
      <div className='tc bg-near-white dib br3 ma2 bw2 shadow-4 w-80 mh-200 pb4' > 
        {/*<Particles className = 'particles' params = {params} />*/}
        <img className='mw-50 pt4' alt={Page.shortName + ' logo'} src={`./badges/${Page.shortName}.png`} height='200px'/>
          <h2>{Page.shortName}</h2>
          <hr className='ml5 mr5'/>
      
          <p>{Page.email}</p>
          <p>{/*Page.founded*/}</p>
          <p>{Page.phone}</p>
          <p style = {{fontSize: '14px'}}>{Page.address}</p>
         
          <br />
          <div key={'hi'} className='br1 w-60 tc pa1 ' style ={{margin: 'auto', textDecoration: 'none', backgroundColor :'#e8b916'}}>
          <a href={Page.website } style ={{textDecoration: 'none' , color:'white'}} ><p>website</p></a></div>
      </div>
    </div>
  );
}


export default ClubPage;