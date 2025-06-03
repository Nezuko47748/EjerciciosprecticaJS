let nota_1 = parseFloat(prompt("Digite la nota1"));
let nota_2 = parseFloat(prompt("Digite la nota2"));
let nota_3 = parseFloat(prompt("Digite la nota3"));
let nota_4 = parseFloat(prompt("Digite la nota4"));
let nota_5 = parseFloat(prompt("Digite la nota5"));
let nota_6 = parseFloat(prompt("Digite la nota6"));
let matricula = parseFloat(prompt("Digite el valor de la matrícula"));

let promedio = (nota_1 + nota_2 + nota_3 + nota_4 + nota_5 + nota_6) / 6;
let descuento = 0;
let incremento = 0;
let montoFinal = 0;

if (promedio >= 14) {
    descuento = matricula * 0.30;
    montoFinal = matricula - descuento;
} else {
    incremento = matricula * 0.10;
    montoFinal = matricula + incremento;
}

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
    <h2>Resultado del Estudiante</h2>
    <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
    ${promedio >= 14 
        ? `<p><strong>Descuento aplicado:</strong> ${descuento.toFixed(2)}</p>`
        : `<p><strong>Incremento aplicado:</strong> ${incremento.toFixed(2)}</p>`}
    <p><strong>Monto final a pagar:</strong> ${montoFinal.toFixed(2)}</p>
`;
