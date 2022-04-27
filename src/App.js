import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [gameActive, setGameState] = useState(false)
  const [arrows, setArrows] = useState([])
  const [arrowsCleared, setArrowsCleared] = useState(0)
  const [level, setLevel] = useState(0)

  let directions = ['u', 'd', 'l', 'r']

  // componentDidMount: set up key listener
  useEffect(
    () => {
      document.addEventListener("keydown", arrowPress);

      // remove event listener on cleanup
      return () => {
        document.removeEventListener("keydown", arrowPress);
      };
    },
  );

  // level updated handler
  useEffect(() => {
    if (level > 0) {
      startLevel()
    }
  }
  , [level])

  // arrows cleared update handler
  useEffect(() => {
    function passLevel() {
      console.log("LEVEL PASSED")
      resetArrows()
      setLevel(l => l + 1)
    }
    
    if (arrows.length > 0 && arrowsCleared === arrows.length) {
      passLevel()
    }
    }, [arrowsCleared, arrows])
  
  function failLevel() {
    setGameState(false)
    console.log("LEVEL FAILED")
    resetArrows()
    setLevel(0)
  }

  // key press handler
  function arrowPress(event) {
    let correct = false;
    if (!gameActive) {
      return
    }
    
    switch (event.key) {
      case "ArrowLeft":
        if (arrows[arrowsCleared] === 'l') {
          correct = true;
        }
        break;
      case "ArrowRight":
        if (arrows[arrowsCleared] === 'r') {
          correct = true;
        }
        break;
      case "ArrowUp":
        if (arrows[arrowsCleared] === 'u') {
          correct = true;
        }
        break;
      case "ArrowDown":
        if (arrows[arrowsCleared] === 'd') {
          correct = true;          
        }
        break;
      default:
        console.log("non arrow key pressed")
        break;  
    }

    if (correct) {
      setArrowsCleared(arrowsCleared + 1)
    } else {
      failLevel()
    }
  }

  function startLevel() {
    let numArrows = level+2
    setGameState(true)
    console.log("Level started");
    
    let levelArrows = []

    for (let i = 0; i < numArrows; i++) {
      let rand = Math.floor(Math.random() * 4)
      levelArrows.push(directions[rand])
    }
    
    setArrows([...arrows, ...levelArrows]);  
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
        <button className="start-button" onClick={() => setLevel(1)} disabled={gameActive}>
          START BUTTON
        </button>
        <ArrowContainer arrows={arrows} arrowsCleared={arrowsCleared} />
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
        if (i < props.arrowsCleared) {
          return <Arrow direction={dir} key={i} pressed={true}/>;
        }
        else {
          return <Arrow direction={dir} key={i} pressed={false}/>;
        }
      })}
    </div>
  )
}

function Arrow(props) {
  let arrowSymbol = ''
  if (props.direction === 'l') {
    arrowSymbol = '←';
  }
  if (props.direction === 'r') {
    arrowSymbol = '→';
  }
  if (props.direction === 'd') {
    arrowSymbol = '↓';
  }
  if (props.direction === 'u') {
    arrowSymbol = '↑';
  }
  return (
    <div className={props.pressed ? "arrow-pressed" : "arrow"}>
      {arrowSymbol}
    </div>
  )
}

export default App;
