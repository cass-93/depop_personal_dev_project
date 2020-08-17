import React from 'react';
import './FollowsContainerStyles.css';

const FollowsContainer = (props) => {
    return (
        <div className="follows-container">
            {props.children}
        </div>
    );
}

export default FollowsContainer 