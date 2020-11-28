let btnAlerta = document.getElementById("btnAlerta");
let btnEvento = document.getElementById("btnEvento")
let lis = document.querySelectorAll("ul > li");
let divCirculo = document.getElementById("divCirculo")
let linkGoogle = document.getElementById("linkGoogle")


/**
 * 
 * Formas de ascoiar eventos
 * 
 * 
 * FORMA 1
 * element.addEventlistener("evento", function(e){});
 * 
 * FORMA 2
 * element.on[evento] = funtion(e){};
 * 
 * OJO : la palabra "evento" se reemplaza con el nombre del evento que  queremos asociar
 * 
 * [https://developer.mozilla.org/es/docs/Web/Events]
 */

 btnAlerta.addEventListener("click", function (e){
    alert("Hey, alguien hizo click en el boton Alerte!")
 } );


 btnEvento.onclick = function (e){
    console.log("Click en el boton evento");
    console.log(e);
 };

 list = Array.from(lis);

 lis.forEach((li) => {
    li.onclick = (e)=>{

        /**
         * el evento "e", es un parémetro que tiene toda la ifnormación
         * de un evento.
         * e.target hace referencia al elemento html (HTMLElement) en
         * el que ocurre el evento
         * 
         */
        console.log(e.target.innerText);
    console.log("Se hizo click en un li");
    }
 })

 /**
  * 
  * Evento que s ejecuta un usuario le hace doble click a un elemento
  * element.ondbclick = (e) => {}
  *  
  */

 divCirculo.ondblclick =(e) =>{
    console.log("Doble click en el círculo")
/** Cada vez que se le dé doble click en el cículo, cambie a un color aleatorio  */
    let random255 = () => { return Math.random()*(255)}
    divCirculo.style.background = `rgb(${random255()}, ${random255()}, ${random255()})`;
 }


 /**
  * 
  * Eventos por defecto,
  * 
  * Existen eventos que ya tienen preconfgurados ciertos comportamientos
  * que responden a algunos eventos.
  * Por ejemplo, la etiqueta <a></a> que cuando se le hace CLICK navegamos a una nueva página en su atributo href=""
  * 
  * NOTA: Estos eventos se pueden detener para darles unnuevo comportamiento
  * 
  */


 linkGoogle.onclick = (e)=>{

    /**
     * e.preventDefault es una función que interrumpe cualquier suceso pre-programado en cualquier evento
     * 
     */
     e.preventDefault();
    console.log("click");
 }