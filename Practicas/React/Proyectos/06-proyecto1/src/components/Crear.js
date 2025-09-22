import React, { useState } from 'react'
import { guardarEnEstorage } from '../helpers/guardarEnEstoraje';

const Crear = ({setPeliculas}) => {
  const tituloComp = "Añadir Pelicula";

   const [pelicula, setPelicula] = useState({
    titulo: "",
    descripcion: ""
  });
 const {titulo, description} = pelicula;

  const conseguirDatosForm = e => {
    e.preventDefault();
    console.log("Formulario enviado");
    // Recoger los datos del formulario
    let pelicula = e.target;
    let titulo = pelicula.titulo.value;
    let description = pelicula.description.value;

    // Crear objeto de la película
    let peliculaObj = {
      id: new Date().getTime(),
      titulo,
      description
    };
    // Actualizar el estado
    setPelicula(peliculaObj);
    // Actualizar el estado del listado principal
    setPeliculas(elementos=>{ return[...elementos, peliculaObj]});
    // Guardar en el localstorage
    guardarEnEstorage(peliculaObj,"pelis");

    // Resetear el formulario
    e.target.reset();
   
  }

  // const guardarEnEstorage=pelicula=>{

  //   //conseguir elementos
  //   let items = JSON.parse(localStorage.getItem("pelis"));
  //   //comprovar si esd un array
  //   if(Array.isArray(items)){
  //     //añadir la nueva pelicula
  //     items.push(pelicula);
  //   }else{
  //     //crear array y añadir la pelicula
  //     items = [pelicula];
  //   }
  //   //guardar   el array en el localstorage
  //   localStorage.setItem("pelis", JSON.stringify(items));

  //      return  pelicula
  // }

  return (
   <>
    <div className="add">
            <h3 className="title">{tituloComp}</h3>
            <strong>
               {(titulo && description) && "Has creado la película: " + titulo}
            </strong>
            <form action="#"  onSubmit={conseguirDatosForm}>
              
              <input type="text" 
                placeholder="Título de la película" 
                id='titulo'
                name='titulo'
           
                required />

              <textarea  
                id='description'
                placeholder="Descripción" 
                name='description'
              
                required
                > 

                </textarea>

              <button 
                type="submit"
                id='save'>
                Añadir
              </button>

            </form>
          </div>
   </>
  )
}

export default Crear