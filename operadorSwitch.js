const ciudadDestino="Quito";
const ciudadesDisponibles=new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let valorPasaje=0;




////Forma uno de verificación: ifs anidados
console.log(`Verificando pasajes para ${ciudadDestino}`);

/*if(ciudadesDisponibles.indexOf(ciudadDestino)>-1){

    if(ciudadDestino=="Bogotá"){
        valorPasaje=500;
    }else if(ciudadDestino=="Lima"){
        valorPasaje=400;
    }else if(ciudadDestino=="Santiago"){
        valorPasaje=380;
    }else if(ciudadDestino=="Montevideo"){
        valorPasaje=200;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`);
} else {

    console.log("Ciudad no disponible para viajar")

} */

//Forma dos de verificación: switch


    switch(ciudadDestino){
        case "Bogotá":
            valorPasaje=500;
            break;
        case "Lima":
            valorPasaje=400;
            break;
        case "Santiago":
            valorPasaje=380;
            break;
        case "Montevideo":
            valorPasaje=200;
            break;
        default:
            console.log(`no hay pasajes para la ciudad indicada`);
            break;
    }
    /* console.log(`El valor del pasaje es: ${valorPasaje}`); */ //Funciona así
if(valorPasaje>0){
    console.log(`El valor del pasaje es: ${valorPasaje}`)
}