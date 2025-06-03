
let valorFactura = prompt("Ingrese el valor de la factura sin IGV:");


valorFactura = parseFloat(valorFactura);


const igv = 0.18;
let montoIGV = valorFactura * igv;
let totalPagar = valorFactura + montoIGV;

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h2>Factura con IGV (18%)</h2>
  <p>Valor sin IGV: S/ ${valorFactura.toFixed(2)}</p>
  <p>Monto IGV (18%): S/ ${montoIGV.toFixed(2)}</p>
  <p><strong>Total a pagar: S/ ${totalPagar.toFixed(2)}</strong></p>
`;
