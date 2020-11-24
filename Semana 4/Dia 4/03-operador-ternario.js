/**
 * 
 * El operador ternario sirve para resumir un if-else.
 * Como requsito, tanto el if como el else deben tener 
 * una sola línea de codigo interno.
 */

let dcto = 0;
let prodcutos = [12.5, 34, 28, 677, 890];
total = 0;

/**
 * 
 * Si esl total a pagar es mayor a 500 soles hacer el descuento del 5%
 */

//for (let i = 0; i < productos.length; i++){
  //  total += productos[i];
    // total = total + prodcutos[i];
//}if(total > 500){
  //  console.log( total - (total * 0.05));

//} else{
  //  console.log( total - (total * 0.01));
//}


/**
 * Como operador ternario
 */

 if (total > 500){
     dcto = total *0.05;
 } else {
     dcto = total * 0.01;
 }

 dcto = total > 500 ? total * 0.05 : total *0.01;


 let numero1 = 3847;
 let nuemro2 = 3434;
 let max = numero1 > numero2 ? numero1 : numero2;
 console.log(max);


 // Haciendo un console log, sin usar la igualdad
 // Forma 1
 numero1 > nuemro2 ? console.log(numero1) : console.log(nuemro2);

 // forma 2

 console.log(numero > numero2 ? numero1 : numero2)

 