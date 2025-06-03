let numero1 = parseInt(prompt("Ingrese un número"));

const resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <h2>Verificación de Par o Impar</h2>
    <p><strong>El número ingresado es ${numero1 % 2 === 0 ? "par" : "impar"}.</strong></p>
`;
