const saludo = () => {
    console.log("Imprimiendo saludo");
}

console.log("Hola");
setTimeout (() => {
    console.log("Asíncrono 2 seg.");
}, 2000)

console.log("Cómo estás");

saludo();

setTimeout (() => {
    console.log("Asíncrono 3 seg.");
}, 3000)

console.log("Hasta pronto");



