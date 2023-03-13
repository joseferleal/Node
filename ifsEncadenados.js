const ciudadDestino="Bogotá";
const ciudadesDisponibles=new Array("Bogotá", "Lima", "Santiago", "Montevideo");
let edadPasajero = 16;
let estaAcompanado=false;


console.log(`Verificando pasajes para ${ciudadDestino}`);
//Verificamos si el pasajero cumple con las reglas
if(edadPasajero>=18||estaAcompanado){
//Evaluamos si la ciudad está disponible para viajar
    if(ciudadesDisponibles.indexOf(ciudadDestino)>=0){
        console.log("Puede vender el tiquete");
    }else{
        console.log("Ciudad no disponible para viajar")
    }

}else{
    if(edadPasajero>=16 &&ciudadDestino=="Lima"){
        console.log("Se puede vender este viaje a Lima")
    }else{
        console.log("El pasajero no cumple con los requisitos")
    }
   
};
