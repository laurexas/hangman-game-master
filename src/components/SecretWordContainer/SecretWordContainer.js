import React from 'react';
import './index.css';
import SecretWordButtons from '../SecretWordButtons/SecretWordButtons'; 

const SecretWordContainer = ({secretWord, guessedLetters}) => {

    const items = secretWord.split('').map((item,i) => {
        return <SecretWordButtons key={i}>{guessedLetters.has(item) ? item : "_"}</SecretWordButtons>
    })

   

    return (
        <div className="secret-word-container">
          {items} 
        </div>
    )
}

export default SecretWordContainer;