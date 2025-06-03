
let cantidadVarones = prompt("Ingrese la cantidad de varones:");
let cantidadMujeres = prompt("Ingrese la cantidad de mujeres:");


cantidadVarones = parseInt(cantidadVarones);
cantidadMujeres = parseInt(cantidadMujeres);


if (isNaN(cantidadVarones) || isNaN(cantidadMujeres)) {
  document.getElementById("resultado").innerHTML = "<p style='color:red;'>Por favor, ingrese valores numéricos válidos.</p>";
} else {
 
  let totalEstudiantes = cantidadVarones + cantidadMujeres;


  let porcentajeVarones = (cantidadVarones / totalEstudiantes) * 100;
  let porcentajeMujeres = (cantidadMujeres / totalEstudiantes) * 100;


  document.getElementById("resultado").innerHTML = `
    <h2>Distribución de Estudiantes</h2>
    <p><strong>Cantidad de varones:</strong> ${cantidadVarones}</p>
    <p><strong>Cantidad de mujeres:</strong> ${cantidadMujeres}</p>
    <p><strong>Total de estudiantes:</strong> ${totalEstudiantes}</p>
    <br>
    <p><strong>Porcentaje de varones:</strong> ${porcentajeVarones.toFixed(2)}%</p>
    <p><strong>Porcentaje de mujeres:</strong> ${porcentajeMujeres.toFixed(2)}%</p>
  `;
}
