const tipoDocumentoInput = document.querySelector('#tipoDocumento');// era propietario"
const noDocumentoInput = document.querySelector('#noDocumento');
const nombreMenorInput = document.querySelector('#nombreMenor'); // era mascota"
const apellidoMenorInput = document.querySelector('#apellidoMenor'); 
const fotoMenorInput = document.querySelector('#fotoMenor'); 
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const tipoSangreInput = document.querySelector('#tipoSangre');
const sexoInput = document.querySelector('#sexo');

// Contenedor para los registrados
const contenedorregistrados = document.querySelector('#registrados');

// Formulario agregar registro
const formulario = document.querySelector('#nueva-cita')
formulario.addEventListener('submit', nuevoadolecente);

let editando = false;

// Eventos
eventListeners();
function eventListeners() {
    tipoDocumentoInput.addEventListener('change', datosAdolecente);
    noDocumentoInput.addEventListener('change', datosAdolecente);
    nombreMenorInput.addEventListener('change', datosAdolecente);
    apellidoMenorInput.addEventListener('change', datosAdolecente);
    fotoMenorInput.addEventListener('change', datosAdolecente);
    telefonoInput.addEventListener('change', datosAdolecente);
    fechaInput.addEventListener('change', datosAdolecente);
    tipoSangreInput.addEventListener('change', datosAdolecente);
    sexoInput.addEventListener('change', datosAdolecente);
}

const registro_Obejto = {
    tipoDocumento:'',
    noDocumento:'',
    nombreMenor: '',
    apellidoMenor: '',
    fotoMenor: '',
    telefono: '',
    fecha: '',
    tipoSangre:'',
    sexo: '',
}


function datosAdolecente(e) {
   //  console.log(e.target.name) // Obtener el Input
   
     registro_Obejto[e.target.name] = e.target.value;
}

// CLasses
class registrados{
    constructor() {
        this.registrados = []
    }
    agregarAdolecente(adolecente) {
        this.registrados = [...this.registrados, adolecente];
    }
    editarAdolecente(adolecenteActualizada) {
        this.registrados = this.registrados.map( adolecente => adolecente.id === adolecenteActualizada.id ? adolecenteActualizada : adolecente)
    }

