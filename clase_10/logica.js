console.table(productos);
let contenedorProds = document.getElementById("misprods");
//DOM
function renderizarProductos(listaProds) {
  //vaciamos en contenedor para evitar duplicados
  contenedorProds.innerHTML = "";
  //cargamos las cartas de los productos solicitados
  for (const prod of listaProds) {
    contenedorProds.innerHTML += `
            <div class="card col-sm-2">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                </div>
            </div>
        `;
  }
  // EVENTOS
  let botones = document.getElementsByClassName("compra");
  for (const boton of botones) {
    // OPCION
    boton.addEventListener("click", () => {
      console.log("hiciste click");
    });
  }
}

renderizarProductos(productos);
