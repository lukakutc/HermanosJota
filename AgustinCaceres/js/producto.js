

// 2. Obtén el id de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// 3. Busca el producto correspondiente
const producto = productos.find(p => p.id === id);

// 4. Muestra el producto en el HTML
const detalle = document.getElementById("detalle-producto");