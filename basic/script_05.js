//Condicionales - if/else

//Algoritmo que dependiendo si el o la usuaria es mayor de 18 años, habilita un catalogo de peliculas violentas
// Si el pais es china asi sea mayor de 18 años no habilita el catalogo

let age = prompt("Ingresa tu edad");
let country = prompt("Ingresa tu pais")

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
