import React from 'react';
import './App.css'
// import Keyboard from './components/Keyboard/Keyboard';
import Game from './components/Game/Game';
// import Row from './components/Row/Row';
// import {getSecretWord} from './store/actions/game/game';


const App = (props) => {
  return (
    <div className="app">
      <h1 className="title">HANGMAN GAME</h1>
      <h3>GUESS CRYPTO CURRENCY NAME</h3>
      <Game />
    </div>
  );
}


export default App;