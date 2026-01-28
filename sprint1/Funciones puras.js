// Funciones puras.

// ========================================
// 1. CALCULAR PRECIO TOTAL
// ========================================
//Esta función recibe "precio" e "IVA" como argumentos
function calcularPrecioTotal(precio, IVA) {
  //1. Calcula el impuesto basándose en los argumentos.
  const impuesto = precio * IVA;
  //2. Devuelve el resultado del precio total ya con IVA
  return precio + impuesto;
}

//Ejemplo de uso
const precioArticulo = 200;
const ivaMexico = 0.16;
const precioTotal = calcularPrecioTotal(precioArticulo, ivaMexico);

console.log(precioTotal);

// PRUEBA 1: Verificar el resultado
console.log("--- PRUEBA 1: Resultado Básico ---");
const resultado1 = calcularPrecioTotal(precioArticulo, ivaMexico);
console.log(
  `El precio final para ${precioArticulo} con ${ivaMexico}% de IVA es: ${resultado1}`,
);

// PRUEBA 2: Verificar la pureza (siempre el mismo resultado)
console.log("--- PRUEBA 2: Pureza (Repetibilidad) ---");
const resultado2 = calcularPrecioTotal(100, 0.16);
const resultado3 = calcularPrecioTotal(100, 0.16);
console.log(`Llamada 1: ${resultado2}`); // Debería ser 116
console.log(`Llamada 2: ${resultado3}`); // Debería ser 116
