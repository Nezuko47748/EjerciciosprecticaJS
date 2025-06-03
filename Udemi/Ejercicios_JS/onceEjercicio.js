
let parcial1 = prompt("Ingrese la nota del primer parcial:");
let parcial2 = prompt("Ingrese la nota del segundo parcial:");
let parcial3 = prompt("Ingrese la nota del tercer parcial:");


let examenFinal = prompt("Ingrese la nota del examen final:");


let trabajoFinal = prompt("Ingrese la nota del trabajo final:");

parcial1 = parseFloat(parcial1);
parcial2 = parseFloat(parcial2);
parcial3 = parseFloat(parcial3);
examenFinal = parseFloat(examenFinal);
trabajoFinal = parseFloat(trabajoFinal);


let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;


const pesoParciales = 0.55;
const pesoExamenFinal = 0.30;
const pesoTrabajoFinal = 0.15;


let notaFinal = (promedioParciales * pesoParciales) + 
                (examenFinal * pesoExamenFinal) + 
                (trabajoFinal * pesoTrabajoFinal);

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h2>Calificación Final en Matemáticas</h2>
  <p>Promedio parciales (55%): ${promedioParciales.toFixed(2)}</p>
  <p>Examen final (30%): ${examenFinal.toFixed(2)}</p>
  <p>Trabajo final (15%): ${trabajoFinal.toFixed(2)}</p><br>
  <p><strong>Nota final: ${notaFinal.toFixed(2)}</strong></p>
`;
