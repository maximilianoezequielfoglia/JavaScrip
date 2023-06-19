//array de objetos libros

const libros = [
  {
    title: "Snowflake: The Definitive Guide",

    subtitle:
      "Architecting, Designing, and Deploying on the Snowflake Data Cloud",

    isbn13: "9781098103828",

    price: 58.9,

    image: "https://itbook.store/img/books/9781098103828.png",

    url: "https://itbook.store/books/9781098103828",
  },

  {
    title: "Python for Data Analysis, 3rd Edition",

    subtitle: "Data Wrangling with pandas, NumPy, and Jupyter",

    isbn13: "9781098104030",

    price: 37.49,

    image: "https://itbook.store/img/books/9781098104030.png",

    url: "https://itbook.store/books/9781098104030",
  },

  {
    title: "Reliable Machine Learning",

    subtitle: "Applying SRE Principles to ML in Production",

    isbn13: "9781098106225",

    price: 43.99,

    image: "https://itbook.store/img/books/9781098106225.png",

    url: "https://itbook.store/books/9781098106225",
  },

  {
    title: "Data Visualization with Python and JavaScript, 2nd Edition",

    subtitle: "Scrape, Clean, Explore, and Transform Your Data",

    isbn13: "9781098111878",

    price: 60.99,

    image: "https://itbook.store/img/books/9781098111878.png",

    url: "https://itbook.store/books/9781098111878",
  },
];

//FUNCION QUE RETORNA OTRA FUNCION

// VELOCIDAD MINIMA PERMITIDA EN AUTOPISTA: 60KM
// VELOCIDAD MAXIMA PERMITIDA EN AUTOPISTA: 130KM

function evaluarVelocidadPermitida(minima, maxima) {
  return (velocidad) => minima <= velocidad && velocidad <= maxima;
}

const velocidadActual = evaluarVelocidadPermitida(60, 130);

//salida por consola
console.log(velocidadActual(80));

//salida por alert
if (velocidadActual(85)) {
  alert("Circula correctamente.");
} else {
  alert("Atencion, esta circulando a una velocidad incorrecta");
}

// FUNCION QUE RECIBE A OTRA FUNCION POR PARAMETRO

// recibir precios de distintos productos que tengo en stock

const precios = [1245, 5468, 8695, 6425];

function porCadaUno(lista, funcion) {
  for (const elemento of lista) {
    console.log(funcion(elemento));
  }
}

function sumarIva(precio) {
  return precio * 1.21;
}

porCadaUno(precios, sumarIva);

// pasar a mayuscula una lista de nombres

const nombres = ["pepe", "lolo", "marito", "lila"];

function pasarAMayuscula(palabra) {
  return palabra.toUpperCase();
}

porCadaUno(nombres, pasarAMayuscula);

// FUNCIONES DE ORDEN SUPERIOR

// METODOS DE BUSQUEDA Y TRANSFORMACION

// por cada uno - forEach()

const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
  console.log(num);
});

nombres.forEach((nom) => {
  console.log(nom);
});

nombres.forEach((nombres) => {
  const nomMayus = nombres.toUpperCase();
  console.log("El nombre de la persona es " + nomMayus);
});

libros.forEach((libro) => {
  const titMayus = libro.title.toUpperCase();
  console.log("El nombre del libro es " + titMayus);
});

// encontrar - find()

const encontrado = libros.find((libro) => libro.isbn13 == "9781098111878");

if (encontrado != undefined) {
  console.log(encontrado);
} else {
  console.log("El isbn es inexistente");
}

// filtrar - filter()

const librosDeDataBaratos = libros.filter(
  (libro) => libro.title.toLowerCase().includes("data") && libro.price < 40
);

console.log(librosDeDataBaratos);

let maximo = parseFloat(
  prompt("Cual es el maximo valor que esta dispuest@ a pagar por un libro?")
);

const resultado = libros.filter((libro) => libro.price <= maximo);

console.log(resultado);

// si algo esta o no - some()

const existe = libros.some((libro) => libro.subtitle == "C++");

console.log(existe);

// extrae datos del array y crea otro mostrandolos - map()

const listaTitulosYPrecios = libros.map((libro) => {
  return {
    title: libro.title,
    price: libro.price,
  };
});

console.log(listaTitulosYPrecios);

// reduce y resume - reduce()

const totalPrecios = libros.reduce(
  (acumulador, libro) => acumulador + libro.price,
  0
);

console.log("El total de los precios es $ " + totalPrecios);

// para reordenar un array - sort()

// si quiero reordenar los precios de los libros en orden ascendente

libros.sort((a, b) => a.price - b.price);

console.log(libros);

// si quiero reordenar los precios de los libros en orden descendente

libros.sort((a, b) => b.price - a.price);

console.log(libros);

// para visualizar mejor

console.table(libros);
