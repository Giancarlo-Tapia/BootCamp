/**
 * break;
 * En una estructura repetitiva, sirve para detener
 * el ciclo y saltarse todos los ciclos o iteracciones que
 * quedan por dar
 * 
 * romper y finalizar un ciclo
 */

 let nombres = ["Jorge", "Samanta", "Dayana", "Dennis", "Brunela", "Paty"]

 /**
  * Indicar o imprimir, la posicion en la que Dennis se encuentra
  * Asumir que no se repiten los nombres
  */

  for (let i = 0; i < nombres.length ; i++){
    if(nombres[i] === "Dennis" ){
        console.log(i);
        break;
    }
  }

  /**
   * 
   * continue,
   * 
   * Sirve para saltarse la iteración en la que se encuentra,
   * es decir, todo el código que quedaba por ejecutarse en una
   * determinada iteracción, se va a omitir y se pasará a la 
   * siguiente iteración 
   */

   let numerosBinarios = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
   
   /**
    * 
    * Del arreglo imprimir sobro los numeros 0

    */


    for (let i = 0; i < numerosBinarios.length; i++ ){
        if(numerosBinarios[i] === 1){
            continue;
        }
        console.log(numerosBinarios[i]);
    }
   