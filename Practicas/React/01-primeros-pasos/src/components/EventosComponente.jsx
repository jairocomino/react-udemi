import React, { useState } from 'react'
import './App.css';
const EventosComponente = () => {
 // Estado para manejar el valor del input   
 const [N, setn] = useState("");
 const [M, setm] = useState("");
const [seleccion, setSeleccion] = useState("");
// Variable para almacenar un nombre
 const nombre = "Jairo David";

 // Manejo de eventos en React
    // Puedes usar eventos como onClick, onMouseOver, onChange, etc.
 const handleClick = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del botón
    console.log("Botón clickeado");
    alert(`El valor ingresado es: ${N}`);
    }

    const hasDadoClick = (e, nombre) => {
        e.preventDefault(); // Evita el comportamiento por defecto del botón
        console.log("Botón clickeado con parámetro");
        alert(`El nombre es: ${nombre}`);
    }

    const hasEntrado = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del evento  
        console.log("Has entrado en la caja con el mouse");
        alert("Has entrado en la caja");
    }

    const hasSalido = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del evento  
        e.stopPropagation(); // Evita que el evento se propague a otros elementos
        console.log("Has salido de la caja con el mouse");
        alert("Has salido de la caja");
    }

    const hasAcionado = (e, metodo) => {
        e.preventDefault(); // Evita el comportamiento por defecto del evento
        e.stopPropagation(); // Evita que el evento se propague a otros elementos
        console.log("Has accionado la caja con el mouse");
        alert(`Has accionado la caja con el mouse usando el método: ${metodo}`);
    }


  return (
    <>
    <div>
        <h2>Eventos en React</h2>
        {/* Evento click */}
        <button onClick={() => alert('¡Hola, mundo!')}>Haz clic aquí</button>

        {/* Evento onMouseOver */}
        <button onMouseOver={() => console.log('El mouse está sobre el botón')}>Pasa el mouse por aquí</button>

        {/* Evento onChange */}
        <input 
            type="text"
            value={N}
            onChange={(e) => setn(e.target.value)}
            placeholder="Escribe algo aquí"
        />
         {/* Evento click */}
        <button onClick={handleClick()}>Haz clic aquí</button>
          {/* Evento click con parametro */}
        <button onClick={e=> hasDadoClick(e,nombre)}>Haz clic aquí</button>
        {/* Evento onSubmit */}
        <form onSubmit={(e) => {
            e.preventDefault(); // Evita el comportamiento por defecto del formulario
            console.log('Formulario enviado');
            alert(`El valor ingresado es: ${N}`);
        }}>
            <input
                type="text"
                value={M}
                onChange={(e) => setm(e.target.value)}
                placeholder="Escribe algo aquí"
            />
            <button type="submit">Enviar</button>
        </form>
        {/* Evento onFocus */}
        <input
            type="text"
            onFocus={() => console.log('El campo de texto ha sido enfocado')}
            onBlur={() => console.log('El campo de texto ha perdido el foco')}
            placeholder="Enfoca este campo"
        />
        {/* Evento onKeyPress */}
        <input
            type="text"
            onKeyPress={(e) => {        
                if (e.key === 'Enter') {
                    console.log('Se presionó la tecla Enter');
                    alert(`Has presionado Enter con el valor: ${N}`);
                } else {
                    console.log(`Tecla presionada: ${e.key}`);
                }
            }}
            placeholder="Presiona una tecla"
        />
        {/* Evento onDoubleClick */}
        <button onDoubleClick={() => console.log('Botón doble clickeado')}>
            Doble clic aquí
        </button>
        {/* Evento onContextMenu */}
        <div onContextMenu={(e) => {
                e.preventDefault(); // Evita el menú contextual por defecto
                console.log('Menú contextual abierto');
                alert('Menú contextual personalizado');
            }} style={{ width: '200px', height: '200px', backgroundColor:
                '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Haz clic derecho aquí
        </div>
        {/* Evento onDrag */}
        <div
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', 'Este es un texto arrastrable');
                console.log('Arrastre iniciado');
            }}
            onDragOver={(e) => {
                e.preventDefault(); // Permite el arrastre sobre este elemento
                console.log('Arrastre sobre el elemento');
            }}
            onDrop={(e) => {
                e.preventDefault(); // Evita el comportamiento por defecto del drop
                const data = e.dataTransfer.getData('text/plain');
                console.log('Elemento soltado:', data);
                alert(`Elemento soltado: ${data}`);
            }}
            style={{ width: '200px', height: '200px', backgroundColor: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Arrastra algo aquí
           </div>
        {/* Evento onScroll */}
        <div
            onScroll={() => console.log('Se ha hecho scroll')}
            style={{ width: '200px', height: '200px', overflowY: 
            'scroll', backgroundColor: '#e0e0e0', padding: '10px' }}>
            <p>Contenido para hacer scroll</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut </p>    
            <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
            <p>Integer in mauris eu nibh. Nullam mollis. Etiam vel erat sed augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.</p>
            <p>Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.</p>
            <p>Donec lacus nunc, viverra nec, blandit vel, egestas et   </p>
             <p>Contenido para hacer scroll</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut </p>    
            <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
            <p>fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>
            <p>Integer in mauris eu nibh. Nullam mollis. Etiam vel erat sed augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.</p>
            <p>Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.</p>
            <p>Donec lacus nunc, viverra nec, blandit vel, egestas et   </p>
        </div> 
        
      

{/* Evento onChange para un select */}
   <div>
        <select
            value={seleccion}
            onChange={(e) => setSeleccion(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
                <option value="opcion4">Opción 4</option>
                <option value="opcion5">Opción 5</option>
        </select>
        <p>Opción seleccionada: {seleccion}</p>
    </div> 


         <div id='caja'onMauseEnter={ hasEntrado()}
            onMouseLeave={hasSalido()}>
                {/*Evento onMouseEnter onMouseLeave  */}
                <p>Este es un ejemplo de caja con eventos onMouseEnter y onMouseLeave</p>
                <h2>Pasa por  encima</h2>
                 
            </div>       

                  <div id='caja'onMauseEnter={ hasAcionado("Entrado")}
            onMouseLeave={hasAcionado("Salido")}>
                {/*Evento onMouseEnter onMouseLeave  */}
                <p>Este es un ejemplo de caja con eventos onMouseEnter y onMouseLeave</p>
                <h2>Pasa por  encima</h2>
                 
            </div>

            


    </div>

    
    </>
    
  )
}

export default EventosComponente