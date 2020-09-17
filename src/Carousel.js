import React from 'react'

class Carousel extends React.Component{
  state = {
    photos: [],
    active: 0
  };

  render() {
    const {photos, active } = this.state;

    return (
      <div className='carousel'>
        <img src={photos[active]} alt='animal'/>
        <div className='carousel-small'>
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndecClick}
              data-index={index}
              src={photo}
              className={index === active? 'active'  : ''}
              alt='animal thumbnail'
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;