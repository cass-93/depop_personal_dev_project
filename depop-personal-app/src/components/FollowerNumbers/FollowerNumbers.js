import React from 'react';
import './FollowerNumbersStyle.css'

const FollowerNumbers = (props) => {
    return (
        <div className="followers-container">
            {props.children}
        </div>

    );
}

export default FollowerNumbers;