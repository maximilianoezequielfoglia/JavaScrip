// OBJETOS

/*const mouse = {
  marca: "genius",
  color: "negro",
  botones: 3,
  tipoDeConexion: "wireless",
  precio: 6999.99,
};

// vemos el objeto

console.log(mouse);

// vemos una propiedad del objeto

console.log(mouse.marca);

// cambiamos una propiedad del objeto aunque este declarado como constante

mouse.marca = "Logitech";

console.log(mouse);

// agregar una propiedad

mouse.garantia = "12 meses";

console.log(mouse);

// eliminar una propiedad

delete mouse.tipoDeConexion;

console.log(mouse);

// ver mas de una propiedad concatenandolas y como string

console.log(mouse.marca + " $" + mouse.precio);

// ver mas de una propiedad sin concatenar

console.log(mouse.botones, mouse.color, mouse.precio);

// otra forma de acceder y/o modificar la propiedad de un objeto

mouse["botones"] = 2;

console.log(mouse);*/

// OBJETOS CONSTRUCTORES (MOLDES O CREADORES DE OBJETOS EN SERIE)

// funcion constructora de molde para crear objetos

function Prenda(codigo, talle, marca, tipo) {
  this.codigo = codigo;
  this.talle = talle;
  this.marca = marca;
  this.tipo = tipo;
}

// creamos los objetos (prendas)

const prenda1 = new Prenda(123, "s", "nike", "calza");
const prenda2 = new Prenda(124, "l", "adidas", "short");
const prenda3 = new Prenda(125, "m", "puma", "hoodie");

// los vemos por consola

console.log(prenda1);

// vemos a todos los objetos

console.log(prenda1, prenda2, prenda3);

// metodos con objetos (crear funcionalidades solo para los objetos)

// metodos de strings

let oracion = "Que HERMOSA noche tenemos hoy";

console.log(oracion.toUpperCase()); // transforma a mayuscula

console.log(oracion.toLowerCase()); // transforma a minuscula

// propiedad de string

console.log(oracion.length); // cuenta la longitud de caracteres

// METODOS PERSONALIZADOS

function Ropa(codigo, talle, marca, tipo) {
  // propiedades
  this.codigo = codigo;
  this.talle = talle;
  this.marca = marca;
  this.tipo = tipo;
  // metodo
  this.mostrarInfo = function () {
    console.log(
      "El articulo seleccionado es un/a: " +
        this.tipo +
        ".\nMarca: " +
        this.marca +
        ".\nTalle: " +
        this.talle +
        ".\nCodigo n°: " +
        this.codigo
    );
  }; // aqui cree el metodo personalizado
}

const ropa1 = new Ropa(123, "S", "Nike", "Calza");
const ropa2 = new Ropa(124, "L", "Adidas", "Short");
const ropa3 = new Ropa(125, "M", "Puma", "Hoodie");

// si quiero mostrar el metodo personalizado lo llamo y nombro a un objeto

ropa1.mostrarInfo();

// OPERADOR FOR...IN (ACCEDE Y MUESTRA LAS PROPIEDADES DEL OBJETO)

for (const prop in ropa1) {
  console.log(prop);
}

// para indicar ademas de la propiedad, el dato que contiene esa propiedad

for (const prop in ropa1) {
  console.log(prop, ropa1[prop]);
}

// CLASES

class Paciente {
  constructor(nombre, altura, peso, edad) {
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.edad = edad;
  }
  calcularIMC() {
    let imc = this.peso / (this.altura * this.altura);
    console.log("El indice de masa corporal de " + this.nombre + " es: " + imc);
  }
}

const p1 = new Paciente("Raul", 1.92, 84, 27);

console.log(p1);
p1.calcularIMC();
