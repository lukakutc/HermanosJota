// Array de productos 
const productos = [
  {
    id: 1,
    nombre: "Apartador Uspallata",
    precio: 100000,
    imagen: "img\Aparador Uspallata.png",
    destacado: false
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    precio: 110000,
    imagen: "img/Biblioteca Recoleta.png",
    destacado: true
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    precio: 120000,
    imagen: "img/Butaca Mendoza.png",
    destacado: false
  },
  {
    id: 4,
    nombre: "Escritorio Costa",
    precio: 130000,
    imagen: "img/Escritorio Costa.png",
    destacado: true
  },
  {
    id: 5,
    nombre: "Mesa Comedor Pampa",
    precio: 140000,
    imagen: "img/Mesa Comedor Pampa.png", 
    destacado: false
  },
  {
    id: 6,
    nombre: "Mesa de Centro Araucaria",
    precio: 150000,
    imagen: "img/Mesa de Centro Araucaria.png",
    destacado: true
  },
  {
    id: 7,
    nombre: "Mesa de Noche Aconcagua",
    precio: 160000,
    imagen: "img/Mesa de Noche Aconcagua.png",
    destacado: false
  },
  {
    id: 8,
    nombre: "Silla de Trabajo Belgrano",
    precio: 170000,
    imagen: "img/Silla de Trabajo Belgrano.png",
    destacado: false
  },
  {
    id: 9,
    nombre: "Sillas Córdoba",
    precio: 180000,
    imagen: "img/Sillas Córdoba.png",
    destacado: false
  },
  {
    id: 10,
    nombre: "Sillón Copacabana",
    precio: 190000,
    imagen: "img/Sillón Copacabana.png",
    destacado: true
  },
  {
    id: 11,
    nombre: "Sofá Patagonia",
    precio: 200000,
    imagen: "img/Sofá Patagonia.png",
    destacado: false
  },
];

const listaDestacados = document.querySelector("#lista-destacados");

const destacados = productos.filter(p => p.destacado);

destacados.forEach(producto => {
  const item = document.createElement("li");
  item.classList.add("producto");
  item.innerHTML = `
    <a href="producto.html?id=${producto.id}">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
    </a>
  `;
  listaDestacados.appendChild(item);
});

