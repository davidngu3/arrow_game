import './App.css';

function App() {
  return (
        <div className="app-container">
          <div className="title-bar">
            ARROW GAME
          </div>
          <ArrowContainer />
          <div className="space-button">
            SPACE
          </div>
        </div>
  );
}

function ArrowContainer() {
  return (
    <div className="arrow-container">
      ARROW CONTAINER
    </div>
  )
}

export default App;
