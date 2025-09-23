import React from 'react'

const EditarPeli = ({peli,conseguirPeliculas,setEditar ,setPeliculas}) => {
  const titulo_componente = "Editar película";

const guardarEdicion = (e, id) => {
  e.preventDefault();
  console.log("Guardando edición de la película con id: " + id); 
  // conseguir datos del formulario
  let target = e.target;
  let titulo = target.titulo.value;
  let description = target.descripcion.value;
  console.log(titulo, description);

  // buscr indice en el listado de peliculas
  let pelis_almacenadas = conseguirPeliculas();
  console.log(pelis_almacenadas);
  const indice= pelis_almacenadas.findIndex(peli => peli.id === id);
  console.log(indice);

     // crear objeto de la pelicula a actualizar
  let peli_actualizada = {
    id:indice, 
    titulo: titulo,
    description : description
  };
  console.log(indice ,peli_actualizada);
  
// actualizar el elemento con ese indice
  pelis_almacenadas[indice] = peli_actualizada;
  console.log(pelis_almacenadas);
  // actualizar el estado del listado principal y el localstorage
  localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
  setPeliculas(pelis_almacenadas);
  setEditar(0);

}



  return (
    <>
    <div className="edit_form">
        <h3 className="title">{titulo_componente}:{peli.titulo} </h3>
        <form onSubmit={e=>guardarEdicion(e,peli.id)}>
            <input 
              type="text" 
              name="titulo" 
              className="titulo_editado"
              defaultValue={peli.titulo}
              />
            <textarea 
              name="descripcion" 
              className="descripcion_editada"
              defaultValue={peli.description}
              />
              
            <input 
              type="submit" 
              className="editar" 
              value="Actualizar"
              />

        </form>    
    </div>
    </>
  )
}

export default EditarPeli