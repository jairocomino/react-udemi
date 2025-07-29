import React from 'react'
// se puede descomponer a sin ({nombre, apellido, ficha_medica}) => {
const TercerComponente = (props ) => {
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
export default TercerComponente;


// PropTypes para validar las propiedades del componente
// import PropTypes from 'prop-types'
// export default TercerComponente.prototype = {
//     nombre: PropTypes.string.isRequired,
//     apellido: PropTypes.string,
//     ficha_medica: PropTypes.shape({
//         altura: PropTypes.number,
//         peso: PropTypes.number,
//         edad: PropTypes.number,
//         grupo_sanguineo: PropTypes.string,
//         alerguias: PropTypes.arrayOf(PropTypes.string),
//     }).isRequired
// }


// Valores por defecto para las propiedades del componente
// import PropTypes from 'prop-types'
// TercerComponente.defaultProps = {
//     nombre: 'Sin nombre', 
//     apellido: 'Sin apellido',
//     ficha_medica: {
//         altura: 0,
//         peso: 0,      
//         edad: 0,
//         grupo_sanguineo: 'Sin grupo sanguíneo',
//         alerguias: []
//     }
// }