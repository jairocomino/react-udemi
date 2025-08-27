const saludar =new Promise((resolve, reject) => {   
    setTimeout(() => {
        let saludo= "Hola muy buenas tardes a todos";
         let saludo2= false;
        if (saludo) {
            resolve(saludo);
        } else {
            reject("No se pudo saludar");   
        }
        },200)
    })


saludar.then((mensaje) => {
    alert(mensaje);
    console.log(mensaje);   })

.catch((error) => {
    console.error(error);
});