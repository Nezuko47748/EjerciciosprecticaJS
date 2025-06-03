let preciounita = parseFloat(prompt("Ingrese el precio unitario"));
let cantidad = parseInt(prompt("Ingrese la cantidad"));

let montocompra = preciounita * cantidad;
let descuento = 0;

if (cantidad > 36) {
    descuento = montocompra * 0.15;
} else {
    descuento = montocompra * 0.10;
}

let montopagar = montocompra - descuento;

// Mostrar resultados en pantalla
const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resumen de la Compra</h2>
    <p><strong>Monto de la compra:</strong> ${montocompra.toFixed(2)}</p>
    <p><strong>Descuento aplicado:</strong> ${descuento.toFixed(2)}</p>
    <p><strong>Monto final a pagar:</strong> ${montopagar.toFixed(2)}</p>
`;
