let nota1 = parseFloat(prompt("Ingrese la primera nota"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota"));

let promedio = (nota1 + nota2 + nota3) / 3;

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resultado Académico</h2>
    <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
    <p><strong>${promedio >= 12 ? "Usted aprobó" : "Usted no aprobó"}</strong></p>
`;
