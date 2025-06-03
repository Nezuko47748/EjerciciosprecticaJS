
const sueldoDiario = 69.23;
const diasLaborables = 26;


let sueldoMensual = sueldoDiario * diasLaborables;


const aporteTotal = 0.1174;
const aporteAFP = 0.10;
const aporteAdmin = 0.0038;
const aporteSeguro = 0.0136;

let montoAporteTotal = sueldoMensual * aporteTotal;
let montoAFP = sueldoMensual * aporteAFP;
let montoAdmin = sueldoMensual * aporteAdmin;
let montoSeguro = sueldoMensual * aporteSeguro;

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h2>Cálculo de Sueldo y Aportes</h2>
  <p>Sueldo diario: S/ ${sueldoDiario.toFixed(2)}</p>
  <p>Días laborables: ${diasLaborables}</p>
  <p><strong>Sueldo mensual: S/ ${sueldoMensual.toFixed(2)}</strong></p><br>
  <p>Aporte total (11.74%): S/ ${montoAporteTotal.toFixed(2)}</p>
  <p> - Aporte AFP (10%): S/ ${montoAFP.toFixed(2)}</p>
  <p> - Administración e inversión (0.38%): S/ ${montoAdmin.toFixed(2)}</p>
  <p> - Seguro de invalidez y otros (1.36%): S/ ${montoSeguro.toFixed(2)}</p>
`;
