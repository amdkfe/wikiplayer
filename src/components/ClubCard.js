import React from 'react';
import '../containers/ClubCard.css';

const ClubCard = ({name,team,image,OnCardClick}) => {


    // fetch('https://api.football-data.org/v2/competitions/PL/standings' ,{
    //   headers: { 'X-Auth-Token': '60f86103699a4d86bec46a1fb06d2065' },
    //   dataType: 'json',
    //   type: 'GET',
    // })
    // .then(response => console.log(response.json()))
    // // .then(name => {
    // //   this.setState({clubs :name.teams})
    // // }


 return (
    <div className='tc clubbox pointer dib br2 pa0 ml2 mr2 mt3 ma0 grow bw1 shadow-4 ' onClick = {OnCardClick.bind(this,name)}> 
      <img className='pt3 pl3 pr3' alt={name + ' logo'} src={image} height='90px'/>
      <div className ='mid-gray'>
        
        <p>{/*team*/}</p>
      </div>
    </div>
  );
}


export default ClubCard;