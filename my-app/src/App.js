import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="game-container">
        <div className="title-bar">
          ARROW GAME
        </div>
        <button className="start-button">
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
