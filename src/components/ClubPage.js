import React from 'react';
import '../containers/Scroll.css';

         
const ClubPage = ({Page}) => {
 return (
    <div>
      <div className='tc bg-near-white dib br3 ma2 bw2 shadow-4 w-80 mh-200 pb4' > 
        <img className='mw-50 pt4' alt={Page.shortName + ' logo'} src= {Page.crestUrl} height='100px'/>
        <h2>{Page.shortName}</h2>
        <hr className='ml5 mr5'/>
        <div style = {{wordWrap: 'break-word', padding: '0 20px', fontSize: '14px'}}>
          <p>{Page.email}</p>
          <p>{Page.phone}</p>
          <p style = {{fontSize: '14px'}}>{Page.address}</p>
          <br />
            <div key={'website'} className='br1 w-50 tc grow pointer' 
              style ={{margin: 'auto', textDecoration: 'none', backgroundColor :'#e8b916', padding: '1px'}}>
            <a href={Page.website } style ={{textDecoration: 'none' , color:'white'}} ><p>website</p></a>
            </div>
          </div>
        </div>
    </div>
  );
}


export default ClubPage;