import React from 'react';
import imagefive from '../../item.jpg'
import './ImagesStyling.css';

const ImageFive = () => {
    return(
        <img src={imagefive} className="images-styling" alt="item three" width="245" height="245"
            sizes="
            (max-width: 576px) 150px, 
            (max-width: 1024px) 245px, 
            (min-width: 1024px) 220px
            "
        />
    )
}

export default ImageFive;