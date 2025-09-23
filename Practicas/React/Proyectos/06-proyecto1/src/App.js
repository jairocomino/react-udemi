import React, { useState } from 'react';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Crear from './components/Crear';

function App() {
const [peliculas, setPeliculas] = useState([])





  return (
    <>
      <div className="layaut">
        {/* Header Section */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>MisPelisTV</h1>
        </header>

        {/* Navigation Menu */}
        <nav className="nav">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="peliculas.html">Peliculas</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </nav>

        {/* Main Content Section */}
        <section className="content">
          {/* LISTADO DE PELICULAS */}
            <Listado peliculas={peliculas} setPeliculas={setPeliculas}/>
        </section>

        {/* Sidebar Section */}
        <aside className="lateral">
          {/* BUSCADOR */}
             <Buscador peliculas={peliculas}  setPeliculas={setPeliculas} />

          {/* AÑADIR PELICULA */}
          <Crear setPeliculas={setPeliculas} />
        </aside>

        {/* Footer Section */}
        <footer className="footer">
          &copy; 2023 MisPelisTV. Master en Javascript ES12 y TypeScript con Jairo - 
          <a href="https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/learn/lecture/30517822#content" target="_blank" rel="noopener noreferrer"> Udemy</a>
        </footer>
      </div>
    </>
  )
}

export default App;
