import React from 'react';
import './index.css';


const SecretWord = (props) => {
    return (
        <div className="secretWord">
            <div className="letters">
                {props.children}
            </div>   
        </div>
    )
}

export default SecretWord;