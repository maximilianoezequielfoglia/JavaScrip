// DOM - document objet model - documento de objetos del modelo

console.log(document.body); // visualizamos el codigo del body por consola
console.dir(document.body); // visualizamos el documento de objetos del body mas completo por consola

// como acceder a los nodos del html o DOM a traves de js

// getElementById() - selecciona un elemento del html utilizando el atributo ID como identificacion

// podemos modificar los estilos desde js

let seccion = document.getElementById("principal");

seccion.style.background = "darkorange";

let titulo = document.getElementById("titulo");

titulo.style.font = "bold 40px jetbrainmono";

titulo.innerText = "Hoy estamos en la CLASE 9 | DOM";

// getElementByTagName() - selecciona un elemento del html utilizando el atributo ETIQUETA como identificacion

let parrafos = document.getElementsByTagName("p");

// si hay diversas etiquetas debo acceder a la que quiero modificar segun su posicion

parrafos[0].innerText = "Nuevo parrafo"; // en este caso es el primer parrafo, entonces su posicion es 0

parrafos[0].innerText = new Date().toLocaleDateString(); // puedo agregar la fecha

let articulo = document.getElementById("articulo");

/* articulo.innerHTML = "<button>Click</button>"; // puedo pisar y remplazar codigo en el HTML */

articulo.innerHTML += "<button class='btn btn-dark'>Click</button>"; // puedo agregar codigo en el HTML y al incorporar bootstrap puedo utilizarlo tambien

// como modificar o agregar contenido en un input

let inputEmpresa = document.getElementById("empresa");

let inputCantidad = document.getElementById("cantidad");

inputEmpresa.value = "Sauco";

//array de objetos literales

const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },

  { id: 2, nombre: "Fideo", precio: 70 },

  { id: 3, nombre: "Pan", precio: 50 },

  { id: 4, nombre: "Flan", precio: 100 },

  { id: 5, nombre: "Helado", precio: 200 },

  { id: 6, nombre: "Coca Cola", precio: 900 },

  { id: 7, nombre: "Harina", precio: 100 },

  { id: 8, nombre: "Lechuga", precio: 80 },
];

inputCantidad.value = productos.length; // agregamos el array de productos al input cantidad

// crear e insertar elementos desde objetos

/* for (const producto of productos) {
  let contenedor = document.createElement("div");
  // definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                          <p> Producto: ${producto.nombre}</p>
                          <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
} */

// creamos e insertamos cartas

let articuloCartas = document.getElementById("cartas"); // contenedor que creamos para las cartas

for (const producto of productos) {
  let carta = document.createElement("div"); // creamos un elemento huerfano para que aloje a las cartas
  carta.className = "card col-md-3"; // definimos a la carta con una clase
  carta.innerHTML = `<div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">$ ${producto.precio}</p>
                      <button class="btn btn-dark">Comprar</button>
                    </div>`; // cargamos el contenido interno de la carta
  articuloCartas.appendChild(carta); // declaramos a las cartas como hijas de articuloCartas
}
