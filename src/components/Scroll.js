import React from 'react';

const Scroll = (props) => {

 return (
  <div style={{overflowY: 'scroll', height:'620px', padding:'25px 10px 25px 10px', background: 'rgba(52, 52, 52, 0.2)', border: '3px solid #cecece36'}} className='br3 ml4 mb5 mb5' >
    {props.children}
  </div>
  );
}


export default Scroll;