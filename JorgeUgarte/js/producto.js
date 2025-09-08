const detalleProducto = document.querySelector(".detalle-producto");
const imagenProducto = document.querySelector(".imagen-producto");
const tbody = document.getElementById("tabla-producto");


// Obtener el parámetro id de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

// Buscar el producto correspondiente
const producto = productos.find(p => p.id === id);

if (producto) {
    // Imagen
    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;
    imagenProducto.appendChild(img);

    const item = document.createElement("div");
    item.innerHTML = `
        <h1>${producto.nombre}</h1>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
    `

    detalleProducto.insertBefore(item, detalleProducto.firstChild);

    for (const [titulo, valor] of Object.entries(producto.detalles)) {
        const fila = document.createElement("tr");

        fila.innerHTML = `
        <th class="titulo">${titulo}</th>
        <td class="valor">${valor}</td>
    `;

        tbody.appendChild(fila);
    }
}

  
