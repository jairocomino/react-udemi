import logo from './logo.svg';
import './App.css';
import ComponeteEjemplo from './components/ComponeteEjemplo';
import SegundoComponente from './components/SegundoComponente';
import TercerComponente from './components/TercerComponente';

function App() {
  const ficha_medica = {altura: 1.75, peso: 70, edad: 30,grupo_sanguineo: "O+", alerguias: ["pollen", "dust"]};
  const nombre = "Jairo David";
  const apellido = "Comino Ruiz";
  return (
  // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"dd
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
  // </div>

  <>


   <ComponeteEjemplo  />
   <hr />
   <SegundoComponente />
    <hr />
    <TercerComponente 
      nombre={nombre}
      apellido={apellido} 
      // tambien sepuede asin si son solo datos sueltos apellido="comino ruiz"
      ficha_medica={ficha_medica}
     />
  </>
  );
}

export default App;
