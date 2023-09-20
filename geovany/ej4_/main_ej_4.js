//crud en una tabla hacer, id del estudiante, nombre,n1,n2,n3  crud boton guardar,editar, eliminar  y otro nuevo que me deje añadir otro estudiante y que cada boton tenga tiempo despues de dar click de espera

let incrementarID = 1; // Inicializar el ID autoincremental

function addStudent() {
  const table = document.getElementById("studentTable");
  const newRow = table.insertRow(-1);
  
  const celda1 = newRow.insertCell(0);
  const celda2 = newRow.insertCell(1);
  const celda3 = newRow.insertCell(2);
  const celda4 = newRow.insertCell(3);
  const celda5 = newRow.insertCell(4);
  const celda6 = newRow.insertCell(5);
  const celda7 = newRow.insertCell(6);

  celda1.innerHTML = incrementarID++; 
  celda2.innerHTML = "<input type='text'>";
  celda3.innerHTML = "<input type='number'>";
  celda4.innerHTML = "<input type='number'>";
  celda5.innerHTML = "<input type='number'>";
  celda6.innerHTML= "  definitiva  "
  celda7.innerHTML = `
    <button  class='botoncitos' onclick="guardarEstudiante(this)">Guardar</button>
    <button  class='botoncitos' onclick="editarEstudiante(this)">Editar</button>
    <button  class='botoncitos' onclick="eliminarEstudiante(this)">Eliminar</button>
  `;
}


function guardarEstudiante(button) {
  const row = button.parentNode.parentNode;
  const inputs = row.querySelectorAll("input");
  
  const name = inputs[0].value;
  const n1 = parseFloat(inputs[1].value); 
  const n2 = parseFloat(inputs[2].value);
  const n3 = parseFloat(inputs[3].value);
  
  const definitiva = (n1 + n2 + n3) / 3;
  
  setTimeout(() => {
    row.cells[1].innerHTML = name;
    row.cells[2].innerHTML = n1;
    row.cells[3].innerHTML = n2;
    row.cells[4].innerHTML = n3;
    row.cells[5].innerHTML = definitiva.toFixed(2); // Mostrar la definitiva con dos decimales
  }, 1000);
}




function editarEstudiante(button) {
  const row = button.parentNode.parentNode;
  const cells = row.cells;

  for (let i = 1; i <= 4; i++) {
    const cellValue = cells[i].innerHTML;
    cells[i].innerHTML = `<input type="text" value="${cellValue}">`;
  }
}

function eliminarEstudiante(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// function guardarEstudiante(button) {
//   const row = button.parentNode.parentNode;
//   const inputs = row.querySelectorAll("input");
  
//   const name = inputs[0].value;
//   const n1 = inputs[1].value;
//   const n2 = inputs[2].value;
//   const n3 = inputs[3].value;
  
  
//   setTimeout(() => {
//     row.cells[1].innerHTML = name;
//     row.cells[2].innerHTML = n1;
//     row.cells[3].innerHTML = n2;
//     row.cells[4].innerHTML = n3;
//   }, 1000);
// }

