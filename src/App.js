import React from 'react';
import './App.css'
import Game from './components/Game/Game';



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