
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
function infoServicio (){
    alert(`${"El servicio estandar incluye cambio de aceite y filtros de aceite y aire. El valor estimado para su vehículo es de"} ${"$"}${importe()}${"."}`);
}


//Presupuestos según tipo de combustible.
function presupuestoNaftero (){
    switch (tipoServicio) {
        case 1:
            infoServicio ();
            break;
        default:
            infoServicio ();
            break;
}
}
function presupuestoDiesel (){
    switch (tipoServicio) {
        case 1:
            infoServicio ();
            break;
        default:
            infoServicio ();
    }
}
//Calcular descuento.
function restarDescuento (precioParcial, DESCUENTO){
    const PORCENTAJE = (precioParcial * DESCUENTO) / 100;
    const RESTA = precioParcial - PORCENTAJE;
    return RESTA;
}