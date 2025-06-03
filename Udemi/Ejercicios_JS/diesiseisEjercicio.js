
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const resultadoDiv = document.getElementById("resultado");

let mensaje = `<h2>Verificación de números positivos</h2>`;

if (num1 > 0) {
  mensaje += `El primer número (${num1}) es positivo.<br>`;
} else {
  mensaje += `El primer número (${num1}) NO es positivo.<br>`;
}

if (num2 > 0) {
  mensaje += `El segundo número (${num2}) es positivo.<br>`;
} else {
  mensaje += `El segundo número (${num2}) NO es positivo.<br>`;
}

resultadoDiv.innerHTML = mensaje;
