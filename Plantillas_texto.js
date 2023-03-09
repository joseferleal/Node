const nombrePasajero ="Leonardo";
const apellidoPasajero="LaCruz";
//Interpolación de variables
let nombreCompleto= `${nombrePasajero} ${apellidoPasajero}`; //Con las comillas invertidas (acento grave) se pueden usar variables dentro de otras
console.log(nombreCompleto);

let segundoPasajero="Diego Castillo";
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);
segundoPasajero=13566516;
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);


/* 

https://www.freecodecamp.org/espanol/news/como-utilizar-la-interpolacion-de-cadenas-en-javascript/
En primer lugar, puedes ver que estamos usando comillas invertidas `` para crear las plantillas literales. El formato ${marcador} nos permite insertar un valor dinámico en la cadena. Todo lo que hay dentro ${} es evaluado como JavaScript.

Por ejemplo, podríamos escribir Se estima que la Tierra tiene ${edad + 10} mil millones de años., y funcionaría como si hiciéramos const edad = 4.5 + 10;.

¿Cómo lo hacíamos antes?
Antes de contar con las plantillas literales, lo habríamos hecho de la siguiente manera:

const edadTierra = "Se estima que la Tierra tiene " + edad + " mil millones de años.";
Como puedes ver, se utilizan demasiadas comillas para una simple cadena. Imagina que tengamos que insertar múltiples variables. Puede transformarse rápidamente en una cadena compleja que no es muy legible. Por lo tanto, las plantillas literales hacen que las cadenas sean más limpias y legibles.

 */