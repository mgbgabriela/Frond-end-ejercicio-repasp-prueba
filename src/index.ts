let producto = document.querySelector("#producto");
let precio = document.querySelector("#precio");
let btnAgregar = document.querySelector("#btnAgregar");
let btnTotal = document.querySelector("#total");
let lista = document.querySelector(".lista");
let productos: string[] = [];
let precios: number[] = [];
let suma: number = 0;

const agregarAlCarrito = () => {
  productos.push(`producto.value`);
  precios.push(`precio.value`);
  lista?.innerHTML += `<li>${producto.value} :$ ${precio.value}</li>`;
};

btnAgregar?.addEventListener("click", agregarAlCarrito);
