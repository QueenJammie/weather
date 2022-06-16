import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="mt-3 ms-2"><img src={logo} className="App-logo" alt="logo" width="50px" /> React Weather app.</p>
        <Weather />
      </header>
    </div>
  );
}

export default App;
