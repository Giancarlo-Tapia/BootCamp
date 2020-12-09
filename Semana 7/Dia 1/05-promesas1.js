/**
 * 
 * Una promesa es una estructura que nos ayuda a esperar
 * un resultado tras la ejecución de una función asíncrona
 */

 /**
  * Función que recibe un número dni
  * y retorna una PROMESA que contiene el usuario encontado
  * @param {*} dni 
  */


const buscarPorDni = (dni) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Jorge Garnica Blanco");
    }, 1500);
})
};

buscarPorDni("45274230").then((usuario) => {
    console.log(usuario);
    document.getElementById("resultado").innerText = usuario;
})