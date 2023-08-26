alert("Bienvenidos a Lubricentro O'Higgins");

console.log("Servicio de cambio de aceite y filtros");

let cambioAceite;
let precio;
let auto;
let formaPago;
const DESCUENTO = 10;

while (true) {
    cambioAceite = prompt("¿Desea un presupuesto para el servicio de su vehículo?").toLowerCase();

    if (cambioAceite === "si") {
        auto = prompt("¿Qué vehículo posee?").toLowerCase();
        
        while (auto === "") {
            alert("Ingrese un dato válido.");
            auto = prompt("¿Qué vehículo posee?").toLowerCase();
        }
        break;
    } else if (cambioAceite === "no") {
        alert("¡Lo esperamos la próxima!");
        break;
    } else {
        alert("Disculpa, no entendí tu respuesta. Responde si o no por favor.")
        
    }
}




