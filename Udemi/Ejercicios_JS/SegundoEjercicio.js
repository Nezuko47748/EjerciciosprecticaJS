
let diasTrabajados = 20;
let valorPorDia = 50.5;
let salarioMensual = diasTrabajados * valorPorDia;


document.getElementById("resultado").innerHTML = `
  <h2>Resultado del cálculo:</h2>
  <p><strong>Días trabajados:</strong> ${diasTrabajados}</p>
  <p><strong>Valor por día:</strong> S/${valorPorDia.toFixed(2)}</p>
  <p><strong>Salario mensual:</strong> S/${salarioMensual.toFixed(2)}</p>
`;
