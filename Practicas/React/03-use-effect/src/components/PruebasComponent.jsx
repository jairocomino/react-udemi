import React, { useEffect, useState } from 'react'
import AvisoComponente from './AvisoComponente';

const PruebasComponent = () => {
   const [usuario, setusuario] = useState("Jairo David");
  const [fecha, setfecha] = useState("2023-10-01");
  const [contador, setContador] = useState(0);


  useEffect(() => {
    console.log("Componente montado o actualizado o has actualizado fecha o usuario ");},[]);///solo se ejecuta al cargar el componente esdecir una vez+

//se ejecuta cada vez que se actualiza el usuario
  useEffect(() => {
    console.log("El usuario ha cambiado a:", usuario);  
    setContador(contador + 1); // Incrementa el contador cada vez que cambia el usuario
    console.log("Contador actualizado:", contador);
  }, [usuario]); // Dependencia: usuario
//se ejecuta cada vez que se actualiza la fecha
  useEffect(() => {
    console.log("La fecha ha cambiado a:", fecha);
  }, [fecha]); // Dependencia: fecha
//se ejecuta cada vez que se actualiza el usuario o la fecha
  useEffect(() => {
    console.log("El usuario o la fecha han cambiado");
     setContador(contador + 1); // Incrementa el contador cada vez que cambia el usuario
    console.log("Contador actualizado:", contador);
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
       <strong className={contador>=10 ? 'label label-green' :'label'}>{usuario}</strong>
        <strong>{fecha}</strong>
       <p>
        <input type="text" 
                    onChange={e=>modusuario(e,e.target.value)} 
                    placeholder='Cambiar nombre' />

                    <button onClick={e=>cambiarfecha(e)}>Cambiar fecha</button>
       </p>

       {/* {contador>=20 && <AvisoComponente />} */}
       {usuario == "Jairo David" && <AvisoComponente />}
       
    </>
  )
}

export default PruebasComponent