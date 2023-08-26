function tipoDeServicio (){
    tipoServicio = parseInt(prompt("¿Qué tipo de servicio necesita:\n1-Estandar\n2-Completo"));
        while (tipoServicio !== 1 && tipoServicio !== 2) {
            alert("Ingrese una opción válida.");
            tipoServicio = parseInt(prompt("¿Qué tipo de servicio necesita:\n1-Estandar\n2-Completo"));
                }


}


function presupuestoNaftero (){
    switch (tipoServicio) {
        case 1:
            alert("El servicio estandar incluye cambio de aceite y filtros de aceite y aire. El valor estimado para su vehículo es de $25000");
            break;
        default:
            alert("El servicio completo incluye cambio de aceite y filtros de aceite, aire, combustible y habitáculo. El valor estimado para su vehículo es de $50000");
            break;
}
}

function presupuestoDiesel (){
    switch (tipoServicio) {
        case 1:
            alert("El servicio estandar incluye cambio de aceite y filtros de aceite y aire. El valor estimado para su vehículo es de $30000");
            break;
        default:
            alert("El servicio completo incluye cambio de aceite y filtros de aceite, aire, combustible y habitáculo. El valor estimado para su vehículo es de $65000");
            break;
    }



}