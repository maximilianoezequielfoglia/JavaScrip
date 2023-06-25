//segunda pre entrega
console.table(productos);
let contenedorProductos = document.getElementById("misproductos");

//funcion para poder filtrar por precio
function filtrarPorPrecio(precio) {
  const filtrados = productos.filter((prod) => prod.precio <= precio);
  return filtrados;
}

//DOM
function renderizarProductos(listaProductos) {
  //vaciamos el contenedor para evitar duplicados
  contenedorProductos.innerHTML = "";
  //cargamos las cartas de los productos solicitados
  for (const producto of listaProductos) {
    contenedorProductos.innerHTML += `  <div class="card col-sm-2">
                                            <img class="card-img-top" src=${producto.foto} alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-title">${producto.nombre}</h5>
                                                <p class="card-text">$ ${producto.precio}</p>
                                                <button class="btn btn-dark">Comprar</button>
                                            </div>
                                        </div>`;
  }
}

renderizarProductos(productos);

//dato de entrada
let precioMax = parseFloat(
  prompt("Ingresa el precio máximo que puedes abonar.\n0-salir.")
);

while (precioMax != 0) {
  if (isNaN(precioMax) || precioMax < 0) {
    alert("Ingrese un número valido.");
  } else {
    //ya tenemos un numero valido
    const productosFiltrados = filtrarPorPrecio(precioMax);
    console.table(productosFiltrados);
    renderizarProductos(productosFiltrados);
  }
  precioMax = parseFloat(
    prompt("Ingresa el precio máximo que puedes abonar.\n0-salir.")
  );
}
