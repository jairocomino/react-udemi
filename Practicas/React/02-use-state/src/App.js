import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './components/MiPrimerEstado';

import { UseEsTateComponent } from './components/UseEsTateComponent';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>EL estado en React - Hook useState</h1>
         <MiPrimerEstado />
         <UseEsTateComponent />
      </header> 
        
    </div>


   
    </>
  );
}

export default App;
