let nota1 = parseFloat(prompt("Ingrese la nota 1"));
let nota2 = parseFloat(prompt("Ingrese la nota 2"));
let nota3 = parseFloat(prompt("Ingrese la nota 3"));
let nota4 = parseFloat(prompt("Ingrese la nota 4"));

// Encontrar la nota menor
let menor = Math.min(nota1, nota2, nota3, nota4);

// Sumar todas y restar la menor
let sumaTresNotas = nota1 + nota2 + nota3 + nota4 - menor;
let promedioFinal = sumaTresNotas / 3;

// Mostrar en el div resultado
let resultado = document.getElementById("resultado");
resultado.innerHTML = `<h2>Promedio de Prácticas</h2>`;
resultado.innerHTML += `<p><strong>Nota eliminada:</strong> ${menor}</p>`;
resultado.innerHTML += `<p><strong>Promedio final:</strong> ${promedioFinal.toFixed(2)}</p>`;
