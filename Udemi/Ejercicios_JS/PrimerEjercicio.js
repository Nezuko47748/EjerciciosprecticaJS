let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let ciudad = prompt("Ingrese su ciudad:");

document.getElementById("resultado").innerHTML = `
  <h2>Datos ingresados:</h2>
  <p><strong>Nombre:</strong> ${nombre}</p>
  <p><strong>Edad:</strong> ${edad}</p>
  <p><strong>Ciudad:</strong> ${ciudad}</p>
`;
