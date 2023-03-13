/* si(A&&B||C){

} */

//Primero se ejecutan los paréntesis, luego el Y y luego el o. Por último el no
const ciudadDestino="Bogotá";
const ciudadesDisponibles=new Array("Bogotá", "Lima", "Santiago", "Montevideo");
let edadPasajero = 19;
let estaAcompanado=false;
let tienePasaporte=true;
let casado=false;



console.log(`Verificando pasajes para ${ciudadDestino}`);
//A &&B|| C

if((ciudadesDisponibles.indexOf(ciudadDestino)>=0)&&(edadPasajero>=18 && tienePasaporte && !casado || estaAcompanado)){
    console.log("Se puede vender el paquete para solteros");
}else{
    console.log("Ciudad no disponible o el pasajero no cumple las reglas")
};