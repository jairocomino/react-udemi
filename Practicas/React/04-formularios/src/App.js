import logo from './logo.svg';
import './App.css';
import FormularioComponent from './Components/FormularioComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <FormularioComponent />

      </header>
    </div>
  );
}

export default App;
