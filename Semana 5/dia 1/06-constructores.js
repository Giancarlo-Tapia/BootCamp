/**
 * 
 * Los constructores son creadores de objetos previamentes definidos
 */


 function Curso(){

    let objCurso = {
        nombre: "",
        nivel:"",
        nombreCompleto: function(){
            return "Curso de " + objCurso.nombre + " - " + objCurso.nivel },
        duraccion: "",
        precio: 0,
        temas:[]
    }

    return objCurso;
 }

 let objReact = Curso();
 let objNextJS = Curso();
objReact.nombre = "ReactJS";
objReact.duraccion = "2 semanas"
objReact.nivel = "Avanzado"
console.log(objReact.nombreCompleto());

objNextJS.nombre = "NextJS";
objNextJS.duraccion = "3 semanas";

console.log(objReact);
console.log(objNextJS);
 


function Curso(_nombre ="", _nivel ="", _duracion = "", _precio = "", _temas = []){

    let objCurso = {
        nombre: _nombre,
        nivel: _nivel,
        nombreCompleto: function(){
            return "Curso de " + objCurso.nombre + " - " + objCurso.nivel },
        duraccion: _duraci,
        precio: _precio,
        temas: _temas,
    }

    return objCurso;
 }