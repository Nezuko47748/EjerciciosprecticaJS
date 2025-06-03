let A = parseFloat(prompt("Ingrese el valor de A:"));
let B = parseFloat(prompt("Ingrese el valor de B:"));
let C = parseFloat(prompt("Ingrese el valor de C:"));
let D = parseFloat(prompt("Ingrese el valor de D:"));
let X = parseFloat(prompt("Ingrese el valor de X:"));
let I = parseFloat(prompt("Ingrese el valor de I:"));

let producto = X * I;
let R = 0;
let error = false;

if (producto > 0) {
    if (C * D !== 0) {
        R = (A + B) / (C * D);
    } else {
        error = true;
    }
} else if (producto === 0) {
    if ((C + D) !== 0) {
        R = (A + B) / (C + D);
    } else {
        error = true;
    }
} else {
    R = (A + B) - (C + D);
}

const resultado = document.getElementById("resultado");
if (error) {
    resultado.innerHTML = `<p style="color:red;"><strong>Error:</strong> No se puede dividir entre cero.</p>`;
} else {
    resultado.innerHTML = `<h2>El valor de R es: ${R}</h2>`;
}
