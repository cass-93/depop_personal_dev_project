import React from 'react';
import imageone from '../../item.jpg'
import './ImageOneStyles.css';

const ImageOne = () => {
    return (
        <img src={imageone} className="image-one" alt="item one" width="245" height="245"
            sizes="
            (max-width: 576px) 150px, 
            (max-width: 1024px) 245px, 
            (min-width: 1024px) 220px
            "
        />
    )
}

export default ImageOne;