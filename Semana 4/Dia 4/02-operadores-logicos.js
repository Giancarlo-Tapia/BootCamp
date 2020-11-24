/**
 * 
 * Algebre de Bool
 * 
 */

let edad = 20;
let cazado = true;

/**
 * La persona ingresa al establecimiento si es mayor de edad y no tiene novia
 */

 if ( edad >= 18){
     if (cazado = false){
         console.log("pase joven");
     }
 }

 //Usando operadores logicos
 if(edad >= 18 && cazado !== true){

 }else{
     console.log("no admitido");
 }

  /**
 * Calcular si un año ingresado es bisiesto
 *
 * Teoría.
 * Los años bisiestos son divisibles entre 4 pero NO entre 100
 * Por otro lado, si son divisibles entre 400 también son bisiestos
 */
//let anio = 1991;
//if (anio % 400 === 0) {
  //console.log("SI ES BISIESTO");
//} else {
  //if (anio % 4 === 0) {
     //if (anio % 100 !== 0) {
      // console.log("SI ES BISIESTO");
//} else {
    //onsole.log("NO ES BISIESTO");
  //}
//} else {
   //console.log("NO ES BISIESTO");
 //}
//}

let anio = 2020;
if ((anio % 400 === 0) || (anio % 4 === 0) && (anio % 100 !== 0)){
    console.log("SI ES BISIESTO");

} else {
    console.log("NO ES BISIESTO");
} 