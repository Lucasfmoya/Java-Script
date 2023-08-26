//Saludo de bienvenida.
alert("Bienvenidos a Lubricentro O'Higgins.");
console.log("Servicio de cambio de aceite y filtros.");
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
        marcaAuto();

        while (isNaN(auto) || auto < 0 || auto > 9) {
            error ();
            marcaAuto();
        }
    //Filtramos por marca de auto.
        if (auto >= 1 && auto <=9){
        switch (auto) {
            case 1:
                autoMarca = "Chevrolet"
                break;
            case 2:
                autoMarca = "Citroen"
                break;
            case 3:
                autoMarca = "Fiat"
                break;
            case 4:
                autoMarca = "Ford"
                break;
            case 5:
                autoMarca = "Nissan"
                break;
            case 6:
                autoMarca = "Peugeot"
                break;
            case 7:
                autoMarca = "Renault"
               break;
            case 8:
                autoMarca = "Toyota"
                break;
            default:
                autoMarca = "Volkswagen"
                break;
            }
        }else{
            autoMarca = "Otra marca de véhiculo";
            alert("Consulte por privado para obtener su presupuesto\nWhatsApp: 3516517525")
        break;
    }   
        console.log(autoMarca);
        //Filtramos por tipo de motor. 
        while (autoMarca !== "Otro") {
            autoCombustible = parseInt(prompt("¿Qué combustible utiliza su auto?\n1-Nafta.\n2-Diesel."));
            if (autoCombustible === 1) {
                autoCombustible = "Motor naftero";
        
            tipoDeServicio();
            presupuestoNaftero();  
            break;
            } else if (autoCombustible === 2) {
                autoCombustible = "Motor diesel";
        
            tipoDeServicio();
            presupuestoDiesel();
            break;
            } else {
                error ();
            }
        }
        console.log(autoCombustible);
        let precioParcial = importe();
        console.log(`${obtenerTipoServicioText()} ${precioParcial}`);

        formaPago = parseInt(prompt("¿Como desea abonar el servicio?\n1-Efectivo.\n2-Tarjeta de débito o transferencia.\n3-Tarjeta de crédito."));
        break;
    } else if (cambioAceite === "no") {
        alert("¡Lo esperamos la próxima!");
        break;
    } else {
        alert("Disculpa, no entendí tu respuesta. Responde si o no por favor.")

    }





}