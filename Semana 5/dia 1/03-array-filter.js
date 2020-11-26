/**
 * 
 * Array.filter ((elemento,i,copia) => {});
 * 
 * Mismo comportamiento de la función "map", sin embargo, en "filter", se pueden discriminar a algunos bajo algunas condiciones.
 */

const numeros = [10, 30, 22, 35, 67, 56];
// Del siguiente arreglo retornar solo los elmentos que ocupan posiciones impares
const posicionesImpares = numeros.filter ((elemento, i) => {
    if (i % 2 !== 0){
        return elemento;
    }
})

console.log(posicionesImpares);
    