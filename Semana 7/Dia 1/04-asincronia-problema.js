
const buscarPorDni = (dni) => {
//Tiempo de demora de buscar el dni en la base de datos. ejm: 300ms
let respuesta = "nada";
setTimeout(() => {
respuesta = "Jorge Garmnica";
}, 300);
return respuesta; 
}

let nombre = buscarPorDni ("45274230");
console.log(nombre);