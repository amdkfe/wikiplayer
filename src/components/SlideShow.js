import React, { Component } from 'react';


class SlideShow extends Component {
  constructor() {
    super()
    this.state ={
    image : ['./slides/s1.png'],
    clicked: 1,
    }
  }

  images =[
    './slides/s1.png',
    './slides/s2.png',
    './slides/s3.png',
    './slides/s4.png',
    './slides/s5.png',
    './slides/s6.png',
    './slides/s7.png',
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
      <div 
        style={{padding:'40px 10px 25px 10px'}} 
        onClick = {this.change}
        className='br3 mb5 mb5 pointer' 
      >
        <img className='pt1 tc dib grow' height='320px' alt={'slides'} 
          src={this.state.image[0]}
        />
      </div>
    );
  }
}


export default SlideShow;