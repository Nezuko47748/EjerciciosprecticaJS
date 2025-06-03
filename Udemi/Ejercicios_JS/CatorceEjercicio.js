
let edad = prompt("Ingrese su edad:");


edad = parseInt(edad);

const resultadoDiv = document.getElementById("resultado");

if (edad >= 18) {
  resultadoDiv.innerHTML = "<h2>Usted es mayor de edad.</h2>";
} else {
  resultadoDiv.innerHTML = "<h2>Usted no es mayor de edad.</h2>";
}
