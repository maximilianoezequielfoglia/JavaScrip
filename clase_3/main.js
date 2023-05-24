// CLASE 3
// ciclos e iteraciones

// ciclos for, por conteo
/*
for (let i = 1; i <= 3; i++) {
  console.log("Conteo: " + i);
}
console.log("El conteo ha finalizado");

// ciclo for para una tabla de multiplicar

let ingresarNumero = parseInt(prompt("Ingresar numero"));
for (let i = 1; i <= 10; i++) {
  let resultado = ingresarNumero * i;
  alert(ingresarNumero + "x" + i + "=" + resultado);
}

// ciclo for para dar turnos

for (let i = 1; i <= 5; i++) {
  let ingresarNombre = prompt("Ingresar nombre");
  alert("Turno N° " + i + " Nombre: " + ingresarNombre);
}

// sentencia break, para finalizar un ciclo al cumplir un parametro

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  alert(i);
}

// sentencia break para adivinar un numero

let numeroAAdivinar = 3;
let numeroUsuario;

for (let i = 1; i <= 5; i++) {
  numeroUsuario = parseInt(
    prompt("Adivina, cual es el numero que pense? - (de 1 a 20)")
  );
  if (numeroUsuario == numeroAAdivinar) {
    alert("Ganaste!");
    break;
  }
  alert("No es el numero " + numeroUsuario + "\nSigue intentando!");
}

// sentencia continue para saltear numeros en el ciclo, como si los mismos no existieran

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  alert(i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 2 || i == 6) {
    continue;
  }
  alert(i);
}

// while, ciclo por condicion, cicla si se da la condicion y puede no iniciar

let deporte = prompt("Ingresa un deporte que te guste (s-para salir)");

while (deporte != "s") {
  if (deporte == "tenis") {
    console.log("Me encanta el tenis!");
  } else if (deporte == "futbol") {
    alert("Es el mejor deporte!");
  } else {
    console.log("Escribiste " + deporte);
  }

  deporte = prompt("Ingresa otro deporte que te guste (s-para salir)");
}
*/
// variable con entrada para acceder a la compra
let eleccion = prompt(
  "Hola!! Bienvenid@!!\nGracias por acceder a nuestra tienda!\nDeseas adquirir alguna prenda?\ns-sí."
);
// variable para calcular montos de compra
let total = 0;
// ciclo para iniciar la compra
while (eleccion.toLocaleLowerCase() == "s") {
  let prenda = parseInt(
    prompt(
      "1-CALZA BLACK > $9.850\n-Calza de tiro alto.\n-Lycra super flex.\n-Alta compresión.\n-Talles del 1 al 6.\n\n2-BIKER PINK > $6.980\n-Biker de algodón.\n-Tiro alto.\n-Algodón super soft.\n-Talles del 1 al 6.\n\n3-HOODIE VIOLET > $17.430\n-Super comodo.\n-Unisex.\n-Frizado.\n-Talles del XS al XL.\n\n4-REMERA CAMO > $6.200\n-Tela Dry Fit.\n-Varios colores.\n-Secado rapido.\n-Talles del XS al XL."
    )
  );
  switch (prenda) {
    case 1:
      alert("CALZA BLACK > $9.850 ingresó al carrito!");
      totalCompra(9850);
      break;
    case 2:
      alert("BIKER PINK > $6.980 ingresó al carrito!");
      totalCompra(6980);
      break;
    case 3:
      alert("HOODIE VIOLET > $17.430 ingresó al carrito!");
      totalCompra(17430);
      break;
    case 4:
      alert("REMERA CAMO > $6.200 ingresó al carrito!");
      totalCompra(6200);
      break;
    default:
      alert("Prenda inexistente.");
      break;
  }
  eleccion = prompt("Deseas adquirir alguna otra prenda?\ns-sí.");
}
// salida por alert para conocer el monto de la compra
alert("El monto total de tu compra es de: $" + total);
// funcion para calcular la suma de las prendas elegidas
function totalCompra(precio) {
  total = total + precio;
  alert("El monto de tu compra es de: $" + total);
}
