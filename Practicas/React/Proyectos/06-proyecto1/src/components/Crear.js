import React from 'react'

const Crear = () => {
  return (
   <>
    <div className="add">
            <h3 className="title">Añadir Pelicula</h3>
            <form action="#" method="post">
              <input type="text" placeholder="Título de la película" name="title" required />
              <textarea placeholder="Descripción" name="description"></textarea>
              <button type="submit">Añadir</button>
            </form>
          </div>
   </>
  )
}

export default Crear