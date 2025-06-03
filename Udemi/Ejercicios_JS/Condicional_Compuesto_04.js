let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));

// Determinar el mayor y el menor
let mayor = Math.max(numero1, numero2, numero3);
let menor = Math.min(numero1, numero2, numero3);

// Mostrar resultados en el contenedor #resultado
let resultado = document.getElementById("resultado");
resultado.innerHTML = `<h2>Resultados</h2>`;
resultado.innerHTML += `<p><strong>El número mayor es:</strong> ${mayor}</p>`;
resultado.innerHTML += `<p><strong>El número menor es:</strong> ${menor}</p>`;
