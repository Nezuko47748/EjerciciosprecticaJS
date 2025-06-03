
let inversion = prompt("Ingrese la cantidad invertida en el banco (en dólares):");

let tasaInteres = prompt("Ingrese la tasa de interés anual (%):");

inversion = parseFloat(inversion);
tasaInteres = parseFloat(tasaInteres);


let interes = inversion * (tasaInteres / 100);

const resultadoDiv = document.getElementById("resultado");

let mensaje = `
  <h2>Cálculo de Intereses y Re-inversión</h2>
  <p>Monto invertido: $${inversion.toFixed(2)}</p>
  <p>Tasa de interés anual: ${tasaInteres.toFixed(2)}%</p>
  <p>Intereses generados: $${interes.toFixed(2)}</p>
`;

if (interes <= 7000) {
  let montoFinal = inversion + interes;
  mensaje += `
    <p><strong>Los intereses NO exceden $7000.</strong></p>
    <p>Se reinvierten los intereses.</p>
    <p>Monto final en la cuenta: $${montoFinal.toFixed(2)}</p>
  `;
} else {
  mensaje += `
    <p><strong>Los intereses EXCEDEN $7000.</strong></p>
    <p>No se reinvierten los intereses.</p>
    <p>Monto final en la cuenta: $${inversion.toFixed(2)}</p>
  `;
}

resultadoDiv.innerHTML = mensaje;
