import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [gameActive, setGameState] = useState(false)
  const [arrows, setArrows] = useState([])

  function startLevel(e) {
    console.log("Level started");
    setArrows([...arrows, 'u', 'd', 'l']);
    setGameState(true)
  }

  return (
    <div className="app-container">
      <div className="game-container">
        <div className="title-bar">
          ARROW GAME
        </div>
        <button className="start-button" onClick={startLevel} disabled={gameActive}>
          START BUTTON
        </button>
        <ArrowContainer arrows={arrows} />
        <div className="space-button">
          SPACE
        </div>
      </div>
    </div>
  );
}

function ArrowContainer(props) {
  // componentDidUpdate
  useEffect(() => {
    if (props.arrows.length > 0) {
      console.log('arrows have changed')
      for (let i = 0; i < props.arrows.length; i++) {
        console.log(props.arrows[i])
      }
    }
    
  }, [props.arrows]);

  return (
    <div className="arrow-container">
      {props.arrows.map(function(dir, i){
        return <Arrow direction={dir} key={i}/>;
      })}
    </div>
  )
}

function Arrow(props) {
  return (
    <div className="arrow">
      {props.direction}
    </div>
  )
}

export default App;
