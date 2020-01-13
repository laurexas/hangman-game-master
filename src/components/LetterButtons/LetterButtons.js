import React from 'react';
import './index.css';

const LetterButtons = (props) => {
    return (
        <div style={props.style} onClick={props.onClick} className="LetterButtons">
            <span>{props.value}</span>
        </div>
    )
}

export default LetterButtons;