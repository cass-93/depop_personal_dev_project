import React from 'react';
import './UserDetailsStyles.css';

const UserDetails = (props) => {
    return (
        <div className="user-details-container">
            {props.children}
        </div>
    );
}

export default UserDetails;