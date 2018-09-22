import React, { Component } from 'react';
import '../containers/particles.css'
import Particles from 'react-particles-js';

class SlideShow extends Component {
  constructor() {
    super()
    this.state ={
    image : ['./slides/s2.png'],
    clicked: 1
    }
  }

  images =[
    './slides/s2.png',
    './slides/s3.png',
    './slides/s4.png'
  ]

  
  change =(image) => {
      
      this.setState({image : [this.images[this.state.clicked]] })
      if (this.state.clicked < this.images.length-1) {
        this.setState({clicked : this.state.clicked+1 })
      } else {
       this.setState({clicked : 0})
      }
  }

  render() {

   return (
    <div style={{ 
      height:'300px',
      padding:'25px 10px 25px 10px',
      background: 'linear-gradient(rgb(255, 255, 255) 25%, rgb(94, 191, 124, 0.25) 100%)',
      // border: '1px solid #cecece36'
      }} 
      className='br3 mb5 mb5' >

       <Particles 
          className = 'particles' 
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "3CA9D1",
                  blur: 1
                }
              }
            }
          }}
        />

        <img className='mw-50 pt1 pl3 fl' height='300px' alt={'slides'} 
          src={this.state.image[0]} style={{zIndex: '3',marginTop: '-300px'}}
        />

        <button onClick={this.change}>next</button>
    </div>
    );
  }
}


export default SlideShow;