    eliminarAdolecente(id) {
        this.registrados = this.registrados.filter( adolecente => adolecente.id !== id);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error' ) {
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
        }, 4000);
   }

   imprimirregistrados({registrados}) { // Se puede aplicar destructuring desde la función...
       
        this.limpiarHTML();

        registrados.forEach(adolecente => {
            const {tipoDocumento,noDocumento,nombreMenor, apellidoMenor,fotoMenor, telefono, fecha, tipoSangre,sexo, id } = adolecente;

            const divadolecente = document.createElement('div');
            divadolecente.classList.add('adolecente', 'p-3');
            divadolecente.dataset.id = id;

            // scRIPTING DE LOS ELEMENTOS...
            const nombreMenorParrafo = document.createElement('h2');
            
            nombreMenorParrafo.classList.add('card-title', 'font-weight-bolder');
            nombreMenorParrafo.innerHTML = `${nombreMenor}`;

            const apellidoMenorParrafo = document.createElement('p');
            apellidoMenorParrafo.innerHTML = `<span class="font-weight-bolder">Apellido: </span> ${apellidoMenor}`;

            const tipoDocumentoParrafo = document.createElement('p');
            tipoDocumentoParrafo.innerHTML = `<span class="font-weight-bolder">Tipo de documento: </span> ${tipoDocumento}`;

            const noDocumentoParrafo = document.createElement('p');
            noDocumentoParrafo.innerHTML = `<span class="font-weight-bolder">Numero de documento: </span> ${noDocumento}`;

            const fotoMenorParrafo = document.createElement('p');
            fotoMenorParrafo.innerHTML = `<span class="font-weight-bolder"><img src="${fotoMenor}" width="70%">Foto: </span>`;
          

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

            const tipoSangreParrafo = document.createElement('p');
            tipoSangreParrafo.innerHTML = `<span class="font-weight-bolder">Tipo de sangre: </span> ${tipoSangre}`;

            const sexoParrafo = document.createElement('p');
            sexoParrafo.innerHTML = `<span class="font-weight-bolder">Sexo: </span> ${sexo}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarAdolecente(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(adolecente);

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divadolecente.appendChild(tipoDocumentoParrafo);
            divadolecente.appendChild(noDocumentoParrafo);
            divadolecente.appendChild(nombreMenorParrafo);
            divadolecente.appendChild(apellidoMenorParrafo);
            divadolecente.appendChild(fotoMenorParrafo);
            divadolecente.appendChild(telefonoParrafo);
            divadolecente.appendChild(fechaParrafo);
            divadolecente.appendChild(tipoSangreParrafo);
            divadolecente.appendChild(sexoParrafo);
            divadolecente.appendChild(btnEliminar)
            divadolecente.appendChild(btnEditar)

            contenedorregistrados.appendChild(divadolecente);
        });    
   }

   limpiarHTML() {
        while(contenedorregistrados.firstChild) {
            contenedorregistrados.removeChild(contenedorregistrados.firstChild);
        }
   }
}

const ui = new UI();
const administrarregistrados = new registrados();

function nuevoadolecente(e) {
    e.preventDefault();

    const {tipoDocumento, noDocumento,nombreMenor,apellidoMenor, fotoMenor, telefono, fecha, tipoSangre, sexo } = registro_Obejto;

    // Validar
    if( tipoDocumento=== '' || noDocumento==='' || nombreMenor === '' || apellidoMenor===''|| fotoMenor === '' || telefono === '' || fecha === ''  || tipoSangre === '' || sexo === '' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }

    if(editando) {
        // Estamos editando
        administrarregistrados.editarAdolecente( {...registro_Obejto} );

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear adolecente';

        editando = false;   
        

    } else {
        // Nuevo Registrando

        // Generar un ID único
        registro_Obejto.id = Date.now();
        
        // Añade la nueva adolecente
        administrarregistrados.agregarAdolecente({...registro_Obejto});

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
        
    }


    // Imprimir el HTML de registrados
    ui.imprimirregistrados(administrarregistrados);

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

function reiniciarObjeto() {
   // Reiniciar el objeto
    registro_Obejto.tipoDocumento = '';
    registro_Obejto.noDocumento = '';
    registro_Obejto.nombreMenor = '';
    registro_Obejto.apellidoMenor = '';
    registro_Obejto.fotoMenor = '';
    registro_Obejto.telefono = '';
    registro_Obejto.fecha = '';
    registro_Obejto.tipoSangre = '';
    registro_Obejto.sexo = '';
    
}


function eliminarAdolecente(id) {
    administrarregistrados.eliminarAdolecente(id);

    ui.imprimirregistrados(administrarregistrados)
    
    console.log('mensaje de funciono')
}

function cargarEdicion(adolecente) {

    const {tipoDocumento, noDocumento,nombreMenor, apellidoMenor,fotoMenor, telefono, fecha, tipoSangre, sexo, id } = adolecente;

    // Reiniciar el objeto
    registro_Obejto.tipoDocumento = tipoDocumento;
    registro_Obejto.noDocumento = noDocumento;
    registro_Obejto.nombreMenor = nombreMenor;
    registro_Obejto.apellidoMenor = apellidoMenor;
    registro_Obejto.fotoMenor = fotoMenor;
    registro_Obejto.telefono = telefono;
    registro_Obejto.fecha = fecha
    registro_Obejto.tipoSangre = tipoSangre;
    registro_Obejto.sexo = sexo;
    registro_Obejto.id = id;

    // Llenar los Inputs
    tipoDocumentoInput.value = tipoDocumento;
    noDocumentoInput.value= noDocumento;
    nombreMenorInput.value = nombreMenor;
    apellidoMenorInput.value = apellidoMenor;
    fotoMenorInput.value = fotoMenor;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    tipoSangreInput.value = tipoSangre;
    sexoInput.value = sexo;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}



