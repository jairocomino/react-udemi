import React, { useState } from 'react'

const MiPrimerEstado = () => {
// Este componente es un ejemplo básico de uso del hook useState
// Aquí puedes definir un estado inicial si es necesario

const [Nombre, setNombre] = useState("Jairo David");






  return (
    <>
    <h3>MiPrimerEstado </h3>
    <strong>Nombre:{Nombre} </strong>
    <input type="text"
        value={Nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nuevo  nombre aquí"     
    />
  
    
    </>
  )
}

export default MiPrimerEstado