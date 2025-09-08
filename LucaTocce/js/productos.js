const listaProductos = document.querySelector("#lista-productos");


productos.forEach(producto => {
  const item = document.createElement("li");
  item.classList.add("tarjeta-producto");
  item.innerHTML = `
    <a href="producto.html?id=${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
    </a>
    <button class="boton-añadir-carrito">Añadir al carrito</button>
  `;
  listaProductos.appendChild(item);
});
