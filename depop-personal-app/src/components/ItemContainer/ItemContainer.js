import React from 'react';
import './ItemContainerStyles.css'

const ItemContainer = (props) => {
    return (
        <div className="item-container">
            {props.children}
        </div>

    );
}

export default ItemContainer;