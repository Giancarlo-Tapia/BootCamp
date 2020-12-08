/**
 * 
 * Destructuración de objetos
 */

 let objMascota = {
     nombre: "Rufo",
     raza: "Dogo Argentino",
     edad: 4,
     colores: ["Blanco", "Café"]
 }

 let { nombre, raza } = objMascota;
 console.log(nombre);
console.log(raza);

/**
 * Destructurando la eda, en una nueva variable llamada "anios"
 * 
 */

 let { edad: anios } = objMascota;

 console.log(anios);

 let { colores } = objMascota;

 colores.forEach ((c) => {
     console.log(c);
 })

 /**
  * 
  * ¿Cómo se debe copiar un objeto correctamente?
  */

  let otraMascota = { ...objMascota };
  console.log(objMascota);
  console.log(otraMascota);

  objMascota.raza = "Bulldog"

  console.log(objMascota);
  console.log(otraMascota);

  const imprimirDatosDeMascota = ({nombre, raza}) => {
    console.log(`${nombre} es un ${raza}`);
  }

  imprimirDatosDeMascota(objMascota);