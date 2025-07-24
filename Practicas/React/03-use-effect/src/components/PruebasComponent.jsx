import React, { useEffect, useState } from 'react'

const PruebasComponent = () => {
   const [usuario, setusuario] = useState("Jairo David");
  const [fecha, setfecha] = useState("2023-10-01");


  useEffect(() => {
    console.log("Componente montado o actualizado o has actualizado fecha o usuario ");},[]);///solo se ejecuta al cargar el componente esdecir una vez+

//se ejecuta cada vez que se actualiza el usuario
  useEffect(() => {
    console.log("El usuario ha cambiado a:", usuario);  
  }, [usuario]); // Dependencia: usuario
//se ejecuta cada vez que se actualiza la fecha
  useEffect(() => {
    console.log("La fecha ha cambiado a:", fecha);
  }, [fecha]); // Dependencia: fecha
//se ejecuta cada vez que se actualiza el usuario o la fecha
  useEffect(() => {
    console.log("El usuario o la fecha han cambiado");
  }, [usuario, fecha]); // Dependencias: usuario y fecha  


    const modusuario = (e, valor) => {
        e.preventDefault(); // Evita el comportamiento por defecto del evento
        setusuario(valor);
        console.log("Usuario cambiado a :", valor);
    }

    const cambiarfecha = (e) => {
      e.preventDefault(); // Evita el comportamiento por defecto del evento
        const fecha2 = Date.now();
        setfecha(fecha2);
        console.log("Fecha actualizada:", fecha);
      
      } 

  return (
    <>
       <h1>El efecto- Hook useEffect</h1>
       <strong className='label'>{usuario}</strong>
        <strong>{fecha}</strong>
       <p>
        <input type="text" 
                    onChange={e=>modusuario(e,e.target.value)} 
                    placeholder='Cambiar nombre' />

                    <button onClick={e=>cambiarfecha(e)}>Cambiar fecha</button>
       </p>
       
    </>
  )
}

export default PruebasComponent