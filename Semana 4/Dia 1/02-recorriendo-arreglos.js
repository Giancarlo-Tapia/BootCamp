/**
 * 
 * Creando un arreglo
 */

 let edades = [45, 12, 36, 96, 20, 19];


 /**
  * Imprimiendo la primera edad
  */

  console.log(edades[0]);

  /**
   * 
   * Obteniendo la cantidad de elementos de un arreglo
   * 
   */

   console.log(edades.length);

   /**
    * 
    * Mofifcar el tercer numero del arreglo
    */

    edades[2] = -5;
    console.log(edades);

    /**
     * 
     * Recorriendo un arreglo
     */

     for(let i = 0; i < edades.length; i++){
        console.log(edades[i]);
     }

     /**
      * 
      * Insertar un elemento al final del arreglo( la última posición)
      */

      edades.push(9);
      console.log(edades);

      console.log("///// EJERCICIONES////");

     /**
      * Algoritmo para ingresar n nombres de usuario e insertarlos en un arreglo y finalmente imprimir el arreglo
      */


      //const n = 6;
     // let nombres = [];
      //for (let i = 0; i < n; i++) {
      //  let ingreso = prompt(`Ingrese el usuario ${i}`);
       // nombres.push(ingreso);
      //}

     // console.log(nombres);


/**
 * 
 * Del siguiente arreglo 
 * let datosBinarios = [1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0];
 * Mostrar la cantidad de 0´s
 * Mostrar la cantidad de 1´s
 * e INDICAR que elementos se repiten mas (ceros, o unos)
 */

let datosBinarios = [1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0];

let cCeros = 0, cUnos = 0;

for (let i = 0; i < datosBinarios.length; i++){
if( datosBinarios [i] === 0){
    cCeros++;
    }
}

console.log(`Cantidad de Ceros (0) = ${cCeros}`);
console.log(`Cantidad de Unos (1) = ${datosBinarios.length - cCeros}`);

if(cCeros > (datosBinarios.length - cCeros)){
    console.log("Hay más ceros que unos");
}else{
    console.log("Hay más unos que ceros");
}


//Practicar 