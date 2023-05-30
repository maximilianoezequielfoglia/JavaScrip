// OBJETOS

const mouse = {
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

console.log(mouse);

// OBJETOS CONSTRUCTORES (MOLDES O CREADORES DE OBJETOS EN SERIE)
