/**
 * 
 * Regal 1
 * Si una función tiene una óla línea de ejecución de retorno, se pueden
 * omitir las llaves y ntambien la palabra return
 */

// const cubo = (numero) => {
    //return numero * numero * numero;
 //}

 const cubo = (numero) => numero * numero * numero;

 console.log(cubo(5));

 /**
  * 
  * Regla 2
  * 
  * Cuando una función recibe un sólo parámetro,
  * se puede omitir el símbolo de paréntesis
  */

  //const buscarporDni = (dni) => {

  //}

  const buscarporDni = dni => console.log(`Encontrado ${dni}`);

  buscarporDni("45264230");
/**
 * 
 * Regla 3
 * Formas reducidad de hacer map, filter y find.
 */


 let numeros = [1, 2, 3, 5, 7, 9.];


 //Forma tradicional
 
 //let pares = numeros.filter ( num => {
    //if( num % 2 === 0){
        //return num;
    //}
 //})
 //console.log(pares);

 let pares = numeros.filter ( num => num % 2 === 0);

 console.log(pares);
 