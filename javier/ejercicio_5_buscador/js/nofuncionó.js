import { confiapp } from "./export.js";
//---------------------------------------------------------
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const tipoDocumento = document.querySelector("#tipoDocumento");
const documento = document.querySelector("#documento");
const edad = document.querySelector("#edad");
const sexo = document.querySelector("#sexo");
const ruta = document.querySelector("#ruta");
const parentezco = document.querySelector("#parentezco");
//---------------------------------------------------------
const datosBusqueda = {
  nombre: "",
  apellido: "",
  tipoDocumento:"",
  documento:"",
  edad: "",
  sexo:"",
  ruta: "",
  parentezco: "",
};
//--------------------------------------------------------
function mostrarDatosEnHTML(datosBusqueda) {
  const resultadosContainer = document.getElementById("resultados");
  resultadosContainer.innerHTML = "";

  if (datosBusqueda.length === 0) {
    resultadosContainer.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  datosBusqueda.forEach((persona) => {
    const personaElement = document.createElement("div");
    personaElement.innerHTML = `
      
      <p>Nombre: ${persona.nombre}</p>
      <p>Apellido: ${persona.apellido}</p>
      <p>Documento: ${persona.tipoDocumento}</p>
      <p>Documento: ${persona.documento}</p>
      <p>Edad: ${persona.edad}</p>
      <p>Sexo: ${persona.sexo}</p>
      <p>Ruta: ${persona.ruta}</p>
      <p>Parentezco: ${persona.parentezco}</p>
      
      <hr>
    `;
    resultadosContainer.appendChild(personaElement);
  });
}
//--------------------------------------------------------------
function buscar() {
  const resultadosFiltrados = confiapp.filter((persona) => {
    return (
      persona.nombre.includes(datosBusqueda.nombre) &&
      persona.apellido.includes(datosBusqueda.apellido) &&
     // persona.tipoDocumento.includes(datosBusqueda.tipoDocumento) &&
      persona.documento.includes(datosBusqueda.documento) &&
      persona.edad.includes(datosBusqueda.edad) &&
      persona.sexo.includes(datosBusqueda.sexo) &&
      persona.ruta.includes(datosBusqueda.ruta) 
     //persona.parentezco.includes(datosBusqueda.parentezco) 
      
    );
  });

  mostrarDatosEnHTML(resultadosFiltrados);
}
//--------------------------------------------------------------
nombre.addEventListener("input", (e) => {
  datosBusqueda.nombre = e.target.value;
  buscar();
});

apellido.addEventListener("input", (e) => {
  datosBusqueda.apellido = e.target.value;
  buscar();
});

tipoDocumento.addEventListener("input", (e) => {
  datosBusqueda.tipoDocumento = e.target.value;
  buscar();
  });

documento.addEventListener("input", (e) => {
  datosBusqueda.documento = e.target.value;
  buscar();
});

edad.addEventListener("input", (e) => {
  datosBusqueda.edad = e.target.value;
  buscar();
});

sexo.addEventListener("input", (e) => {
    datosBusqueda.sexo = e.target.value;
    buscar();
  });
  
ruta.addEventListener("input", (e) => {
datosBusqueda.ruta = e.target.value;
buscar();
});

parentezco.addEventListener("input", (e) => {
  datosBusqueda.parentezco = e.target.value;
  buscar();
});



// Mostrar todos los datos iniciales al cargar la página
mostrarDatosEnHTML(confiapp);
