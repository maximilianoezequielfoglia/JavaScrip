/* // ARRAYS (Listas)

const listaCumple = ["gaseosas", "salchichas", "pan", "torta", "mayonesas"];

console.log(listaCumple);

// para imprimir un elemento en particular de la lista

console.log(
  "En la posicion n°2 del array de compras se encuentra " + listaCumple[2]
);

// se puede concatenar, en caso de ser strings, los elementos de la lista

console.log(listaCumple[2] + " " + listaCumple[3]);

// se puede sumar, en caso de ser numeros, los elementos de la lista

const edades = [23, 28, 31, 54, 33];

console.log(edades[0] + edades[3]);

// como recorrer el array con un for

for (let i = 0; i < listaCumple.length; i++) {
  console.log(listaCumple[i]);
}

// agregar elementos nuevos al array (metodo push)
// lo agrega en la ultima posicion

listaCumple.push("servilletas de papel");

console.log(listaCumple);

// pedir al usuario que agregue elementos nuevos a la lista

let nuevoElemento = prompt("Cual es el nuevo elemento de la lista de cumple?");

listaCumple.push(nuevoElemento);

console.log(listaCumple);

// agregar elementos al array (metodo unshift)
// lo agrega en la primera posicion

listaCumple.unshift("hamburguesas");

console.log(listaCumple);

// eliminar un elemento del array (metodo pop)
// elimina el ultimo elemento

listaCumple.pop();

console.log(listaCumple);

// eliminar un elemento del array (metodo shift)
// elimina el primer elemento

listaCumple.shift();

console.log(listaCumple);

// eliminar o agregar un elemento del array (metodo splice)
// elimina o agrega un elemento en cualquier posicion del array

// eliminar

listaCumple.splice(3, 1);

console.log(listaCumple);

// agregar

listaCumple.splice(3, 0, "queso");

console.log(listaCumple);

// se genera una concatencaion de strings separados por el valor que pasemos por parametro (metodo join)

console.log(listaCumple.join("*-*"));

// se utiliza para combinar dos arrays en un unico array (metodo concat)

const perros = ["simon", "bastian", "uma", "quique", "violeta"];

const gatos = ["limba", "felix", "lolo"];

const mascotas = perros.concat(gatos);

console.log(mascotas);

// quita y utiliza una porcion de elementos de un array a modo de copia, para poder agregarlo a otro array (metodo slice)

const nombre = [
  "rita",
  "maria",
  "mercedes",
  "ana",
  "miguel",
  "roman",
  "victor",
  "eli",
];

const masculinos = nombre.slice(4, 7);

console.log(masculinos);

// para conocer el indice o la posicion de un elemento en un array (indexOf)

let aBuscar = prompt("Ingresa el nombre del alumno"); // pedimos al usuario que ingrese el nombre del cual desea conocer la posicion

console.log(nombre.indexOf(aBuscar)); // mostramos la posicion del nombre que ingreso el usuario

if (nombre.indexOf(aBuscar) == -1) {
  alert(aBuscar + " no se encuentra inscripto aun");
  let respuesta = prompt("desea inscribir a " + aBuscar + " ? (s-si n-no)");
  if (respuesta.toLowerCase() == "s") {
    nombre.push(aBuscar);
  }
} else {
  alert(aBuscar + " ya se encuentra inscripto");
} // condicional para alertar si la persona buscada esta o no segun la posicion que esta tenga
// si no esta se da la opcion de agregarla pusheandola

// para conocer si un elemento que recibo por parametro existe o no dentro de un array (metodo includes)
// lo indica con un true o false (buleanos)

console.log(nombre.includes("rita"));
console.log(nombre.includes("miguel"));
console.log(nombre.includes("tatiana"));

// ivierte el orden de los elementos del array (metodo reverse)
// el array queda modificado de manera permanente

console.log(nombre.reverse()); */

// ARRAY DE OBJETOS

const tareas = [
  {
    id: 1,
    nombre: "Estudiar JS",
  },
  {
    id: 2,
    nombre: "Realizar compras",
  },
  {
    id: 3,
    nombre: "Entrenar",
  },
  {
    id: 4,
    nombre: "Cocinar",
  },
];

console.log(tareas);

console.log(tareas[1]);

// como recorrer el array con un FOR OF

for (const tarea of tareas) {
  console.log(tarea);
}

const nombre = [
  "rita",
  "maria",
  "mercedes",
  "ana",
  "miguel",
  "roman",
  "victor",
  "eli",
];

for (const nombres of nombre) {
  console.log(nombres);
}

for (const tarea of tareas) {
  console.log(tarea.nombre);
} // puedo imprimir una propiedad especifica del elemento del array
