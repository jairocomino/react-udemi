import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './components/MiPrimerEstado';
import { UseEsTateComponent } from './components/UseEsTateComponent';
import FechasComponets from './components/FechasComponets';

function App() {
  const anoActual1 = new Date().getFullYear();
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>EL estado en React - Hook useState</h1>
         <MiPrimerEstado />
         <UseEsTateComponent />
        <h2>Ejercicios</h2>
        <FechasComponets anoActual={anoActual1} />
      </header> 
        
    </div>


   
    </>
  );
}

export default App;
