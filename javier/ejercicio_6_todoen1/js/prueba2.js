const tipoDocumentoInput = document.querySelector('#tipoDocumento');// era propietario"
const noDocumentoInput = document.querySelector('#noDocumento');
const nombreMenorInput = document.querySelector('#nombreMenor'); // era mascota"
const apellidoMenorInput = document.querySelector('#apellidoMenor'); 
const fotoMenorInput = document.querySelector('#fotoMenor'); 
const telefonoMenorInput = document.querySelector('#telefono');
const fechaNacMenorInput = document.querySelector('#fecha');
const tipoSangreMenorInput = document.querySelector('#tipoSangre');
const sexoMenorInput = document.querySelector('#sexo');

// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

// Formulario nuevas citas
const formulario = document.querySelector('#nueva-cita')
formulario.addEventListener('submit', nuevaCita);

let editando = false;


// Eventos
eventListeners();
function eventListeners() {
    tipoDocumentoInput.addEventListener('change', datosCita);
    noDocumentoInput.addEventListener('change', datosCita);
    nombreMenorInput.addEventListener('change', datosCita);
    apellidoMenorInput.addEventListener('change', datosCita);
    fotoMenorInput.addEventListener('change',datosCita);
    telefonoMenorInput.addEventListener('change',datosCita);
    fechaNacMenorInput.addEventListener('change', datosCita);
    tipoSangreMenorInput.addEventListener('change', datosCita);
    sexoMenorInput.addEventListener('change', datosCita);
}

const citaObj = {
    tipoDocumento: '',
    noDocumento: '',
    nombremenor:'',
    apellidomenor:'',
    fotomenor:'',
    telefonomenor: '',
    fechamenor: '',
    tipoSangremenor:'',
    sexomenor: ''
}

function datosCita(e) {
    //console.log(e.target.name) // Obtener el Input
     citaObj[e.target.name] = e.target.value;
}

// CLasses
class Citas{
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

   imprimirCitas({citas}) { // Se puede aplicar destructuring desde la función...
       
        this.limpiarHTML();

        citas.forEach(cita => {
            const {tipoDocumento,noDocumento,nombremenor,apellidomenor,fotomenor,telefonomenor,fechamenor,tipoSangremenor,sexomenor, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;


                // scRIPTING DE LOS ELEMENTOS...
                const nombreMenorParrafo = document.createElement('h2');
                            
                nombreMenorParrafo.classList.add('card-title', 'font-weight-bolder');
                nombreMenorParrafo.innerHTML = `${nombremenor}`;

                const apellidoMenorParrafo = document.createElement('p');
                apellidoMenorParrafo.innerHTML = `<span class="font-weight-bolder">Apellido: </span> ${apellidomenor}`;

                const tipoDocumentoParrafo = document.createElement('p');
                tipoDocumentoParrafo.innerHTML = `<span class="font-weight-bolder">Tipo de documento: </span> ${tipoDocumento}`;

                const noDocumentoParrafo = document.createElement('p');
                noDocumentoParrafo.innerHTML = `<span class="font-weight-bolder">Numero de documento: </span> ${noDocumento}`;

                const fotoMenorParrafo = document.createElement('p');
                fotoMenorParrafo.innerHTML = `<span class="font-weight-bolder"><img src="" width="70%">Foto: ${fotomenor}</span>`;
                

                const telefonoParrafo = document.createElement('p');
                telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefonomenor}`;

                const fechaParrafo = document.createElement('p');
                fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fechamenor}`;

                const tipoSangreParrafo = document.createElement('p');
                tipoSangreParrafo.innerHTML = `<span class="font-weight-bolder">Tipo de sangre: </span> ${tipoSangremenor}`;

                const sexoParrafo = document.createElement('p');
                sexoParrafo.innerHTML = `<span class="font-weight-bolder">Sexo: </span> ${sexomenor}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divCita.appendChild(tipoDocumentoParrafo);
            divCita.appendChild(noDocumentoParrafo);
            divCita.appendChild(nombreMenorParrafo);
            divCita.appendChild(apellidoMenorParrafo);
            divCita.appendChild(fotoMenorParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(tipoSangreParrafo);
            divCita.appendChild(sexoParrafo);
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorCitas.appendChild(divCita);
        });    
   }

   limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
   }
}

const ui = new UI();
const administrarCitas = new Citas();

function nuevaCita(e) {
    e.preventDefault();

    const {tipoDocumento,noDocumento,nombremenor,apellidomenor,fotomenor,telefonomenor,fechamenor,tipoSangremenor,sexomenor } = citaObj;

    // Validar
    if( tipoDocumento === '' || noDocumento === '' || nombremenor=== '' || apellidomenor=== '' || fotomenor==='' || telefonomenor === '' || fechamenor === ''  || tipoSangremenor === '' || sexomenor === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }

    if(editando) {
        // Estamos editando
        administrarCitas.editarCita( {...citaObj} );

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        citaObj.id = Date.now();
        
        // Añade la nueva cita
        administrarCitas.agregarCita({...citaObj});

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas(administrarCitas);

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.tipoDocumento = '';
    citaObj.noDocumento = '';
    citaObj.nombremenor = '';
    citaObj.apellidomenor = '';
    citaObj.fotomenor = '';
    citaObj.telefonomenor = '';
    citaObj.fechamenor = '';
    citaObj.tipoSangremenor = '';
    citaObj.sexomenor = '';
}


function eliminarCita(id) {
    administrarCitas.eliminarCita(id);

    ui.imprimirCitas(administrarCitas)
}

function cargarEdicion(cita) {

    const {tipoDocumento,noDocumento,nombremenor,apellidomenor,fotomenor,telefonomenor,fechamenor,tipoSangremenor,sexomenor, id } = cita;

    // Reiniciar el objeto
    citaObj.tipoDocumento = tipoDocumento;
    citaObj.noDocumento = noDocumento;
    citaObj.nombremenor = nombremenor;
    citaObj.apellidomenor = apellidomenor;
    citaObj.fotomenor= fotomenor
    citaObj.telefonomenor = telefonomenor;
    citaObj.fechamenor = fechamenor;
    citaObj.tipoSangremenor = tipoSangremenor;
    citaObj.sexomenor = sexomenor;
    citaObj.id = id;

    // Llenar los Inputs
    tipoDocumentoInput.value = tipoDocumento;
    noDocumentoInput.value = noDocumento;
    nombreMenorInput.value = nombremenor;
    apellidomenor.value = apellidomenor;
    telefonoMenorInput.value = telefonomenor;
    fechaNacMenorInput.value = fechamenor;
    tipoSangreMenorInput.value = tipoSangremenor;
    sexoMenorInput.value = sexomenor;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}