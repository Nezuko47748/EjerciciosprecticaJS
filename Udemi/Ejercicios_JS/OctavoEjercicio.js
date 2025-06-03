
let dolares = prompt("Ingrese el monto en dólares (USD):");


dolares = parseFloat(dolares);


const tipoCambio = 3.34;


let soles = dolares * tipoCambio;


const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h2>Conversión de Moneda</h2>
  <p>Monto en dólares (USD): $${dolares.toFixed(2)}</p>
  <p>Tipo de cambio: 1 USD = 3.34 PEN</p>
  <p><strong>Equivalente en soles (PEN): S/ ${soles.toFixed(2)}</strong></p>
`;
