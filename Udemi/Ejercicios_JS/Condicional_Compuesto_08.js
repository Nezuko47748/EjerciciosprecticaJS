let edad = parseInt(prompt("Ingrese la edad del paciente (en meses):"));
let nivel = parseFloat(prompt("Ingrese el nivel de hemoglobina en la sangre:"));

let resultadoTexto = "El paciente está sano";

// Validación
if (edad <= 0 || isNaN(edad) || isNaN(nivel)) {
    resultadoTexto = "Datos inválidos. Por favor ingrese valores correctos.";
} else {
    if (edad <= 1 && nivel <= 13) {
        resultadoTexto = "El paciente tiene anemia y es positivo";
    } else if (edad <= 6 && nivel <= 10) {
        resultadoTexto = "El paciente tiene anemia y es positivo";
    } else if (edad <= 12 && nivel <= 11) {
        resultadoTexto = "El paciente tiene anemia y es positivo";
    } else if (edad <= 60 && nivel <= 11.5) {
        resultadoTexto = "El paciente tiene anemia y es positivo";
    } else if (edad <= 120 && nivel <= 12.6) {
        resultadoTexto = "El paciente tiene anemia y es positivo";
    } else if (edad <= 180 && nivel <= 13) {
        resultadoTexto = "El paciente tiene anemia y es positivo";
    }
}

const resultado = document.getElementById("resultado");
resultado.innerHTML = `<h2>${resultadoTexto}</h2>`;
