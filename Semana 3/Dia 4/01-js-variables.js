// Variables en javascript

// Variable tipo number - 
let edad= 18;
let sueldo= 950.50;

//Variables de tipo de cadena de texto
let nombre = "Giancarlo Tapia Torrejón"
let mensaje = "Se que estás ahí"

//Variables tipo Boolean
let casado = false;
let cazado = true;


//Variables de tipo arreglo a array
let platos = ["Ceviche" , "Seco" , "Causa"];

// Console.log()

// Es para imprimir en la consola del navegador
console.log("algo como esto");
console.log(cazado);
console.log("casado" + casado);
console.log(`Otra nueva línea`);

// plantillas o templates usando `BACKTICKS`
console.log(`Mi nombre es: ${nombre} y tengo ${edad} años`);

// Modificar un valor de una variable ya creada
edad = 32;
console.log(`Corrección!, mi edad es de ${edad} años`);

console.log(`Mis platos favoritos son ${platos}`);

let mensajeCompleto = `Mi nombre es ${nombre} y tengo ${edad} años`;

// Constante, se crean con el identificador "const"

const pi = 3.1416;
console.log(`Valor de PI = ${pi}`);