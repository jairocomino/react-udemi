import React from 'react'

const Buscador = () => {
  return (
    <> 
    
      <div className="search">
            <h3 className="title">Buscar Peliculas</h3>
            <form action="#" method="get">
              <input type="text" placeholder="Buscar..." name="search" />
              <button type="submit">Buscar</button>
            </form>
          </div>
    
    </>
  )
}

export default Buscador