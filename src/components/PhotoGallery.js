import React, { Component } from 'react';
import ImagePopup from './ImagePopup.js';
import './PhotoGallery.css';

import blackSwallowTail from '../gallery/blackSwallowtail.jpg';
import dragonfly from '../gallery/dragonfly.jpg';
import cloud from '../gallery/cloud.JPG';
import fallTrees from '../gallery/fallTrees.jpg';
import lilacFlower from '../gallery/lilacFlower.jpg';
import magentaFlower from '../gallery/magentaFlower.jpg';
import monarch1 from '../gallery/monarch1.JPG';
import monarch2 from '../gallery/monarch2.JPG';
import orangeButterfly from '../gallery/orangeButterfly.jpg';
import pinkFlower1 from '../gallery/pinkFlower1.jpg';
import pinkFlower2 from '../gallery/pinkFlower2.jpg';
import whiteFlower3 from '../gallery/whiteFlower3.jpg';
import whiteFlowerBush from '../gallery/whiteFlowerBush.jpg';
import whiteFlowerPink from '../gallery/whiteFlowerPink.jpg';
import yellowFlower1 from '../gallery/yellowFlower1.JPG';
import yellowFlower2 from '../gallery/yellowFlower2.jpg';

class PhotoGallery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photos: [blackSwallowTail, dragonfly, orangeButterfly, whiteFlower3, cloud, fallTrees, 
              lilacFlower, magentaFlower, monarch1, monarch2, pinkFlower1, pinkFlower2,
              whiteFlowerBush, whiteFlowerPink, yellowFlower1, yellowFlower2],
    };
  }

  render() {
    const gallery = this.state.photos.map((img, index) => {
      return(
        <ImagePopup source={img} key={index}/>
      )
    });

    return(
      <div className='about-photos'>
        <div className='photos-container' >
          <h2>Here are some of my favorite photos (taken with my trusty phone)!</h2>
          
          <div className='photo-gallery' >
            {gallery}
          </div>
          <p className='photo-copyright'>All photos displayed above belong to me and
          are ©Connie Liu.</p>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;

