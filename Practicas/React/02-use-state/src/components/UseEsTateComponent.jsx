import React, { useState } from 'react'

export const UseEsTateComponent = () => {
    const [Nombre, setNombre] = useState("Jairo David");

    const cambiarNombre = (e,nombrefijo) => {
        e.preventDefault(); // Evita el comportamiento por defecto del evento
          setNombre(nombrefijo);  
      
        console.log("Nombre cambiado a :", Nombre);
     ;
    }
  return (
    <>
    <h2>USESTATE CON EVENTOS</h2>

        <h3>MiPrimerEstado </h3>
    <strong>Nombre:{Nombre} </strong>
    <button onClick={e=> cambiarNombre(e,"Fran")} >Cambiar nombre por Fran </button>
   <input type="text" placeholder='cambiar nombre' onKeyUp={e=> cambiarNombre(e,e.target.value)} />
    
    </>
  )
}

