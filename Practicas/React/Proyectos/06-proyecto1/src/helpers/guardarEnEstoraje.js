  export const guardarEnEstorage=(item,clave)=>{

    //conseguir elementos
    let items = JSON.parse(localStorage.getItem(clave));
    //comprovar si esd un array
    if(Array.isArray(items)){
      //añadir el nuvo elemento
      items.push(item);
    }else{
      //crear array y añadir el item
      items = [item];
    }
    //guardar   el array en el localstorage
    localStorage.setItem(clave, JSON.stringify(items));
       return  item
  }
  