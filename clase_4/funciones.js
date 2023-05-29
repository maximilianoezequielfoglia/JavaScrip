// CLASE 4 FUNCIONES

// ejemplo 1, funciones basicas
/*function enviarBienvenida() {
  alert("Bienvenid@ Usuario");
}

enviarBienvenida();*/

// la repetimos con un ciclo for
/*for (let i = 0; i < 4; i++) {
  enviarBienvenida();
  console.log("Vuelta " + i);
}*/

// ejemplo 2
/*function saludar() {
  let nombre = prompt("Ingresa tu nombre");
  alert("Bienvenid@ " + nombre);
}

saludar();*/

// funciones con parametros

/*function enviarBienvenida2(nombre) {
  alert("Bienvenid@ " + nombre);
}

enviarBienvenida2("Juanita");
enviarBienvenida2("Juan Carlos Santana");

// pedir el parametro

let nombre = prompt('Ingresa tu nombre');

enviarBienvenida2(nombre);*/

// funcion que va a calcular el IVA de un precio

/*function calcularIva(precio) {
  let iva = precio * 0.21;
  console.log("El IVA de $" + precio + " es $" + iva);
}

calcularIva(100);
calcularIva(2345);

// pedir el parametro al usuario

let valorProducto = parseFloat(
  prompt("Ingresa el valor de tu producto en pesos")
);

calcularIva(valorProducto);*/

// funciones con parametros y return

/*function autenticarUsuario(user, password) {
  if (user == "Pepe" && password == "12345") {
    return true;
  } else {
    return false;
  }
}

let autenticado = autenticarUsuario("Pepe", "12345");
alert("Usuario autenticado? " + autenticado);*/

// ingreso de datos por el usuario

/*function autenticarUsuario(user, password) {
  if (user == "Pepe" && password == "12345") {
    return true;
  } else {
    return false;
  }
}

let usuario = prompt("Ingresa tu nombre de usuario");
let contrasenia = prompt("Ingresa la contraseña para " + usuario);

let autenticado = autenticarUsuario(usuario, contrasenia);
if (autenticado) {
  alert("Bienveni@ " + usuario);
} else {
  alert("Usuario o contaseña erroneos");
}*/

// funciones anonimas

// calculamos el cuadrado de un numero

/*const cuadrado = function (numero) {
  return numero * numero;
};

console.log(cuadrado(9));

// misma funcion pero de manera normal

function calcularCuadrado(numero) {
  let cuadrado = numero * numero;
  return cuadrado;
}

let resultadoCuadrado = calcularCuadrado(9);
console.log(resultadoCuadrado);*/

// funciones flechas

// calcula el area de un rectangulo

/*let area = (base, altura) => base * altura;

console.log("El area del rectangulo es: " + area(10, 5));*/
