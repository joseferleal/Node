const ciudadesDisponibles=new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const paDisponibles=["Colombia", "Perú", "Chile","Brasil","Argentina", "Uruguay", "Venezuela"];
const cantidadCiudades=ciudadesDisponibles.length; //Es una propiedad, no una función
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de países tenemos ${paDisponibles.length} elementos`);


//Remueve el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);
//Remueve el último elemento
paDisponibles.pop();
console.log(paDisponibles);
console.log(`En la lista de ciudades tenemos ${paDisponibles.length} elementos`);

//Filtrar elementos de la lista
//Elementos que están
const paFiltrados=paDisponibles.filter((e)=>e=="Brasil");
console.log(paFiltrados);
//Elementos que no están
const paFiltrados2=paDisponibles.filter((e)=>e=="Bolivia");

if(paFiltrados=="Brasil"){
    console.log("Está en la lista")

}else{
    console.log("No está")
};

//Filtro con extensión
const paFiltrados3=paDisponibles.filter((e)=>e.length>6);
console.log(paFiltrados3); 

//Conversión de una lista en una cadena de caracteres
console.log(paDisponibles.join("-"));
let cadena=paDisponibles.join("-");
console.log(cadena);

///Ordenar un arreglo: hay que tener en cuenta que la función sort sí modifica el orden del arreglo original
console.log(paDisponibles.sort());
console.log(paDisponibles);

//Cómo conocer la posición de un elemento. Función index of
console.log(`Perú está en la posición: ${paDisponibles.indexOf("Perú")}`); //Recordar que las posiciones empiezan contando desde cero

//Unificar dos listas
const ciudadesPaises=paDisponibles.concat(ciudadesDisponibles);
console.log(ciudadesPaises);