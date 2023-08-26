//Saludo de bienvenida.
alert("Bienvenidos a Lubricentro O'Higgins");
console.log("Servicio de cambio de aceite y filtros");
// Variables
let cambioAceite;
let precio;
let auto;
let autoMarca;
let autoCombustible;
let formaPago;
let tipoServicio;
const DESCUENTO = 10;

//Primera condición para saber si el programa se va a ejecutar o cerrar.
while (true) {
    cambioAceite = prompt("¿Desea un presupuesto para el servicio de su vehículo?").toLowerCase();

//Si es si, ejecutamos el proceso de presupuesto.    
    if (cambioAceite === "si") {
        auto = parseInt(prompt("¿Qué vehículo posee?\n1-Chevrolet\n2-Citroen\n3-Fiat\n4-Ford\n5-Nissan\n6-Peugeot\n7-Renault\n8-Toyota\n9-Volkswagen\n10-Otro"));

        while (isNaN(auto) || auto < 0 || auto > 9) {
            alert("Ingrese un dato válido.");
            auto = parseInt(prompt("¿Qué vehículo posee?\n1-Chevrolet\n2-Citroen\n3-Fiat\n4-Ford\n5-Nissan\n6-Peugeot\n7-Renault\n8-Toyota\n9-Volkswagen\n0-Otro"));
        }
    //Filtramos por marca de auto.
        switch (auto) {
            case 1:
                autoMarca = "Chevrolet"
                console.log(autoMarca);
                break;
            case 2:
                autoMarca = "Citroen"
                console.log(autoMarca);
                break;
            case 3:
                autoMarca = "Fiat"
                console.log(autoMarca);
                break;
            case 4:
                autoMarca = "Ford"
                console.log(autoMarca);
                break;
            case 5:
                autoMarca = "Nissan"
                console.log(autoMarca);
                break;
            case 6:
                autoMarca = "Peugeot"
                console.log(autoMarca);
                break;
            case 7:
                autoMarca = "Renault"
                console.log(autoMarca);
                break;
            case 8:
                autoMarca = "Toyota"
                console.log(autoMarca);
                break;
            case 9:
                autoMarca = "Volkswagen"
                console.log(autoMarca);
                break;
            default:
                autoMarca = "Otro";
                alert("Consulte por privado para obtener su presupuesto\nWhatsApp: 3516517525")
                console.log("Otra marca de véhiculo");
                break;
        }
        //Filtramos por tipo de motor. 
        while (autoMarca !== "Otro") {
            autoCombustible = parseInt(prompt("¿Qué combustible utiliza su auto?\n1-Nafta\n2-Diesel"));
            if (autoCombustible === 1) {
                autoCombustible = "Motor a nafta";
        
            tipoDeServicio()    
            presupuestoNaftero()    
            break;
            } else if (autoCombustible === 2) {
                autoCombustible = "Motor a diesel";
        
            tipoDeServicio()    
            presupuestoDiesel()
            break;
            } else {
                alert("Ingrese una opción válida.");
            }
        }
        break;
    } else if (cambioAceite === "no") {
        alert("¡Lo esperamos la próxima!");
        break;
    } else {
        alert("Disculpa, no entendí tu respuesta. Responde si o no por favor.")

    }





}