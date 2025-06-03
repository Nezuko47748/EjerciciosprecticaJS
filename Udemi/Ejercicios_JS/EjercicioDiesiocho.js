let resultado = document.getElementById("resultado");
resultado.innerHTML = ""; // Limpia el área primero

let respuesta = prompt("¿Desea continuar? (S para sí):");

while (respuesta === "S") {
    resultado.innerHTML += `<p>El programa sigue...</p>`;
    respuesta = prompt("¿Desea continuar? (S para sí):");
}

resultado.innerHTML += `<h2>Programa finalizado</h2>`;
