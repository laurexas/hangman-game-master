import React from 'react';
import './index.css';


const Hangman = ({mistakes}) => {
    return (
        <div className="hangman-container">
            <svg className="hangman">
                <polyline points="400,500 100,500 150,500 150,100 320,100 320,150" className="base"/>            
                {mistakes > 0 && <circle cx="320" cy="190" r="40" fill="black" />}
               {mistakes > 1 &&  <line x1="320" y1="190" x2="320" y2="360" className="character" />}
               {mistakes > 2 &&  <line x1="320" y1="260" x2="250" y2="230" className="character" />}
               {mistakes > 3 &&  <line x1="320" y1="260" x2="390" y2="230" className="character" />}
               {mistakes > 4 &&  <line x1="320" y1="360" x2="390" y2="450" className="character" />} 
               {mistakes > 5 &&   <line x1="320" y1="360" x2="250" y2="450" className="character" />}
            </svg>
        </div>
    )
}

export default Hangman;