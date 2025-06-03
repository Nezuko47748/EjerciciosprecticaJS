
let nombre = prompt("Ingrese el nombre del estudiante:");
let curso = prompt("Ingrese el nombre del curso:");
let notaDefinitiva = prompt("Ingrese la nota definitiva:");
let totalClases = prompt("Ingrese el número total de clases del semestre:");
let clasesAusentes = prompt("Ingrese el número de clases ausentes:");


notaDefinitiva = parseFloat(notaDefinitiva);
totalClases = parseInt(totalClases);
clasesAusentes = parseInt(clasesAusentes);


let porcentajeAusencias = (clasesAusentes / totalClases) * 100;


if (porcentajeAusencias > 20) {
  notaDefinitiva = 0;
}

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h2>Evaluación del estudiante</h2>
  <p>Nombre: ${nombre}</p>
  <p>Curso: ${curso}</p>
  <p>Total de clases: ${totalClases}</p>
  <p>Clases ausentes: ${clasesAusentes}</p>
  <p>Porcentaje de ausencias: ${porcentajeAusencias.toFixed(2)}%</p><br>
  <p><strong>Nota definitiva: ${notaDefinitiva.toFixed(2)}</strong></p>
`;
