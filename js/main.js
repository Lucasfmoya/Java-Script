//comentario de una linea
/*comentarios de bloques igual que en css*/
/* alert("Bienvenido a nuestro sitio web"); //alerta para cada que se actualice la página */

//Los números van solos y el texto va entre comilla

/* let valor1 = 10; // se declara la variable
let valor2 = "Lucas"; 
const dolar =615; //constante , no se puede redefinir una constante

console.log(valor1)
console.log(valor2)
console.log(dolar)
 
//se da valor a una variable
valor1 = 50; // "Number"
valor2 = "Ceci"; //"String"

console.log(valor1)
console.log(valor2)
console.log(dolar) 
 */


/* let numeroA = 50;
let numeroB = 20;

const numeroC = 30;

let resultadoSuma = numeroA + numeroB;
console.log("SUMA: " + resultadoSuma)

let resultadoResta = numeroA - numeroB;
console.log("RESTA: " + resultadoResta)

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")    
let nombreCompleto = "Su nombre es " + nombre + " " + apellido;

alert (nombreCompleto) */

/* let altura = parseFloat(prompt("Ingrese su altura expresa en metros (ej: 1.45)"));
let peso = parseFloat(prompt("Ingrese su peso expresado en kg (ej:  50)"));
let resultado = peso / (altura * altura);

if (altura == ""){
    alert ("Debe ingresar altura");
}

alert("Su IMC es: " + resultado);


if (resultado <=20) {
    alert ("estas flaco");
} else (resultado >=21); {
    alert ("Estas en forma")
} */


/* let dia = parseInt(prompt("Ingrese su día de nacimiento"));

if (dia > 31 || dia < 1) {
    alert("Ingrese una fecha válida");
} else {
    let mes = parseInt(prompt("Ahora ingrese el mes de nacimiento"));

    if (mes > 12 || mes < 1) {
        alert("Ingrese un mes válido");
    } else {
        if ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)) {
            alert("Usted es de Aries");
        } else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
            alert("Usted es de Tauro");
        } else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
            alert("Usted es de Géminis");
        } else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
            alert("Usted es de Cáncer");
        } else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
            alert("Usted es de Leo");
        } else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
            alert("Usted es de Virgo");
        } else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
            alert("Usted es de Libra");
        } else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
            alert("Usted es de Escorpio");
        } else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
            alert("Usted es de Sagitario");
        } else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)) {
            alert("Usted es de Capricornio");
        } else if ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2)) {
            alert("Usted es de Acuario");
        } else {
             alert("Usted es de Piscis");
            
        }
    }

    let nacimiento = dia + "/" + mes;
    console.log(nacimiento);
} */

let nombre
let apellido
let edad
let direccion
let ciudad
let pais

const PRIMERCITY = "springfield"
const SECONCITY = "shelbyville"
const TERCERCITY = "capital City"
const CUARTACITY = "ogdenville"
const QUINTACITY = "terror Lake"

nombre = "Homero";
apellido ="Simpsons";
edad = 45;

console.log ( `${nombre} ${apellido}. Edad ${edad} años `)


const CIUDAD = "SPRINGFIELD"
const LICENCIA = "DRIVER LICENSE"

nombre = prompt("Ingrese su nombre");
apellido = prompt("Ingrese su apellido");
direccion = prompt("Ingrese su domicilio");
ciudad = prompt("¿En qué ciudad vive?");

if (ciudad != PRIMERCITY){
    pais = prompt("Ingrese su país");
}else {
    pais ="EEUU"
}

console.log(`${CIUDAD}\n ${LICENCIA}\n ${nombre} ${apellido}\n ${direccion}\n ${ciudad} ${pais}`);

