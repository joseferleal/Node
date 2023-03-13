const ciudad1 ="Bogotá";
const ciudad2 ="Lima";
const ciudad3="Santiago";


//Definición de una lista con tipo de datos alfanuméricos
const ciudadesDisponibles=new Array("Bogotá", "Lima", "Santiago");
console.log(ciudadesDisponibles);
console.log(ciudadesDisponibles[0]);

///Definición de una lista de forma abreviada

const paDisponibles=["Colombia", "Perú", "Chile","Brasil","Argentina"];
console.log(paDisponibles);


//Agregar elementos al final de un arreglo
{paDisponibles.push("Uruguay");
ciudadesDisponibles.push("Montevideo");

console.log(ciudadesDisponibles);
console.log(paDisponibles);
}

console.log(ciudadesDisponibles);
console.log(paDisponibles);


///Agregar elementos al principio

{paDisponibles.unshift("Ecuador");
ciudadesDisponibles.unshift("Quito");
console.log(ciudadesDisponibles);
console.log(paDisponibles);
}

console.log(ciudadesDisponibles);
console.log(paDisponibles);


///Función splice: elimina elementos y si es necesario, añade otros en esa posición

paDisponibles.splice(1,2,"Venezuela", "Paraguay");
console.log(paDisponibles);

for(i=0;i<2;i++){
    console.log(paDisponibles[i]);
}