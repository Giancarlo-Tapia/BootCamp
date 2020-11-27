/**
 * 
 * document.createElement ("nombreDeLaEtiqueta")
 * Retorna un elemento HTML que NO está `presente aún en ele DOM
 * 
 * element.appenChild(otrElemento)
 * Inyecta un elemento hijo dentro de otro al final de la lista de elementos hijos
 * 
 * 
 * element.prepend(otroElemento)
 * Inyecta un elemento dentro de otro al inicio de la lista de elemntos hijos, es decir como primer elemento
 */

let body = document.querySelector("body");

let h1 = document.createElement("h1");
h1.innerText = "El título de la app";


body.prepend(h1);