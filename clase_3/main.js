// CLASE 3
// ciclos e iteraciones

// ciclos for, por conteo

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
