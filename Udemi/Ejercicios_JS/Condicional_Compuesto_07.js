let tornillos = parseInt(prompt("¿Cuántos tornillos se han fabricado?"));
let grado = 0;
let mensaje = "";

if (tornillos < 300) {
    grado = 1;
    mensaje = "La producción es menor";
} else if (tornillos < 1000) {
    grado = 2;
    mensaje = "La producción es intermedia";
} else {
    grado = 3;
    mensaje = "La producción es mayor";
}

const resultado = document.getElementById("resultado");
resultado.innerHTML = `
  <p><strong>${mensaje}</strong></p>
  <h2>El operario tiene grado: ${grado}</h2>
`;
