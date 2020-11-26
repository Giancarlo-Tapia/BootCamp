/**
 * 
 * array.find ((elemento, i, copia) => {})
 * find retorna un (01) solo elemnento que coincida con una condición de búsqueda para los elelntos del arreglo.
 * 
 * Y encontrado el elemento, éste es retornado.
 * En caso no se encuentre el elemento o la condición., el rrtorno será undefined
 */


 const dnis = ["10203948", "27380239", "29403849", "45374502"];
//buscando el dni = 27380239
const encontrado = dnis.find((dni) => {
     if( dni === "27380139"){
     return dni;

}})



 encontrado ? console.log(encontrado) : console.log("nay");

 //indexOf devuelve la posicion en la que un elemento se encuentra dentro de un arreglo. Opcionalmente recibe un segundo paráetro que indica la posición a partir de donde buscar el elemnto.

 //console.log(dni.indexOf("10203948"));