// Función error, colocar dentro de otro archivo
const error = () => {
    alert("Ingrese una opción válida.");
};
// Función que recibe a otra función como parámetro. 
const funcionOSuperior = (i) => {
    eleccion = parseInt(prompt(i));
};
// Función para elegir la marca del auto.
const elegirMarca = () => {
    let opciones;
    opciones = "¿Qué vehículo posee?\n";
    marcaAutos.forEach((auto, i) => {
        opciones += `${i + 1}. ${auto.marca}\n`;
    });
    return opciones;
};
 // Función para validar si el número ingresado es una opción válida.
 const validacionAutos = () => {
    while (isNaN(eleccion) || eleccion == 0 || eleccion > 10) {
        error();
        eleccion = parseInt(prompt(elegirMarca()));
    }
    if (eleccion >= 1 && eleccion < 10) {
        let tipoServicio;
        tipoServicio = parseInt(prompt(`1. ${serviciosOfrecidos[0]}.\n2. ${serviciosOfrecidos[1]}.`));
        while (tipoServicio !== 1 && tipoServicio !== 2) {
            error();
            tipoServicio = parseInt(prompt(`1. ${serviciosOfrecidos[0]}\n2. ${serviciosOfrecidos[1]}.`));
        }
        if (tipoServicio === 1) {
            obtenerTipoServicio = "estándar";
        } else if (tipoServicio === 2) {
            obtenerTipoServicio = "completo";
        }
    } else if (eleccion == 10) {
        alert("Consulte por privado para obtener su presupuesto\nWhatsApp: 3516517525.");
    } else {
        error();
    }
};
// Función para descartar la marca "Otro" y empezar a presupuestar.
const validarCombustible = () =>{
    let autoCombustible;
    autoCombustible = parseInt(prompt("¿Qué combustible utiliza su auto?\n1. Nafta.\n2. Diesel."));
    while(isNaN(autoCombustible) && autoCombustible !== 1 && autoCombustible !== 2){
        error();
        autoCombustible = parseInt(prompt("¿Qué combustible utiliza su auto?\n1. Nafta.\n2. Diesel."));
    }
    if (autoCombustible === 1) {
        autoCombustible = "Motor naftero";
    } else if (autoCombustible === 2) {
        autoCombustible = "Motor diesel";
    } else {
        error();
        validarCombustible();
    }
    obtenerTipoCombustible = autoCombustible;
};
// Función para mostrar los elementos que contiene el service, pasa el presupuesto según tipo de combustible y tipo de service elegído.
const mostrarItemService = () => {
    let itemsMensaje =`El servicio ${obtenerTipoServicio} incluye los siguientes productos:\n`;

    if (obtenerTipoServicio === "estándar") {
        itemDelServicio.splice(3, 2);
    } 
    itemDelServicio.forEach(item => {
        itemsMensaje += `* ${item}.\n`;
    });
    alert(itemsMensaje);
    if(obtenerTipoServicio === "estándar" && obtenerTipoCombustible === "Motor naftero"){
        alert(`El service estándar para el motor naftero tiene un costo de $${presupuestoNafta1}.`); 
        importe = presupuestoNafta1;  
    } else if (obtenerTipoServicio === "completo" && obtenerTipoCombustible === "Motor naftero"){
        alert(`El service completo para el motor naftero tiene un costo de $${presupuestoNafta2}.`);
        importe = presupuestoNafta2;
    } else if (obtenerTipoServicio === "estándar" && obtenerTipoCombustible === "Motor diesel"){
        alert(`El service estándar para el motor diesel tiene un costo de $${presupuestoDiesel1}.`);
        importe = presupuestoDiesel1;
    } else{
        alert(`El service estándar para el motor diesel tiene un costo de $${presupuestoDiesel2}.`);
        importe = presupuestoDiesel2;
    }
};
// Ofrecer medios de pago y dar importes.
const mostrarFormaPago = () => {
    let mensaje = "Medios de Pago:\n";
    mediosDePago.forEach(medio => {
        mensaje += `${medio.id}. ${medio.medioDePago}.\n`;
    });
    opcionesPago = parseInt(prompt(mensaje));
    while(isNaN(opcionesPago) || opcionesPago >= 5 || opcionesPago <= 0){
        error();
        opcionesPago = parseInt(prompt(mensaje));
    }
    if (opcionesPago === 1){
        alert(`Tenemos un descuento para vos! Vas a pagar: $${restarDescuento(importe, descuentoEfvo)}.`);
    } else if (opcionesPago === 2) {
        alert(`Podes abonar hasta en 12 cuotas!\n3 Pagos + 15%. Abonarias un total de: $${sumarRecargo(importe, 15)}.\n6 Pagos + 25%. Abonarias un total de: $${sumarRecargo(importe, 25)}.\n12 Pagos + 50%. Abonarias un total de: $${sumarRecargo(importe, 50)}.`);
    } else if (opcionesPago === 3) {
        alert(`Tenes un 5% de descuento con esta forma de pago, vas a abonar: $${restarDescuento(importe, descuentoDebit)}.`);
    } else{
        alert(`Tenes un 7% de descuento con esta forma de pago, vas a abonar: $${restarDescuento(importe, descuentoTrasnf)}.`);
    }
};

// Validar si el programa va a ejecutarse.
const validacionDeEjecucion = () =>{
    while(eleccion !== 10){
        validarCombustible();
        mostrarItemService();
        mostrarFormaPago();
        break;
    }
} 
//Calcular descuento.
const restarDescuento = (valor, descuento)=> {
    return valor - (valor * descuento / 100);
};
//Calcular recargo.
const sumarRecargo= (valor, recargo) => {
    return valor + (valor * recargo / 100);
};
