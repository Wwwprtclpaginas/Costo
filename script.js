// Definición de variables globales para almacenar datos y suma total
let productos = [];
let sumaTotal = 0;

// Función para guardar el nombre del producto
function guardarProducto() {
  // Obtener el valor del campo de entrada para el nombre del producto
  let nombre = document.getElementById("nombreProducto").value;
  // Agregar el nombre del producto al arreglo de productos
  productos.push({ nombre });
}

// Función para guardar si el producto viene en caja o saco
function guardarTipoProducto() {
  // Obtener el valor seleccionado (caja o saco) del formulario
  let tipo = document.querySelector('input[name="tipoProducto"]:checked').value;
  // Asociar el tipo al último producto agregado en el arreglo
  productos[productos.length - 1].tipo = tipo;
}

// Función para guardar si el producto viene en kilo o unidad
function guardarUnidadProducto() {
  // Obtener el valor seleccionado (kilo o unidad) del formulario
  let unidad = document.querySelector('input[name="unidadProducto"]:checked').value;
  // Asociar la unidad al último producto agregado en el arreglo
  productos[productos.length - 1].unidad = unidad;
}

// Función para guardar el valor del producto
function guardarValorProducto() {
  // Obtener el valor numérico del campo de entrada para el valor del producto
  let valor = parseFloat(document.getElementById("valorProducto").value);
  // Asociar el valor al último producto agregado en el arreglo
  productos[productos.length - 1].valor = valor;
  // Actualizar la suma total
  sumaTotal += valor;
}

// Función para actualizar la lista de productos en el HTML
function actualizarLista() {
  // Obtener el elemento HTML donde se mostrará la lista de productos
  let lista = document.getElementById("listaProductos");
  // Limpiar el contenido anterior
  lista.innerHTML = "";
  // Iterar a través de la lista de productos y mostrarlos en el elemento HTML
  for (let producto of productos) {
    lista.innerHTML += `Nombre: ${producto.nombre}, Tipo: ${producto.tipo}, Unidad: ${producto.unidad}, Valor: ${producto.valor}<br>`;
  }
}

// Función para agregar otro producto y actualizar la lista y la suma total
function agregarOtroProducto() {
  // Llamar a la función para actualizar la lista
  actualizarLista();
  // Obtener el elemento HTML donde se mostrará la suma total
  let suma = document.getElementById("sumaTotal");
  // Actualizar la suma total en el HTML
  suma.innerHTML = `Suma Total: ${sumaTotal}`;
}
