import React from 'react';
import imagethree from '../../item.jpg'
import './ImagesStyling.css';

const ImageThree = () => {
    return(
        <img src={imagethree} className="images-styling" alt="item three" width="245" height="245"
            sizes="
            (max-width: 576px) 150px, 
            (max-width: 1024px) 245px, 
            (min-width: 1024px) 220px
            "
        />
    )
}

export default ImageThree;