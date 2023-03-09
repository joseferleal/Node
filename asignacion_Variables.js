///Const
///Espacio de memoria que no cambia en el tiempo: constante
const valorPasaje=1650;
const nombrePasajero="Leonardo";
const apellidoPasajero="Jiménez";
console.log(valorPasaje);
console.log(nombrePasajero);
console.log(apellidoPasajero);
//Como no va a cambiar, entonces no se puede modificar más adelante
//nombrePasajero="Otra cosa"; //Genera error

///let
//Espacio de memoria que puede cambiar en la ejecución del proyecto. Su alcance es local, solo en el bloque
/* let nombreCompletoPasajero=nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero); */


///Var
//Está en desuso. Espacio de memoria que puede cambiar. Su alcance es total, es global para cualquier parte del programa.
var nombreCompletoDelPasajero=nombrePasajero+ " " + apellidoPasajero;
console.log(nombreCompletoDelPasajero);


//Ejemplo de bloques
{
    let nombreCompletoPasajero=nombrePasajero+" "+apellidoPasajero;
    console.log("variable con let:" + nombreCompletoPasajero);
    console.log("variable con var: "+ nombreCompletoDelPasajero);
}


console.log("variable con let:" + nombreCompletoPasajero); ///No imprime porque solo funciona en su bloque de llaves
console.log("variable con var: "+ nombreCompletoDelPasajero);
