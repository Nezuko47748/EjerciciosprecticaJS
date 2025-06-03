
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);


let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? (num1 / num2) : "No se puede dividir por cero";


const resultadoDiv = document.getElementById("resultado");


resultadoDiv.innerHTML = `
  <h2>Operaciones Aritméticas</h2>
  <p>Primer número: ${num1}</p>
  <p>Segundo número: ${num2}</p>
  <br>
  <p>Suma: ${suma}</p>
  <p>Resta: ${resta}</p>
  <p>Multiplicación: ${multiplicacion}</p>
  <p>División: ${division}</p>
`;
