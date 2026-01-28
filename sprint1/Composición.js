//=========================================
// Composición
// ========================================

// 1. Funciones simples
// Descuento navideño del 30%
const aplicarDescuento = (precio) => precio * 0.7;
// Impuesto del 16%
const aplicarIVA = (precio) => precio * 1.16;

// 2. Composición
// Primero se resta el descuento y al resultado se le agrega el IVA
const calcularPrecioFinal = (precioOriginal) =>
  aplicarIVA(aplicarDescuento(precioOriginal));

// 3. RESULTADOS
let precioBase = 187;

console.log(`Precio original: ${precioBase}`);

console.log(
  `El precio final ya con el descuento y el IVA es: ${calcularPrecioFinal(precioBase).toFixed(2)}`,
);
