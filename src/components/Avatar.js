import React from 'react';
import './Avatar.css';

// avatar borders
const Avatar = (props) => {
    return (
        <section className="avatar-body">
            <img alt={props.avatarAlt} src={props.avatarUrl} className="avatar-img"/>
            <p>{props.name}</p>
        </section>
    )

};

export default Avatar;