import React, { useState } from 'react'

const Buscador = ({peliculas ,setPeliculas}) => {

 const [busqueda, setbusqueda] = useState("");
 const [noEncontrado, setnoEncontrado] = useState(false);
  const buscarPelicula = (e) => {
    e.preventDefault();
// Estado del componente buscado
    setbusqueda(e.target.value);

//filtrar peli para buscar coinciderncias
let pelis_encontradas = peliculas.filter(peli => {
  return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
});

if(busqueda.length <=1 || pelis_encontradas <=0){
  pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
  setnoEncontrado(true);  
}else{
  setnoEncontrado(false);  
}

 

console.log(pelis_encontradas);
//actualizar estado del listado de peliculas
setPeliculas(pelis_encontradas);



}


  return (
    <> 
    
      <div className="search">
            <h3 className="title">Buscar Peliculas</h3>
            {(noEncontrado == true && busqueda.length > 1 ) && (
              <span className='no-encontrado'>No se han encontrado peliculas</span>
            )}
            <form  method="get">
              <input 
                type="text" 
                placeholder="Buscar..." 
                id='search_field'
                value={busqueda}
                name="search" 
                autoComplete="off"
                onChange={buscarPelicula}
                />
              <button type="submit">Buscar</button>
            </form>
          </div>
    
    </>
  )
}

export default Buscador