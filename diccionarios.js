///Mapas, listas o diccionarios

const datos= [ {
    "ciudad":"Bogotá",
    "precio":500
},
    {
    "ciudad":"Lima",
    "precio":400
    },
    {
    "ciudad":"Santiago",
    "precio":380
    },
    {
    "ciudad":"Montevideo",
    "precio":200
    }

];
const presupuestoDisponible=190; 

let i=0;
/*while((i<datos.length)&&(datos[i].precio > presupuestoDisponible)){ //Primero tiene que verificar la longitud de la lista y después compara el precio
    
    //Otras formas de incrementar
    //i=i+1;
    i+=1;
    //i++;//Si el pasaje es más caro, el while sigue avanzando a la siguiente ciudad
}if(i==datos.length)
    console.log("No tenemos ciudades disponibles");
else
console.log("Puedes comprar pasaje para la ciudad de " + datos[i].ciudad);


/*Con el Do while */
let ciudadSeleccionada=" ";

do{
    if(datos[i].precio<presupuestoDisponible){
        ciudadSeleccionada=datos[i].ciudad;
    }
    i++;
}while(i<datos.length && ciudadSeleccionada ==" ")
if(ciudadSeleccionada==" "){console.log("No tenemos pasajes disponibles")}
else{console.log("Puedes comprar pasaje para: " + ciudadSeleccionada)};
