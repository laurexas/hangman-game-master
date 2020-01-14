import React, {useState, useEffect} from 'react';
import './index.css';
import Hangman from '../Hangman/Hangman';
import Stats from '../Stats/Stats';
import axios from 'axios';
import Loader from '../Loader/Loader';

const Game = () => {
    const fetchData = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
        const coinName = response.data[Math.floor(Math.random() *  response.data.length -1)].name;
        setSecretWord(coinName.toLowerCase())
    }

    useEffect(() => {
        fetchData();
    }, [])

    const [lifes,setLifes] = useState(6);
    const [mistakes, setMistakes] = useState(0);
    const [guessedLetters, setGuess] = useState(new Set([]));
    const [secretWord, setSecretWord] = useState('');
    const gameFinished = lifes <= 0 ? true : false;
    const items = secretWord.split('').map((item,i) => guessedLetters.has(item) ? item : "_");
    const winner = items.map(item => item).includes('_');
    const loading = secretWord === '' ? true : false;
   
    if(loading) {return <Loader loading={true} />}

    const handleClick = (letter) => {
        const newState = new Set(guessedLetters);
        newState.add(letter);
        setGuess(newState);
        setMistakes(mistakes + (secretWord.includes(letter) ? 0 : 1));
        setLifes(lifes - (secretWord.includes(letter) ? 0 : 1))
    }  

    const handleReset = () => {
        setMistakes(0);
        setLifes(6);
        setGuess(new Set([]))
        fetchData()
    }



    return (
        <div className="container">
           <Hangman mistakes={mistakes}/>
           <Stats onClick={() => handleReset()} winner={winner} lifes={lifes} secretWord={secretWord} guessedLetters={guessedLetters} gameFinished={gameFinished} handleClick={handleClick} items={items}/>
        </div>
    )
}

export default Game;