
let sueldoAnterior = prompt("Ingrese el sueldo anterior del trabajador:");


sueldoAnterior = parseFloat(sueldoAnterior);

// Incremento del 25%
const incremento = 0.25;


let nuevoSueldo = sueldoAnterior + (sueldoAnterior * incremento);

const resultadoDiv = document.getElementById("resultado");

resultadoDiv.innerHTML = `
  <h2>Cálculo de Nuevo Salario</h2>
  <p>Sueldo anterior: S/ ${sueldoAnterior.toFixed(2)}</p>
  <p>Incremento aplicado: 25%</p>
  <p><strong>Nuevo sueldo: S/ ${nuevoSueldo.toFixed(2)}</strong></p>
`;
