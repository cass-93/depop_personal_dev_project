import React from 'react';
import avatar from '../../avatar-1@2x.png';
import './Avatar.css'

const Avatar = () => {
    return (
        <img src={avatar} className="avatar" alt="user-Avatar" />
    )

}


export default Avatar;