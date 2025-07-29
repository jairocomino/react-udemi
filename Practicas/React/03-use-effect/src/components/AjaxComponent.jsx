import React, { useState } from 'react'
import { useEffect } from 'react'
import { traerData } from '../helpers/Traerdata'

const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([])
    const [cargando, setcargando] = useState(true)    
    const [errores, seterrores] = useState("")

//     const getUsuariosEstaticos = () => {
//         setUsuarios([   {
// "id": 7,
// "email": "michael.lawson@reqres.in",
// "first_name": "Michael",
// "last_name": "Lawson",
// "avatar": "https://reqres.in/img/faces/7-image.jpg"
// },
// {
// "id": 8,
// "email": "lindsay.ferguson@reqres.in",
// "first_name": "Lindsay",
// "last_name": "Ferguson",
// "avatar": "https://reqres.in/img/faces/8-image.jpg"
// },
// {
// "id": 9,
// "email": "tobias.funke@reqres.in",
// "first_name": "Tobias",
// "last_name": "Funke",
// "avatar": "https://reqres.in/img/faces/9-image.jpg"
// },
//         ])
//     }

  useEffect(() => {



        // Llamada a la función para obtener usuarios estáticos
        // getUsuariosEstaticos();

        // Llamada a la función para obtener usuarios desde la API modo asíncrono pro
        const getUsuarios =  () => {
            setTimeout(async() => {
                try {
                    // const data = await traerData("https://reqres.in/api/users?page=2");
                     const data = await traerData("https://reqres.in/api/users?page=2u");
                        // Si la API devuelve un objeto con la propiedad "data", accede a ella
                        setUsuarios(data && data.data ? data.data : []);
                        setcargando(false); // Cambia el estado de cargando a false una vez que los datos se han obtenido
                } catch (error) {
                    console.error('Error fetching users:', error);
                    seterrores(error.message); // Guarda el mensaje de error en el estado
                    setUsuarios([]); // En caso de error, establece usuarios como un array vacío    
                    setcargando(false); // Cambia el estado de cargando a false
                }
            }, 5000); // Simula un retraso de 5 segundos
        };
        getUsuarios();
    }, []);
if (errores !== "") {
    return (
        <>
            <h1>Error al cargar los datos</h1>
            <p>En concreto: {errores}</p>
        </>
    )}else if (cargando==true && usuarios.length === 0) {

    return (
        <div>
            cargando datos
        </div>
        )
    }else if (cargando === false && usuarios.length > 0) {
    ///todo IDO BIEN
  return (
    <>
        <h1>Ajax Component</h1>
            <h2>Listado de usuarios via Ajax</h2>
            <ol>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>   
                        {usuario.first_name} {usuario.last_name} - {usuario.email} - <img src={usuario.avatar} width="20" alt="avatar" />
                    </li>
                ))}
            </ol>
    </>
  )
}
}

export default AjaxComponent