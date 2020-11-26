/**
 * Reto 1
 * Crear constructor ( clase) de nombre Alumno
 * Atributos de cada alumno serán:
 * 
 * > nombres: <string>
 * > apellidos: <string>
 * > notas: Array <number>
 * > dni: <string>
 * > promedioNotas: Function => función que calculará e promedio de todas las notas que tenga un alumno y retornará dich promedio
 * 
 * 
 * 
 */

//function Alumno(_nombres = "", _apellidos = "", _notas = [], _dni = "") {
 //   let objAlumno = {
  //    nombres: _nombres,
  //    apellidos: _apellidos,
  //    notas: _notas,
  //    dni: _dni,
  //    promedioNotas: function () {
   //     let suma = 0;
  //      this.notas.forEach((elemento) => {
   //       suma += elemento;
   //     });
   //     return suma / this.notas.length;
  //    },
  //  };
 // //  return objAlumno;
 // }

  

  /**
   * 
   * Hacer un algoritmo para ingresar los datos de n alumnos con x notas cada uno, los datos deben ser ingresados por el usuario y agredgado al arreglo Alumnos.
   * 
   * Al final de ingresar los n alununos, se debe mostrar el promedio de notas de cada alumno y luego imprimir a ambos alumnos por consola.
   * 
   * 
   * 1. Leer la cantidad de alumnos a ingresar
   * 2. Leer la cantidad de notas por alumno a ingresar
   * 3. Itirar la cantidad de alumnos que el usuario va a ingresar y en cada vuelta, pedir los datos del alumno incluidas las notas
   * 4. Adicionalmente, en cada vuelta agregar el alumno ingresado al arreglo de alumnos.
   * 5. luego de ingresar a todso los alumnos, iterar nuevamente el arreglo de alumnos para imprimir el promedio de cada uno de ellos a ca iteración
   * 6. Finalmente, acabadas las iteraciones, impimir el rreglo de alumnos.
   */
// let Alumnos = [];
// let numeroAlumnos = +prompt("Ingrese el número de alumnos :");
// let cantidadNotas = +prompt("Ingrese la cantidad de notas por alumno :");
// for (let i = 0; i < numeroAlumnos; i++) {
//   let notas = [];
//   let nombres = prompt(`Ingrese los nombres del alumno ${i + 1} :`);
//   let apellidos = prompt(`Ingrese los apellidos del alumno ${i + 1} :`);
//   let dni = prompt(`Ingrese el dni del alumno ${i + 1} :`);
//   for (let j = 0; j < cantidadNotas; j++) {
//     notas.push(+prompt(`Ingrese la nota ${j + 1} del alumno ${i + 1} :`));
//   }
//   Alumnos.push(new Alumno(nombres, apellidos, dni, notas));
// }
// Alumnos.forEach(alumno => {
//   console.log(alumno.promedioNotas());
// });
// console.log(Alumnos);