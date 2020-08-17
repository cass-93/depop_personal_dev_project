import React from 'react';
import imagesix from '../../item.jpg'
import './ImagesStyling.css';

const ImageSix = () => {
    return(
        <img src={imagesix} className="images-styling" alt="item two" width="245" height="245"
            sizes="
            (max-width: 576px) 150px, 
            (max-width: 1024px) 245px, 
            (min-width: 1024px) 220px
            "
        />
    )
}

export default ImageSix;