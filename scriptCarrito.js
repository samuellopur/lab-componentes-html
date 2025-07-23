let totalItems = 0;
let totalPrecio = 0;
let productosCarrito = [];

function agregarAlCarrito(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  productosCarrito.push(nombre);

  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-precio").textContent = totalPrecio;

  if (totalPrecio > 50) {
    alert("¡Envío gratis aplicado!");
  }

  console.log("Productos en el carrito:", productosCarrito);
}

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  productosCarrito = [];

  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-precio").textContent = totalPrecio;

  alert("Carrito vaciado");
}