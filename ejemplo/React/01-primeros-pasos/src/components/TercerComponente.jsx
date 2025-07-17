import React from 'react'

const TercerComponente = (props) => {
    console.log(props);
    //bariables

  return (
    <>
        <div>
            <h2>Comunicacion entre componentes</h2>
            <ul>
                <li>Nombre: {props.nombre}</li>
                <li>Apellido: {props.apellido}</li>
                <li>Altura: {props.ficha_medica.altura}</li>
                <li>Peso: {props.ficha_medica.peso}</li>
                <li>Edad: {props.ficha_medica.edad}</li>
                <li>Grupo Sanguíneo: {props.ficha_medica.grupo_sanguineo}</li>
                <li>Alergias: {props.ficha_medica.alerguias.join(', ')}</li>
            </ul>
        </div>
   

    
    </>
  )
}

export default TercerComponente