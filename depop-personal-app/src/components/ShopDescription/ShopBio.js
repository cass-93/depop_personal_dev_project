import React from 'react';
import './ShopBioStyles.css';

const ShopDescription = (props) => {
    return (
        <div className="shop-description">
            {props.children}
        </div>
    );
}

export default ShopDescription;