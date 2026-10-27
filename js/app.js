let carrito = [];

function anadir(producto) {
  carrito.push(producto);
  document.getElementById("contador").textContent = carrito.length;
  console.log("Añadido:", producto);
}

// Sustituye a los onclick del HTML: un listener por cada botón «Añadir»
document.querySelectorAll(".producto button").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const producto = boton.closest(".producto").querySelector("h2").textContent;
    anadir(producto);
  });
});

document.getElementById("btn-menu").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("abierto");
});
