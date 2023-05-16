//Control de mayusculas y minisculas
//Conversion de tipos de datos

let age = parseInt(prompt("Ingresa tu edad"));
let country = prompt("Ingresa tu pais").toLowerCase();


if (age >= 18 && country != "china" ) {
  alert("PG18+ movies unlocked");
} else {
  alert("access not granted");
}

/**
 *  > : Indicar que es mayor a algo
 *  < : Indicar que es menor a algo
 *  == : comparar si un valor es igual al otro
 *  >= : si es mayor o igual
 *  <= : si es menor o igual
 *  != : diferente
 *
 * Operadores Logicos
 * &&: Y
 * ||: O
 */
