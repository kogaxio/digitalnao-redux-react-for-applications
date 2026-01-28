// Funciones de orden superior.

// ====================================================
// Aplicar un descuento del 30% por promoción navideña.
// =====================================================

// 1. Función que pasaremos como argumento: devolver el precio con descuento y con un solodecimal.

const descuentoNavideño = (precio) => {
  const precioConDescuento = precio * 0.7;
  //Precio con 2 decimales
  return precioConDescuento.toFixed(2);
};

// 2. Lista de precios originales.

const preciosOriginales = [99, 618, 160];

// 3. Función de orden superior con .map para pasarle el descuento

const preciosConDescuento = preciosOriginales.map(descuentoNavideño);

// RESULTADOS

console.log("Precios originales:", preciosOriginales);
console.log("Precios con descuento:", preciosConDescuento);
