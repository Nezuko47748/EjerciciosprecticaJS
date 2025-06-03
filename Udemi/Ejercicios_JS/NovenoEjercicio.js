
let nota1 = prompt("Ingrese la primera nota (25%):");
let nota2 = prompt("Ingrese la segunda nota (45%):");
let nota3 = prompt("Ingrese la tercera nota (30%):");


nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

const peso1 = 0.25;
const peso2 = 0.45;
const peso3 = 0.30;


let notaFinal = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h2>Cálculo de Nota Final</h2>
  <p>Primera nota: ${nota1} (25%)</p>
  <p>Segunda nota: ${nota2} (45%)</p>
  <p>Tercera nota: ${nota3} (30%)</p><br>
  <p><strong>Nota final: ${notaFinal.toFixed(2)}</strong></p>
`;
