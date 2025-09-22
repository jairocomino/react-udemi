import React, { useEffect, useState } from 'react'

import EditarPeli from './EditarPeli';

const Listado = ({peliculas,setPeliculas}) => {
// const [peliculas, setPeliculas] = useState([])
const [editar, setEditar] = useState(0)

const  conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    console.log(peliculas);
    console.log("Peliculas cargadas del localStorage");
    setPeliculas(peliculas);
    return peliculas;
}

const handledEliminar = (id) => {
 
  ///conseguir peliculas almacenadas 
  let pelis_almacenadas = conseguirPeliculas();
  ///filtrar las peliculas para eliminar la que no quiero
  let nuevas_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
  // actualizar estado principal y localstorage
  console.log(nuevas_pelis);
  setPeliculas(nuevas_pelis);
  localStorage.setItem("pelis", JSON.stringify(nuevas_pelis));
  // clg de confirmacion
  console.log("Eliminar pelicula"); 
}


useEffect(() => {
  conseguirPeliculas();
}, [])


  return (
    <>
      {/* si hay peliculas*/}
      {peliculas !=null ?
          //map para recorrer  las pelis
           peliculas.map((peli, i) => {

        return (
            <article className="peli-item" key={peli.id}>
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.description}</p>
            <button className="edit" onClick={()=>setEditar(peli.id) }>Editar</button>
            <button className="delete" onClick={ ()=>handledEliminar(peli.id)}>Eliminar</button>
              {/* Formulario de edicion    */ }
              {editar === peli.id && (
                  <EditarPeli />              
              )}

          </article>);
      })
          // si no hay peliculas
        : <h2>No hay peliculas para mostrar</h2>
      }
         
    </>
  )
}

export default Listado