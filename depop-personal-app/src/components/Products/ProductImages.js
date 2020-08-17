import React from 'react';
import './ProductImagesStyles.css';

const ProductImages = (props) => {
    return (
        <div className="product-images">
            {props.children}
        </div>
    );
}

export default ProductImages;