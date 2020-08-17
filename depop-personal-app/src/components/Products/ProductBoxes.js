import React from 'react';
import './ProductBoxesStyles.css';

const ProductBoxes = (props) => {
    return (
        <div className="product-boxes">
            {props.children}
        </div>
    );
}

export default ProductBoxes;