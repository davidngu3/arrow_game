import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [gameActive, setGameState] = useState(false)
  const [arrows, setArrows] = useState([])
  const [arrowsCleared, setArrowsCleared] = useState(0)
  const [level, setLevel] = useState(1)

  let directions = ['u', 'd', 'l', 'r']

  // componentDidMount
  useEffect(
    () => {
      document.addEventListener("keydown", arrowPress);

      // remove event listener on cleanup
      return () => {
        document.removeEventListener("keydown", arrowPress);
      };
    },
  );

  function arrowPress(event) {
    console.log("curr arrows cleared: " + arrowsCleared)
    if (!gameActive) {
      return
    }
    switch (event.key) {
      case "ArrowLeft":
        if (arrows[arrowsCleared] === 'l') {
          console.log("successful left input")
          setArrowsCleared(arrowsCleared+1);
        }
        else {
          console.log("fail")
        }
        break;
      case "ArrowRight":
        if (arrows[arrowsCleared] === 'r') {
          console.log("successful right input")
          setArrowsCleared(arrowsCleared+1);
        }
        else {
          console.log("fail")
        }
        break;
      case "ArrowUp":
        if (arrows[arrowsCleared] === 'u') {
          console.log("successful up input")
          setArrowsCleared(arrowsCleared+1);
        }
        else {
          console.log("fail")
        }
        break;
      case "ArrowDown":
        if (arrows[arrowsCleared] === 'd') {
          console.log("successful down input")
          setArrowsCleared(arrowsCleared+1);
        }
        else {
          console.log("fail")
        }
        break;
      default:
        console.log("non arrow key pressed")
        break;  
    }
    console.log("arrows cleared: " + arrowsCleared + " arrowArr length: " + arrows.length)
    if (arrowsCleared === arrows.length) {
      clearLevel()
    }
  }

  function startLevel(numArrows) {
    setGameState(true)
    console.log("Level started");
    
    let levelArrows = []

    for (let i = 0; i < numArrows; i++) {
      let rand = Math.floor(Math.random() * 4)
      levelArrows.push(directions[rand])
    }
    
    setArrows([...arrows, ...levelArrows]);  
  }

  function clearLevel() {
    setGameState(false)
    console.log("LEVEL PASSED!.. resetting")
    resetArrows()
    setLevel(level + 1)
    console.log("LEVEL " + level)
  }

  function resetArrows() {
    setArrows([])
    setArrowsCleared(0)
  }

  return (
    <div className="app-container">
      <div className="game-container">
        <div className="title-bar">
          ARROW GAME
        </div>
        <button className="start-button" onClick={() => startLevel(3)} disabled={gameActive}>
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
