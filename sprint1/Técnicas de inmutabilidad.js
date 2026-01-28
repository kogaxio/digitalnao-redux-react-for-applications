// Técnicas de inmutabilidad.
// ========================================
// 1. AGREGAR UN PRODUCTO AL CARRITO
// ========================================
function agregarProducto(caja, articulo) {
  return [...caja, articulo]; // spread operator
}

//Ejemplo de uso
let carritoOriginal = ["Vino de autor", "Vino mexicano"];
let productoNuevo = "Vino de tetrapack";

const carritoActualizado = agregarProducto(carritoOriginal, productoNuevo);

// PRUEBA 1: Verificar que el nuevo producto existe
console.log("PRUEBA 1: Agregar Producto");
console.log("Carrito Actualizado:", carritoActualizado);

// PRUEBA 2: Verificar la Inmutabilidad (El original debe seguir igual)
console.log("PRUEBA 2: Verificación de Inmutabilidad");
console.log("¿El carrito original sigue igual?", carritoOriginal.length === 2);
console.log("Contenido original:", carritoOriginal);
