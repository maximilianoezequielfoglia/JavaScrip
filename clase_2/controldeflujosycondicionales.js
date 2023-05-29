// CLASE 2

// control de flujos, condicionales (if)

let temperatura = 30;

if (temperatura == 30) {
  console.log("Hace mucho calor 🥵, prendan el aire");
}

let idioma = prompt("Ingresa tu idioma\n1-Español\n2-Inglés\n3-Otro");

if (idioma == "1") {
  alert("Bienvenido");
}

if (idioma == "2") {
  alert("Welcome");
}

if (idioma == "3") {
  alert("----");
}

// condicionales (if else)

let equipoDeFutbol = prompt("Ingresa tu equipo de futbol");

if (equipoDeFutbol == "Boca") {
  alert("Mi equipo favorito tambien es Boca!!");
} else {
  alert("Que pena 🥲 que no seas del mas grande, Boca");
}

// if...else if

let totalPedido = prompt("Ingresa el total de tu compra");

if (totalPedido < 500) {
  alert("El envio tiene un costo de $1.500.");
} else if (totalPedido < 1000) {
  alert("El envio tiene un costo de $1.000.");
} else if (totalPedido < 1500) {
  alert("El envio tiene un costo de $500.");
} else if (totalPedido < 2000) {
  alert("El envio tiene un costo de $250.");
} else {
  totalPedido >= 2000;
  alert("El envio no tiene costo!");
}

// variables booleanas

let totalCompra = parseFloat(prompt("Ingrese el monto del total de su compra"));

// se dara envio sin costo igualando o superando los $20.000

let envioSinCosto = totalCompra >= 20000;

console.log("El usuario tiene envio sin costo: " + envioSinCosto);

/*if (totalCompra >= 20000) {
  envioSinCosto = true;
} else {
  envioSinCosto = false;
}*/

// operador AND && (todas las condiciones deben ser verdadeeras)

let equipoFutbol = prompt(
  "Cual fue el equipo de futbol en el que se inicio Lionel Messi?"
);
let edadMessi = prompt("Cual es la edad actual de Lionel Messi?");
let cantidadHijos = prompt("Cuantos hijos tiene Lionel Messi?");

if (equipoFutbol == "Newells" && edadMessi == "35" && cantidadHijos == "3") {
  alert("Ganaste! Acertaste a todas las preguntas!");
} else {
  alert("Una o mas respuestas incorrectas");
}

// operador OR || (al menos una condicion debe ser verdadera)

let banda = prompt(
  "Cual fue la banda pop que en 2022 realizo 10 recitales en el estadio de River Plate?"
);

if (banda == "coldplay" || banda == "Coldplay" || banda == "COLDPLAY") {
  alert("Excelente!!");
}
