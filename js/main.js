//Saludo de bienvenida.
alert("Bienvenidos a Lubricentro O'Higgins.");
// Variables globales.
let resultadoServicio = "";
let cambioAceite;
let eleccion;
let obtenerTipoServicio;
let obtenerTipoCombustible;
let opcionesPago;
let importe;
let presupuestoNafta1 = 50000;
let presupuestoNafta2 = 65000;
let presupuestoDiesel1 = 60000;
let presupuestoDiesel2 = 80000;
const descuentoEfvo = 10;
const descuentoDebit = 5;
const descuentoTrasnf = 7;  
// Array que va a contener las marcas de autos.
const marcaAutos = [];
const serviciosOfrecidos =["Estándar","Completo"];
const itemDelServicio = ["Aceite de motor","Filtro de aceite", "Filtro de aire","Filtro de combustible","Filtro de habitáculo"];
const mediosDePago = [];

// Clase constructora, para crear objetos que van a ser pusheados al array.
class Autos {
    constructor(marca){
        this.marca = marca;
    }
};
// Clase constructora, para crear objetos con medios de pago que van a ser pusheados al array.
class MediosPago {
    constructor(id, medioDePago){
        this.id = id;
        this.medioDePago = medioDePago;
    }
}
//Objetos instanciados con marcas de autos y pusheados al array.
marcaAutos.push(new Autos("Chevrolet"));
marcaAutos.push(new Autos("Citroen"));
marcaAutos.push(new Autos("Fiat"));
marcaAutos.push(new Autos("Ford"));
marcaAutos.push(new Autos("Nissan"));
marcaAutos.push(new Autos("Peugeot"));
marcaAutos.push(new Autos("Renault"));
marcaAutos.push(new Autos("Toyota"));
marcaAutos.push(new Autos("Volkswagen"));
marcaAutos.push(new Autos("Otro"));
//Objetos instanciados con medios de pago y pusheados al array.
mediosDePago.push(new MediosPago (1, "Efectivo"));
mediosDePago.push(new MediosPago (2, "Tarjeta de Crédito"));
mediosDePago.push(new MediosPago (3, "Tarjeta de Débito"));
mediosDePago.push(new MediosPago (4, "Transferencia"));
// Ejecución del programa.
while (true) {
    cambioAceite = prompt("¿Desea un presupuesto para el servicio de su vehículo?").toLowerCase();
    if (cambioAceite === "si") {
    funcionOSuperior(elegirMarca());
    validacionAutos();
    validarCombustible();
    mostrarItemService();
    mostrarFormaPago();
    break;
    } else if (cambioAceite === "no") {
    alert("¡Lo esperamos la próxima!");
    break;
    } else {
    alert("Disculpa, no entendí tu respuesta. Responde si o no por favor.");
    }   
};