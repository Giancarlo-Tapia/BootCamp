const formRegistro = document.getElementById("formRegistro");
const inputPlaca = document.getElementById("inputPlaca");
const selectorColor = document.getElementById("selectorColor");
const radioNuevo = document.getElementById("radioNuevo");
const radioUsado = document.getElementById("radioUsado");
const textObs = document.getElementById("textObs");
/**
 * onsubmit => evento que se dispara cuando se envía el formulario.
 */


formRegistro.onsubmit = (e) => {
    e.preventDefault();
    let placa = inputPlaca.value;
    let color = selectorColor.value;
    let estado = radioNuevo.checked === true  ? "nuevo"  : "usado";
    let Obs = textObs.value;


    /**
     * 
     * triim.()
     * Función de los strings que elimina los espacios
     * en blanco de losmEXTREMOS DE UN STRING, NO INTERNOS
     * 
     */

    if(placa.trim() === "" || color === "0" || obs === "") {
        formRegistro.classList.add("errorFormulario");
        alert("Error joven!!, llene todos los campos");

        return; 

    }
        formRegistro.classList.remove("errorFormulario")
        let objVehiculo = {
            placa: placa,
            color: color,
            estado: estado,
            observaciones: obs
        } 
        
        console.log(objVehiculo);

    }


    let objVehiculo = {
        placa: placa,
        color: color,
        estado: estado,
        observaciones: obs

    }
    
    console.log(objVehiculo);

    formRegistro.reset();

/**
 * 
 * RETO:
 * 
 * Mostrar una alerta de error si:
 * El color está en cero o
 * La placa está vacía o
 * No hay observaciones
 * 
 * En cso contrario imprimir el objeto correctamente.
 */





/**
 * 
 * a continucación el código para redireccionar a otra página luego del submit:
 * 
 * window.location.href = "https://www.google.com";
 * 
 * A continuación para abrir una nueva pestaña en una página distinta
 * 
 * window.open("https://www.google.com");
 */


