
let totalCompra = prompt("Ingrese el total de la compra:");
let porcentajeDescuento = prompt("Ingrese el porcentaje de descuento (solo número, sin %):");


totalCompra = parseFloat(totalCompra);
porcentajeDescuento = parseFloat(porcentajeDescuento);

let montoDescuento = (totalCompra * porcentajeDescuento) / 100;
let totalPagar = totalCompra - montoDescuento;

const resultadoDiv = document.getElementById("resultado");

resultadoDiv.innerHTML = `
  <h2>Resultado del Descuento</h2>
  <p>Total de la compra: $${totalCompra.toFixed(2)}</p>
  <p>Descuento aplicado: ${porcentajeDescuento}%</p>
  <p>Monto de descuento: $${montoDescuento.toFixed(2)}</p>
  <p><strong>Total a pagar: $${totalPagar.toFixed(2)}</strong></p>
`;
