
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");


num1 = parseFloat(num1);
num2 = parseFloat(num2);


let suma = num1 + num2;

const resultadoDiv = document.getElementById("resultado");


if (suma >= 0) {
  resultadoDiv.innerHTML = `
    <h2>Resultado</h2>
    <p>Número 1: ${num1}</p>
    <p>Número 2: ${num2}</p>
    <p>Suma: ${suma}</p>
  `;
} else {
  resultadoDiv.innerHTML = `
    <h2>La suma es negativa, no se mostrará el resultado.</h2>
  `;
}
