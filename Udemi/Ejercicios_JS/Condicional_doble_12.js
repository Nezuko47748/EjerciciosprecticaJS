let venta = parseFloat(prompt("Ingrese el monto de la venta"));
let comision = 0;

if (venta < 1000) {
    comision = venta * 0.03;
} else {
    comision = venta * 0.05;
}

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resultado de Comisión</h2>
    <p><strong>Venta total:</strong> $${venta.toFixed(2)}</p>
    <p><strong>Comisión ganada:</strong> $${comision.toFixed(2)}</p>
`;
