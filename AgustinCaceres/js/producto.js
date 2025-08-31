const prod = document.querySelector("#detalle-producto");
productos.forEach(producto => {
  const item = document.createElement("div");
  item.classList.add("producto");
  item.innerHTML = `
    <a href="producto.html?id=${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
    </a>
  `;
  prod.appendChild(item);
});
