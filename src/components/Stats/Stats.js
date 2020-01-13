import React from 'react';
import './index.css';
import InfoMsg from '../Notification/InfoMsg';
import SecretWordContainer from '../SecretWordContainer/SecretWordContainer';
import Keyboard from '../Keyboard/Keyboard';
import NotificationMsg from '../NotificationMsg/NotificationMsg';

const Stats = ({lifes,secretWord,guessedLetters, gameFinished, handleClick, winner, onClick}) => {
    const renderContent = (props) => {
        if(!gameFinished && winner) {
            return (
                <div>
                    <InfoMsg lifes={lifes} />
                    <SecretWordContainer secretWord={secretWord} guessedLetters={guessedLetters}  />
                    <Keyboard guessedLetters={guessedLetters} handleClick={handleClick}/>
                </div>
            )
        } else if(gameFinished) {
            return (
                <div>
                    Answer : {secretWord}
                    <NotificationMsg value="You Lost" icon="face" />
                    <button onClick={() => onClick()}>Try again</button>
                </div>
            )
        } else if(!winner) {
            return (
                <div>
                    <NotificationMsg value="You Won" icon="smile" />
                    <button onClick={() => onClick()}>Try again</button>
                </div>
            )
        }
    }
    return (
        <div className="stats">
            {renderContent()}
        </div>
    )
}

export default Stats;