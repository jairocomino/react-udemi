import React, { useEffect } from 'react'

const AvisoComponente = () => {

    useEffect(() => {
        // Este efecto se ejecuta una vez cuando el componente se monta
        console.log("Componente AvisoComponente montado");
        alert("Componente AvisoComponente montado");  
        //después de mostrar la alerta, puedes realizar otras acciones si es necesario
        return () => {
            // Este efecto se ejecuta cuando el componente se desmonta
            console.log("Componente AvisoComponente desmontado");
            alert("Componente AvisoComponente desmontado");
        }
        ;
    }, []);//se ejecuta solo una vez al montar el componente

    
  return (
   <>
   <hr/>
    <div>
        <h2>Componente AvisoComponente</h2>
            <h2>
                Saludos Jairo
            </h2>
            <button onClick={e => alert("Alerta desde AvisoComponente , bienvenido Jairo")}>
                Mostrar alerta
            </button>

    </div>
   
   </>
  )
}

export default AvisoComponente