const listaProductos = document.querySelector("#lista-productos");


productos.forEach(producto => {
  const item = document.createElement("li");
  item.classList.add("tarjeta-producto");
  item.innerHTML = `
    <a href="producto.html?id=${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
    </a>
  `;
  listaProductos.appendChild(item);
});
