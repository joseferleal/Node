const ciudadesDisponibles=new Array("Bogotá", "Lima", "Santiago", "Montevideo");    
const precioCiudad=new Array(500, 400, 380, 200);
const presupuestoDisponible=500;

//El while se ejecuta cero o más veces. El do while se debe ejecutar al menos una vez y el for se ejecuta determinado número de veces

let i=0;
/* while((precioCiudad[i]  > presupuestoDisponible)&&(i<ciudadesDisponibles.length)){
    
    //Otras formas de incrementar
    //i=i+1;
    i+=1;
    //i++;//Si el pasaje es más caro, el while sigue avanzando a la siguiente ciudad
}if(i==ciudadesDisponibles.length)
    console.log("No tenemos ciudades disponibles");
else
console.log("Puedes comprar pasaje para la ciudad de " + ciudadesDisponibles[i]);
 */
//Do

do{i++;}while(precioCiudad[i]>presupuestoDisponible && i < ciudadesDisponibles.length); ///Puede que no verifique Bogotá. Le tengo que cambiar el i a -1 para que empiece a contar desde ahí y lo pueda verificar
if(i==ciudadesDisponibles.length)
    console.log("No tenemos ciudades disponibles");
else
console.log("Puedes comprar pasaje para la ciudad de " + ciudadesDisponibles[i]);
