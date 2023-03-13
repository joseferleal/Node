//Operadores de comparación
const ciudadDestino="Santiago";
const ciudadesDisponibles=new Array("Bogotá", "Lima", "Santiago", "Montevideo");

//Palabra reservada if: evalúa una condición. Si ciudad destino está en la lista, entonces se escribe un mensaje
//Seudocódigo
/* if(si la ciudad destino está en la lista) entonces{
    escribe que se vende el pasaje
} */

console.log(ciudadesDisponibles.indexOf(ciudadDestino)); ///Busca en ciudades disponibles el valor de ciudadDestino y devuelve el índice
console.log(`Verificando pasajes para ${ciudadDestino}`);
if(ciudadesDisponibles.indexOf(ciudadDestino)>=0){
    console.log("Puede vender el tiquete");
}else{
    console.log("Ciudad no disponible para viajar")
};


//Un solo igual es asignarle el valor

const valorPasaje=1000;
if(valorPasaje===1000){ //El triple igual compara tanto el valor como el tipo de dato
    console.log("El pasaje vale 1000")
};

const valor2="1000";
if(valor2==1000){ //No compara el tipo de dato, solo el valor
    console.log("El pasaje vale eso")
};

//Operadores lógicos
//And = && Se deben cumplir las dos condiciones
//Or = || Se debe cumplir al menos una
//Not = ! Que no se cumpla la condición

let edadPasajero = 15;
let estaAcompanado=false;

if((ciudadesDisponibles.indexOf(ciudadDestino)>=0)&&(edadPasajero>=18)){
    console.log("Puede vender el tiquete");
}else{
    console.log("Ciudad no disponible para viajar")
};

if(edadPasajero>=18 || estaAcompanado){
    if((ciudadesDisponibles.indexOf(ciudadDestino)>=0)){
        console.log("Puede vender el tiquete");
    }}
else{
        console.log("No se puede vender el tiquete")
    };

if((ciudadesDisponibles.indexOf(ciudadDestino)>=0)&&(edadPasajero>=18 || estaAcompanado)){
    console.log("Se puede vender el pasaje")
}else{
    console.log("Ciudad no disponible o el pasajero no cumple las reglas")
};


//Apliquemos el operador not (!) -- Es importante ser conscientes de los paréntesis

if(!((ciudadesDisponibles.indexOf(ciudadDestino)>=0)&&(edadPasajero>=18 || estaAcompanado))){
    console.log("Ciudad no disponible o el pasajero no cumple las reglas")
    
    
}else{
    console.log("Se puede vender el pasaje")
};