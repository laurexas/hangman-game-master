import React from 'react';
import {letters} from './utils';
import LetterButtons from '../LetterButtons/LetterButtons';
import './index.css';


const Keyboard = ({guessedLetters, handleClick}) => {

    const buttonLetters = letters.map((letter,i) => (
        <LetterButtons style={guessedLetters.has(letter) ? {display: 'none'} : null} key={i} value={letter} onClick={() => handleClick(letter)}/>
    ))

    return (
        <div className="keyboard">
            <div className="row">
                {buttonLetters}
            </div>
        </div>
    )
}

export default Keyboard;
