/**
 * 
 * El array-map((elemento, i, copia_del_arreglo)) =>{})
 */


 /**
  * En todos las iteraciones se debe retornar el mismo elemento o uno difierente ya que a partir de la finción map, se obtiene un nuevo arreglo con todos eso elemntos retornados.
  */
 const usuarios = ["Jose", "Daniela", "Dayana", "Maria", "Rubi"];
 const nuevosUsuarios = usuarios.map((usuario) => {
     return usuario;
     
 })

 console.log(nuevosUsuarios);


 
 /**
  * Del siguiente arreglo, retornar el doble de los numeros pares y la mitad de los numeros impares
  */
const numeros = [10, 30, 22, 35, 67, 56];
const resultados = numeros.map((numero) => {
    if( numero % 2 === 0){
    return numero * 2;
    } else{
        return numero / 2;
    }

 })

 console.log(resultados);

 ////
/**
 * La función map no es capaz de discriminar a ningún elemento.
 * La cantidad de elementos que retorna, siempre es la misa cantidad de elemntos del arreglo, asi que considerar retornar todos los elementos de todas formas (modificados o no modificados)
 * 
 */
 const dobleDePares = numeros.map((numero) => {
    if( numero % 2 === 0){
    return numero * 2;
    } else{
        return numero;
    }

 })

 console.log(dobleDePares);