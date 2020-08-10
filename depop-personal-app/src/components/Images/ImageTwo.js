import React from 'react';
import imagetwo from '../../item.jpg'
import './ImageTwoStyles.css';

const ImageTwo = () => {
    return(
        <img src={imagetwo} className="image-two" alt="item two" width="245" height="245"
            sizes="
            (max-width: 576px) 150px, 
            (max-width: 1024px) 245px, 
            (min-width: 1024px) 220px
            "
        />
    )
}

export default ImageTwo;