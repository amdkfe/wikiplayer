import React from 'react';
import '../containers/ClubCard.css';

const ClubCard = ({name,team,image,OnCardClick}) => {

 return (
    <div className='tc clubbox pointer dib br2 pa0 ml2 mr2 mt3 ma0 grow bw1 shadow-4 ' 
      onClick = {OnCardClick.bind(this,name)}
        style={{width:'95px', height:'100px'}}> 
      <img className='pt3 pl3 pr3' alt={name + ' logo'} src={image} height='60px'/>
      <div className ='mid-gray'>
        
        <p>{/*team*/}</p>
      </div>
    </div>
  );
}


export default ClubCard;