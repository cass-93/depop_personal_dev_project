import React from 'react';
import imagefour from '../../item.jpg'
import './ImagesStyling.css';

const ImageFour = () => {
    return(
        <img src={imagefour} className="images-styling" alt="item three" width="245" height="245"
            sizes="
            (max-width: 576px) 150px, 
            (max-width: 1024px) 245px, 
            (min-width: 1024px) 220px
            "
        />
    )
}

export default ImageFour;