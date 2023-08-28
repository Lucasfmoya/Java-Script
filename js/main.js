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
const descuentoEfvo = 10;
const descuentoDebit = 5; 
let precioFinal;

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
            fabricanteAuto();
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
        //Asignación de precio según opción elegída.
        let precioParcial = importe();
        console.log(`${obtenerTipoServicioText()} ${"$"}${precioParcial}`);
        // Dar opciones para ingresar forma de pago.
        formaPagoFunction ();
        while (formaPago !==1 && formaPago !==2 && formaPago !==3){
            error();
            formaPagoFunction ();
        }
        if (formaPago === 1){
            alert(`Tenemos un descuento para vos! Vas a pagar: $${restarDescuento(precioParcial, descuentoEfvo)}.`);
        } else if (formaPago=== 2) {
            alert(`Tenes un 5% de descuento con esta forma de pago, vas a abonar: $${restarDescuento(precioParcial, descuentoDebit)}.`);
        } else{
            alert(`Podes abonar hasta en 12 cuotas!\n3 Pagos + 15%. Abonarias un total de: $${sumarRecargo(precioParcial, 15)}.\n6 Pagos + 25%. Abonarias un total de: $${sumarRecargo(precioParcial, 25)}.\n12 Pagos + 50%. Abonarias un total de: $${sumarRecargo(precioParcial, 50)}.`);
        }
        //Convertimos la opción númerica elegída a texto.
        formaPago = formaPagoNumeroTexto();   
        console.log(formaPago);
        break;
    } else if (cambioAceite === "no") {
        alert("¡Lo esperamos la próxima!");
        break;
    } else {
        alert("Disculpa, no entendí tu respuesta. Responde si o no por favor.");

    }
}