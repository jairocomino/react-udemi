import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FechasComponets = ({anoActual}) => {
    const [anoNuevo, setAnoNuevo] = useState(anoActual);

         // Validación manual por si el prop no es válido
    // if (typeof anoActual !== "number" || isNaN(anoActual)) {
    //     return <p style={{color: "red"}}>Error: El año debe ser un número y es requerido.</p>
    // }


    const siguientAno = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del evento
        setAnoNuevo(anoNuevo + 1);  
        console.log("Año cambiado a :", anoNuevo);
    }
    const anteriorAno = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del evento
        setAnoNuevo(anoNuevo - 1);  
        console.log("Año cambiado a :", anoNuevo);
    }

const anoEscrito = (e, valor) => {
    // Si el input está vacío, restablece al año actual
    if (valor === "") {
        setAnoNuevo(new Date().getFullYear());
        console.log("Año cambiado a :", new Date().getFullYear());
        return;
    }

    // Convierte el valor a número
    const numero = Number(valor);

    // Validación: solo números enteros positivos
    if (Number.isInteger(numero) && numero > 0) {
        setAnoNuevo(numero);
        console.log("Año cambiado a :", numero);
    } else {
        // Si no es entero, no actualiza el estado y muestra un mensaje
        alert("Por favor, introduce solo números enteros positivos.");
    }
}
    
  return (
    <>
        <h2>Ejercicio fechas con estados y eventos</h2>
       <strong className='label-green'>Año actual: {anoNuevo}</strong>
       <p>
        <button  onClick={e=>siguientAno(e)} className='siguiente'>Pasar siguiente año</button>
        <button  onClick={e=>anteriorAno(e)} className='anterior'>Anterior año</button>
       </p>
        <input type="text" placeholder='Nuevo año' onChange={e=> anoEscrito(e,e.target.value)} />
    </>
  )
}

// Validación de props
FechasComponets.propTypes = {
    anoActual: PropTypes.number.isRequired
}

export default FechasComponets