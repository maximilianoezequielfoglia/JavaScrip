// FUNCIONES DE ORDEN SUPERIOR 2

// REPASO

const usuarios = [
  {
    id: 1,

    name: "Leanne Graham",

    username: "Bret",

    email: "Sincere@april.biz",

    address: {
      street: "Kulas Light",

      suite: "Apt. 556",

      city: "Gwenborough",

      zipcode: "92998-3874",

      geo: {
        lat: "-37.3159",

        lng: "81.1496",
      },
    },

    phone: "1-770-736-8031 x56442",

    website: "hildegard.org",

    company: {
      name: "Romaguera-Crona",

      catchPhrase: "Multi-layered client-server neural-net",

      bs: "harness real-time e-markets",
    },
  },

  {
    id: 2,

    name: "Ervin Howell",

    username: "Antonette",

    email: "Shanna@melissa.tv",

    address: {
      street: "Victor Plains",

      suite: "Suite 879",

      city: "Wisokyburgh",

      zipcode: "90566-7771",

      geo: {
        lat: "-43.9509",

        lng: "-34.4618",
      },
    },

    phone: "010-692-6593 x09125",

    website: "anastasia.net",

    company: {
      name: "Deckow-Crist",

      catchPhrase: "Proactive didactic contingency",

      bs: "synergize scalable supply-chains",
    },
  },

  {
    id: 3,

    name: "Clementine Bauch",

    username: "Samantha",

    email: "Nathan@yesenia.net",

    address: {
      street: "Douglas Extension",

      suite: "Suite 847",

      city: "McKenziehaven",

      zipcode: "59590-4157",

      geo: {
        lat: "-68.6102",

        lng: "-47.0653",
      },
    },

    phone: "1-463-123-4447",

    website: "ramiro.org",

    company: {
      name: "Romaguera-Jacobson",

      catchPhrase: "Face to face bifurcated interface",

      bs: "e-enable strategic applications",
    },
  },

  {
    id: 4,

    name: "Patricia Lebsack",

    username: "Karianne",

    email: "Julianne.OConner@kory.org",

    address: {
      street: "Hoeger Mall",

      suite: "Apt. 692",

      city: "South Elvis",

      zipcode: "53919-4257",

      geo: {
        lat: "29.4572",

        lng: "-164.2990",
      },
    },

    phone: "493-170-9623 x156",

    website: "kale.biz",

    company: {
      name: "Robel-Corkery",

      catchPhrase: "Multi-tiered zero tolerance productivity",

      bs: "transition cutting-edge web services",
    },
  },
];

// MOSTRAR POR CONSOLA EN UNA TABLA AQUELLOS USUARIOS CUYO WEBSITE INCLUYE .ORG

const usuariosOrg = usuarios.filter((usuario) =>
  usuario.website.toLowerCase().includes(".org")
);

console.log(usuariosOrg);

// CREAR UN NUEVO ARRAY QUE CONTENGA SOLO LOS NOMBRES DE LOS USUARIOS DE LA LISTA. MOSTRARLOS EN UNA TABLA

const nombreUsuarios = usuarios.map((usuario) => {
  return {
    Nombre: usuario.name,
  };
});

console.table(nombreUsuarios);

// CREAR NUEVO ARRAY QUE CONTENGA OBJETOS CON ID, USERNAME Y CITY. VISUALIZAR EN TABLA

const listaUsuarios = usuarios.map((usuario) => {
  return {
    id: usuario.id,
    username: usuario.username,
    city: usuario.address.city,
  };
});

console.table(listaUsuarios);

// ORDENAR EL ARRAY listaUsuarios POR ID DE MAYOR A MENOR

listaUsuarios.sort((a, b) => b.id - a.id);

console.table(listaUsuarios);

// ORDENAR ALFABETICAMENTE EL ARRAY listaUsuarios

listaUsuarios.sort((a, b) => a.username.localeCompare(b.username));

console.table(listaUsuarios);

// MANEJO DE MATEMATICAS - OBJETO MATH para resolver operaciones complejas

console.log(Math.E);

console.log(Math.PI);

// metodo min y max - Math.min() Math.max()

console.log(Math.min(8, 5, 2, 98, 45, 3));

console.log(Math.max(8, 5, 2, 98, 45, 3));

// metodo para redondear a numeros enteros cercanos- Ceil (redondea hacia arriba), Floor (redondea hacia abajo) & Round (redondea al mas cercano indistintamente)

const numero = 5.881243;

console.log(Math.ceil(numero)); //6

console.log(Math.floor(numero)); //5

console.log(Math.round(numero)); //6

// Square Root => Math.sqrt() - metodo para retornar la raiz cuadrada de un numero positivo

console.log(Math.sqrt(numero));

console.log(Math.sqrt(-numero));

console.log(Math.sqrt(16));

// para obtener numeros aleatorios entre 0 y 1 (no incluye a 1) - Math.random()

console.log(Math.random()); // entre 0 y 1, sin incluir al 1

console.log(Math.random() * 8); // entre 0 y 8, sin incluir al 8

console.log(Math.round(Math.random() * 8)); // entre 0 y 8

console.log(Math.round(Math.random() * 99)); // generar edades aleatorias de personas

// guardar 10 edades aleatorias en un array edades

const listaEdades = [];

for (let i = 1; i <= 10; i++) {
  listaEdades.push(Math.round(Math.random() * 99));
}

console.log(listaEdades);

// generar un array con 10 edades aleatorias que sean de personas mayores de edad y hasta 88 años

const listaEdades2 = [];

for (let i = 1; i <= 10; i++) {
  listaEdades2.push(Math.round(Math.random() * 70 + 18));
}

console.log(listaEdades2);

// MANEJO DE FECHAS - OBJETO DATE para representar fechas

// fecha y hora momentanea

const ahora = new Date();

console.log(ahora);

// fecha y hora elegida mediante CONSTRUCTOR formato numero

const fechaClase8 = new Date(2023, 5, 1, 20, 42);

console.log(fechaClase8);

// fecha y hora elegida mediante CONSTRUCTOR formato string

const fechaVacaciones = new Date("June 16,2023,10:20:00");

console.log(fechaVacaciones);

// OBTENER UN VALOR SINGULAR DE LA FECHA

// retorna la fecha actual - getDay()

const diaHoy = ahora.getDay();

console.log(diaHoy);

// retornar el dia actual como string

const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

console.log("Hoy es " + dias[ahora.getDay() - 1]);

console.log(ahora.toLocaleString()); // fecha y hora en formato local
