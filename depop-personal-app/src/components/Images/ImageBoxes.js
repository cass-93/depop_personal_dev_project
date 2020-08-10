import React from 'react';
import './ImageBoxesStyles.css';

const ImageBoxes = (props) => {
    return(
        <div className="image-boxes">
            {props.children}
        </div>
    );
}

export default ImageBoxes;