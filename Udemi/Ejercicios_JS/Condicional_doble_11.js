let horasDiurnas = parseInt(prompt("Ingrese horas diurnas trabajadas"));
let horasNocturnas = parseInt(prompt("Ingrese horas nocturnas trabajadas"));

let pagoDiurno = horasDiurnas * 50;
let pagoNocturno = horasNocturnas * 80;
let pagoTotal = pagoDiurno + pagoNocturno;

let descuento = 0;
let pagoFinal = 0;
let mensajeDescuento = "";

if (pagoTotal > 600) {
    descuento = pagoTotal * 0.01;
    pagoFinal = pagoTotal - descuento;
    mensajeDescuento = `Se aplicó un descuento del 1%: $${descuento.toFixed(2)}`;
} else {
    pagoFinal = pagoTotal;
    mensajeDescuento = "No se aplicó descuento.";
}

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resumen de Pago</h2>
    <p><strong>Pago por horas diurnas:</strong> $${pagoDiurno.toFixed(2)}</p>
    <p><strong>Pago por horas nocturnas:</strong> $${pagoNocturno.toFixed(2)}</p>
    <p><strong>Pago total:</strong> $${pagoTotal.toFixed(2)}</p>
    <p><strong>${mensajeDescuento}</strong></p>
    <p><strong>Pago final:</strong> $${pagoFinal.toFixed(2)}</p>
`;
