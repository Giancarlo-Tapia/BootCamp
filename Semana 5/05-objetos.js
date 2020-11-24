let objPersona = {
    nombre: "Jorge",
    direccion: "Calle Arabiscos 1494",
    platosFavoritos: ["Ceviche", "Rocoto relleno", "Arroz con pollo"],
    objUbicacion: {
        lat: -70.1234,
        lon: -16.34
    }
};

//Mostrando atributos de un objeto

console.log(objPersona.platosFavoritos);

//Forma 1 (más usada)
console.log(`Latutud: ${objPersona.objUbicacion.lat}`);

// Forma 2
console.log(objPersona["direccion"]);

//imprimir uno a uno los paltos favoritos

objPersona.platosFavoritos.forEach ((plato, i) => {
    console.log(`Plato ${i + 1}: ${plato}`);
})

//Modificar un atributo de un objeto

objPersona.nombre = "Jorge Luis";
console.log(objPersona);

// objetos con atributos en forma de String
const objVehiculo = {
    "marca": "Mazda",
    "color": "Café",
    "nro-llantas": 4,
}

console.log(objVehiculo["nro-llantas"]);

//Creando nuevos atributos a los objetos ya establecidos

objVehiculo.modelo = "CX-3";
console.log(objVehiculo);