


//PRODUCTOS DESTACADOS
const listaDestacados = document.querySelector("#lista-destacados");

const destacados = productos.filter(p => p.destacado);

destacados.forEach(producto => {
  const item = document.createElement("li");
  item.classList.add("producto-destacado");
  item.innerHTML = `
    <a href="producto.html?id=${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
    </a>
  `;
  listaDestacados.appendChild(item);
});




