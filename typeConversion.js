//Tipos de datos
//Alfanuméricos
const nombrePasajero="Pedro Silva";
console.log(nombrePasajero);

/*No puedo cambiar el valor de algo que ya definí como constante*/

//nombrePasajero="Ramón";
//console.log(nombrePasajero); 

//numérico

const Boleto=1650;
console.log(Boleto);

let Entrada=1000;
const impuestoAeropuerto=100;
const porcentajeTasaEmbarque=0.5;
var gestionAgencia=150;

//Lógicos

let boletoActivo=true;
console.log(boletoActivo);


//Operaciones aritméticas

let totalBoletos=Entrada+(impuestoAeropuerto*porcentajeTasaEmbarque)+gestionAgencia;
console.log(totalBoletos);

//Orden de precedencia
//(), *, /, +, -
let totalBoletos2=(Entrada+impuestoAeropuerto)*porcentajeTasaEmbarque+gestionAgencia;
console.log(totalBoletos2);


//Concatenación de texto
let nombreP="Juan";
let apellidoPasajero="Jiménez";
let nombreCompleto= nombreP + " " + apellidoPasajero;
console.log(nombreCompleto);
let pasaporte= "1000"+"12";
let multiplicacion="1000"/"12";
console.log(pasaporte);
console.log(multiplicacion);
multiplicacion2=parseInt("1000")/parseFloat("10");
console.log(multiplicacion2);
