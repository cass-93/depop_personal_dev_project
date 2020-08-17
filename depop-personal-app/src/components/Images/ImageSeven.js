import React from 'react';
import imageseven from '../../item.jpg'
import './ImagesStyling.css';

const ImageSeven = () => {
    return(
        <img src={imageseven} className="images-styling" alt="item three" width="245" height="245"
            sizes="
            (max-width: 576px) 150px, 
            (max-width: 1024px) 245px, 
            (min-width: 1024px) 220px
            "
        />
    )
}

export default ImageSeven;