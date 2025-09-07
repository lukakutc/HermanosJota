
const detalleProducto = document.querySelector("#detalle-producto");


// Obtener el parámetro id de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

// Buscar el producto correspondiente
const producto = productos.find(p => p.id === id);

if (producto) {
  const item = document.createElement("div");
  item.innerHTML = `
      <div class="detalle-imagen">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="detalle-info">
        <h1> Producto: ${producto.nombre} </h1>
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
        <p class="descripcion">${producto.descripcion}</p>
      </div">
    `;
  detalleProducto.appendChild(item);
}  
