let totalcompra = parseFloat(prompt("Ingrese el total de la compra"));
let numerosorteado = parseInt(prompt("Ingrese el número sorteado"));

let descuento = 0;
let mensaje = "";

if (numerosorteado < 74) {
    descuento = totalcompra * 0.15;
    mensaje = "Usted tiene un descuento del 15%";
} else {
    descuento = totalcompra * 0.20;
    mensaje = "Usted obtuvo un descuento del 20%";
}

let montofinal = totalcompra - descuento;

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resultado del Sorteo</h2>
    <p><strong>${mensaje}</strong></p>
    <p><strong>Total a pagar:</strong> ${montofinal.toFixed(2)}</p>
`;
