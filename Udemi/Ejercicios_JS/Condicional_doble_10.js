let sueldobruto = parseFloat(prompt("¿De cuánto es su sueldo?"));
let cargo = prompt("¿Cuál es su cargo asignado?").toLowerCase(); // Convierte a minúsculas para evitar errores por mayúsculas

let descuento = 0;
let sueldoneto = 0;
let mensajeDescuento = "";

if (cargo === "administrador") {
    descuento = sueldobruto * 0.12;
    sueldoneto = sueldobruto - descuento;
    mensajeDescuento = "Usted como administrador tiene un descuento del 12%";
} else if (cargo === "operador") {
    descuento = sueldobruto * 0.17;
    sueldoneto = sueldobruto - descuento;
    mensajeDescuento = "Usted como operador tiene un descuento del 17%";
} else {
    mensajeDescuento = "Cargo no reconocido. No se aplicó descuento.";
    sueldoneto = sueldobruto;
}

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resumen de Sueldo</h2>
    <p><strong>${mensajeDescuento}</strong></p>
    <p><strong>Sueldo neto:</strong> S/ ${sueldoneto.toFixed(2)}</p>
`;
