import { useState } from 'react'
import './App.css';

function App() {
  const [gameActive, setGameState] = useState(false)

  function startGame(e) {
    setGameState(true)
    console.log("Game started")
  }

  return (
    <div className="app-container">
      <div className="game-container">
        <div className="title-bar">
          ARROW GAME
        </div>
        <button className="start-button" onClick={startGame} disabled={gameActive}>
          START BUTTON
        </button>
        <ArrowContainer />
        <div className="space-button">
          SPACE
        </div>
      </div>
    </div>
  );
}

function ArrowContainer() {
  return (
    <div className="arrow-container">
    </div>
  )
}

export default App;
