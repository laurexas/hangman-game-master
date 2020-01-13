import React from 'react';
import './index.css';
import Icon from '../Icon/Icon';


const InfoMsg = (props) => {
    return (
        <div style={props.style}>
            <p className="lost-msg">{props.value}</p>
            <Icon icon={props.icon} />
        </div>
    )
}

export default InfoMsg;