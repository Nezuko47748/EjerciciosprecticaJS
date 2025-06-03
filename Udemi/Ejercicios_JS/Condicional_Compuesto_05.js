let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
let numero3 = parseInt(prompt("Ingrese el tercer número:"));

let resultado = document.getElementById("resultado");
resultado.innerHTML = "<h2>Resultado del Análisis</h2>";

// Verificar igualdad
if (numero1 === numero2 && numero2 === numero3) {
    resultado.innerHTML += `<p>Los tres números son iguales.</p>`;
} else {
    if (numero1 === numero2) resultado.innerHTML += `<p>n1 y n2 son iguales.</p>`;
    if (numero1 === numero3) resultado.innerHTML += `<p>n1 y n3 son iguales.</p>`;
    if (numero2 === numero3) resultado.innerHTML += `<p>n2 y n3 son iguales.</p>`;
}

// Verificar orden
if (numero1 < numero2 && numero2 < numero3) {
    resultado.innerHTML += `<p>Están en <strong>orden ascendente</strong>.</p>`;
} else if (numero1 > numero2 && numero2 > numero3) {
    resultado.innerHTML += `<p>Están en <strong>orden descendente</strong>.</p>`;
} else {
    resultado.innerHTML += `<p>Están <strong>desordenados</strong>.</p>`;
}
