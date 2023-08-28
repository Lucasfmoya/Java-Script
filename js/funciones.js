//Alerta de opción ingresada de forma incorrecta.
function error (){
    alert("Ingrese una opción válida.");
}   
//Elección de marca de auto.
function marcaAuto (){
    auto = parseInt(prompt("¿Qué vehículo posee?\n1-Chevrolet\n2-Citroen\n3-Fiat\n4-Ford\n5-Nissan\n6-Peugeot\n7-Renault\n8-Toyota\n9-Volkswagen\n0-Otro"));   
}

//Bucle para evitar opciones inexistentes.
function tipoDeServicio (){
    tipoServicio = parseInt(prompt("¿Qué tipo de servicio necesita:\n1-Estandar\n2-Completo"));
        while (tipoServicio !== 1 && tipoServicio !== 2) {
            error ();
            tipoServicio = parseInt(prompt("¿Qué tipo de servicio necesita:\n1-Estandar\n2-Completo"));
                }
}
//Nombrando marcas de autos dependiendo opcion numérica elegida.
function fabricanteAuto(){
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
}
//Nombrando servicio según sea estándar o completo.
function obtenerTipoServicioText() {
    if (tipoServicio === 1) {
        return "Servicio estandar";
    } else {
        return "Servicio Completo";
    }
}

//Cálculo del valor del servicio según combustile y tipo de servicio elegído.
function importe () {
    if (autoCombustible === "Motor naftero" && tipoServicio === 1){
    return precio = 25000;
    }else if(autoCombustible === "Motor naftero" && tipoServicio === 2){
        return precio = 50000;
    }else if(autoCombustible === "Motor diesel" && tipoServicio === 1){
        return precio = 35000;
    }else {
        return precio = 65000;
    }

}

//Plantilla de presupuesto.
function infoServicioEstandar (){
    alert(`El servicio estandar incluye cambio de aceite y filtros de aceite y aire. El valor estimado para su vehículo es de $${importe()}.`);
}

function infoServicioCompleto (){
    alert(`El servicio completo incluye cambio de aceite y filtros de aceite, aire, habitáculo y combustible. El valor estimado para su vehículo es de $${importe()}.`);
}


//Presupuestos según tipo de combustible.
function presupuestoNaftero (){
    switch (tipoServicio) {
        case 1:
            infoServicioEstandar ();
            break;
        default:
            infoServicioCompleto ();
            break;
}
}
function presupuestoDiesel (){
    switch (tipoServicio) {
        case 1:
            infoServicioEstandar ();
            break;
        default:
            infoServicioCompleto ();
    }
}
// Dar opciones para ingresar forma de pago.
function formaPagoFunction (){
    formaPago = parseInt(prompt("¿Como desea abonar el servicio?\n1-Efectivo.\n2-Tarjeta de débito o transferencia.\n3-Tarjeta de crédito."));
}
//Calcular descuento.
function restarDescuento(valor, descuento) {
    return valor - (valor * descuento / 100);
  }
//Calcular recargo.
function sumarRecargo(valor, recargo) {
    return valor + (valor * recargo / 100);
  }


function formaPagoNumeroTexto (){
    switch (formaPago){
        case 1 :
            return "Pago en efectivo 10% de descuento.";
        case 2: 
            return "Pago con débito o transferencia 5% de descuento.";
        default : 
            return "Pago con tarjeta de crédito.";
           
    }

}