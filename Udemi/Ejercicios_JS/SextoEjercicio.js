
let radio = prompt("Ingrese el radio del cilindro:");
let altura = prompt("Ingrese la altura del cilindro:");


radio = parseFloat(radio);
altura = parseFloat(altura);


const pi = Math.PI;
let area = 2 * pi * radio * (radio + altura);
let volumen = pi * Math.pow(radio, 2) * altura;

const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `
  <h2>Cálculo de un Cilindro</h2>
  <p>Radio: ${radio} unidades</p>
  <p>Altura: ${altura} unidades</p><br>
  <p>Área: ${area.toFixed(2)} unidades²</p>
  <p>Volumen: ${volumen.toFixed(2)} unidades³</p>
`;
