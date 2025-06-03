let nume = 1;
let resultado = document.getElementById("resultado");
resultado.innerHTML = '<h2>Ejercicio Ciclo Mientras 05</h2>';

while (nume <= 100) {
    if (nume % 2 !== 0) {
        let parrafo = document.createElement('p');
        parrafo.textContent = nume;
        resultado.appendChild(parrafo);
    }
    nume += 1;
}
