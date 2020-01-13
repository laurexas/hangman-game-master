import React from 'react';
import './index.css';


const InfoMsg = ({lifes}) => {
    return (
        <div className="text">
            <p>Tries left: <span className="tries">{lifes}</span></p>
        </div>
    )
}

export default InfoMsg;