import logo from './logo.svg';
import './App.css';
import MoonboardGrid from './components/MoonboardGrid';

function App() {
  return (
    <div className="App">
    <div className = "moonboard">
      <img src={require('./assets/moonboard.png')} />
    </div>
      <MoonboardGrid />
    </div>
  );
}

export default App;
