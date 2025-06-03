let precio = parseFloat(prompt("Precio del artículo"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades compradas"));

let precioIGV = precio + (precio * 0.18);
let montoTotal = precioIGV * cantidad;
let descuento = 0;
let totalPagar = 0;
let mensajeDescuento = "";

if (montoTotal > 70) {
    descuento = montoTotal * 0.05;
    totalPagar = montoTotal - descuento;
    mensajeDescuento = `Se aplicó un descuento de: S/ ${descuento.toFixed(2)}`;
} else {
    totalPagar = montoTotal;
    mensajeDescuento = "No se aplicó descuento.";
}

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resumen de Compra</h2>
    <p><strong>Precio con IGV por unidad:</strong> S/ ${precioIGV.toFixed(2)}</p>
    <p><strong>Monto total sin descuento:</strong> S/ ${montoTotal.toFixed(2)}</p>
    <p><strong>${mensajeDescuento}</strong></p>
    <p><strong>Total a pagar:</strong> S/ ${totalPagar.toFixed(2)}</p>
`;
