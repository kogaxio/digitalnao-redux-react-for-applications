//==================================
//  Currying
//==================================

// 1. Función currificada
// a = precio, b = envio, c = iva
let calcularPrecio = (precio) => (envio) => (iva) => precio + envio + iva;

// 2. Uso de la función
// Producto de $500, envío de $50, iva de $80
let totalFinal = calcularPrecio(500)(50)(80);

// 3. RESULTADOS
console.log("El total de tu compra es:", totalFinal);
