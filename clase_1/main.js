// CLASE 1

// sintaxis y variables

let personaje = "Maximiliano";

let fecha = 1993;

const SEXO = "Masculino";

let caracteristicas = personaje + " " + fecha + " " + SEXO;

// salida de datos por consola

console.log(
  "Mi nombre es " +
    personaje +
    ", soy de sexo " +
    SEXO +
    " y naci en " +
    fecha +
    "."
);
console.log("Caracteristicas principales: " + caracteristicas);

// salida de datos por alert

alert("Bienvenido " + personaje);

alert("Me llamo " + personaje + " y naci en " + fecha);

// entrada de datos con strings del usuario

personaje = prompt("Ingrese su nombre");

alert("Bienvenid@ " + personaje);

// entrada de datos con numeros del usuario

let anioActual = parseInt(prompt("Ingrese el año actual"));

let edadPersonaje = anioActual - fecha;

console.log(edadPersonaje);

let iva = parseFloat(prompt("Ingrese el % de IVA utilizado en su país"));

let producto = parseFloat(prompt("Ingrese el precio de lista del producto"));

let precioProducto = iva * producto;

console.log(precioProducto);
