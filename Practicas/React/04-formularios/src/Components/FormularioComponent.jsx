import React, { useState } from 'react'

const FormularioComponent = () => {
    const [datosForm, setDatosForm] = useState({})
    


const cambiarDatos = e=> {
       
        console.log("cambiando datos", e.target);
        // Actualiza el estado con el valor del input modificado
        let name_del_imput = e.target.name; // Obtiene el nombre del input
        let datosForm_Para_Modificar = datosForm; // Copia el estado actual
        console.log("datosForm_Para_Modificar", datosForm_Para_Modificar);
        //foma corta de hacerlo
        // datosForm_Para_Modificar[name_del_imput] = e.target.value; // Actualiza el valor del input modificado

   
        setDatosForm(estado_previo =>({
            
                ...estado_previo, // Mantiene los valores anteriores
                [name_del_imput]: e.target.value // Actualiza el valor del input modificado
            
                })
        ); // Actualiza el estado con los datos modificados

        // forma larga de hacerlo
        // if (name_del_imput === "nombre") {
        //     datosForm_Para_Modificar.nombre = e.target.value; // Actualiza el nombre
        // }
        // if (name_del_imput === "apellido") {

        // }
        // if (name_del_imput === "sexo") {

        // }
        // if (name_del_imput === "biografia") {

        // }


} 

const conseguirDatosFormulario = e => {
    e.preventDefault(); // Evita que el formulario se envíe y recargue
    let datos =e.target
    console.log(datos);
    console.log("Nombre: " + datos.nombre.value);
    console.log("Apellido: " + datos.apellido.value);
    console.log("Sexo: " + datos.sexo.value);
    console.log("Biografía: " + datos.biografia.value);
    let usario = {
        
                nombre: datos.nombre.value, 
                apellido: datos.apellido.value,
                sexo: datos.sexo.value,
                biografia: datos.biografia.value,
                enviar: datos.enviar.value
            
    };
    console.log("usuario :", usario);
    setDatosForm(usario); // Actualiza el estado con los datos del formulario


}

  return (
    <>
        <h1>Formularios con React</h1>
        
        {datosForm.enviar &&
            (
            <div className='info_usuario label-grey '>
                    <h2>Datos del Formulario</h2>
                    {datosForm.nombre} {datosForm.apellido} - es un : {datosForm.sexo} y su biografia es esta: <br /> <p>{datosForm.biografia}</p>
            </div>
            )
        }


        <form action=""  onSubmit={conseguirDatosFormulario}>
            <input type="text" name='nombre' onChange={cambiarDatos}    placeholder='Nombre' />
            <input type="text"  name='apellido'  onChange={cambiarDatos} placeholder='Apellido' />
            <select name="sexo" placeholder='Sexo'   onChange={cambiarDatos}  id="">
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>  
                <option value="otro">Otro</option>
            </select>
            <textarea name="biografia"     onChange={cambiarDatos}  placeholder='Biografia' id=""></textarea>
            <input type="submit" name='enviar' value="Enviar" />
        </form>
    
    </>
  )
}

export default FormularioComponent