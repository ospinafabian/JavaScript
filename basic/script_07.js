let tires = parseInt(prompt("Ingresa el numero de llantas entre 0 y 20:"));
let transport = prompt(
  "Ingresa el medio de transporte entre aereo, terrestre y acuatico:"
).toLowerCase();

if (tires != NaN && transport != "") {
  if (tires == 4 && transport == "terrestre") {
    alert("El medio de transporte es: Automovil");
  } else if (tires > 4 && transport == "terrestre") {
    alert("El medio de transporte es: camion");
  } else if (tires == 2 && transport == "terrestre") {
    alert("El medio de transporte es: moto o bicicleta");
  } else if (tires == 1 && transport == "terrestre") {
    alert("El medio de transporte es: monociclo");
  } else if (tires == 0 && transport == "acuatico") {
    alert("El medio de transporte es: barco");
  } else if (tires == 20 && transport == "aereo") {
    alert("El medio de transporte es: avion");
  } else {
    alert("los datos ingresados no equivalen a un medio de transporte");
  }
} else {
    alert("falta alguno de los datos")
}
