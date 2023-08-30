import { confiapp } from "./export.js" ;
// // Aqui van las variables

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const tipoDocumento = document.querySelector("#tipoDocumento");
const documento = document.querySelector("#documento");
const edad = document.querySelector("#edad");
const sexo = document.querySelector("#sexo");
const ruta = document.querySelector("#ruta");
const parentezco = document.querySelector("#parentezco");

const resultadoDiv= document.querySelector('#resultados');
const buscarBtn=document.querySelector('#buscarBtn');


//ESTE APARTADO ES PARA LOS EVENTOS
document.addEventListener('DOMContentLoaded', () => {

    mostrarNombre();
    mostrarApellido();
    mostrarTipoDocumento();
    mostrarDocumento();
    mostrarEdad();
    mostrarSexo();
    mostrarRuta();
    mostrarParentezco();

    console.log('funcionó');
    

})

//Aqui van las funciones

function mostrarNombre() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = confiapp[i].nombre;
        nombre.appendChild(option)
    }
}

function mostrarApellido() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = confiapp[i].apellido;
        apellido.appendChild(option)
    }
}

function mostrarTipoDocumento() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
        // option.innerHTML = confiapp[i].tipoDocumento;
        //tipoDocumento.appendChild(option)
    }
}

function mostrarDocumento() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = confiapp[i].documento;
        documento.appendChild(option)
    }
}

function mostrarEdad() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = confiapp[i].edad;
        edad.appendChild(option)
    }
}


function mostrarRuta() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = confiapp[i].ruta;
        ruta.appendChild(option)
    }
}

function mostrarSexo() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
      //  option.innerHTML = confiapp[i].sexo;
      //sexo.appendChild(option)
    }
}





function mostrarParentezco() {
    for (let i = 0; i < confiapp.length; i++) {
        const option = document.createElement('option');
      //  option.innerHTML = confiapp[i].parentezco;
     // parentezco.appendChild(option)
    }
}

//Aqui voy hacer todo lo del filtro

document.addEventListener("DOMContentLoaded", function () {


    buscarBtn.addEventListener("click", function () {
        const filtroNombre = nombre.value;
        const filtroApellido = apellido.value;
        const filtrotipoDocumento = tipoDocumento.value;
        const filtroDocumento = documento.value;
        const filtroEdad = edad.value;
        const filtroSexo = sexo.value;
        const filtroRuta = ruta.value;
        const filtroParentezco = parentezco.value;

        // Realiza algún proceso con los valores de los filtros
        const resultadoBusqueda = 
        ` Nombre: ${filtroNombre} 
         Apellido: ${filtroApellido},
        Tipo de Documento: ${filtrotipoDocumento},
       Documento: ${filtroDocumento}, Edad: ${filtroEdad},
       Sexo: ${filtroSexo}, Ruta: ${filtroRuta}, 
        Parentezco: ${filtroParentezco} `
        ;


        // Inserta los resultados en el div de resultados
        resultadoDiv.textContent = resultadoBusqueda;
    });
});  






//--------------------------------------------------------------

const tutores ={
    nombre:'',
    apellido:'',
    tipoDocumento:'',
    documento:'',
    edad:'',
    ruta:'',
    sexo:'',
    parentezco:'',
};
   
nombre.addEventListener('change',(e) => {
    tutores.nombre=e.target.value;
    console.log (tutores)
     filtrarNombre();
    });

apellido.addEventListener('change',(e) => {
    tutores.apellido=e.target.value;
    console.log (tutores)
        filtrarApellido();
    });
    
tipoDocumento.addEventListener('change',(e) => {
    tutores.tipoDocumento=e.target.value;
    console.log (tutores)
        filtrarTipoDocumento();
    });

documento.addEventListener('change',(e) => {
    tutores.documento=e.target.value;
    console.log (tutores)
        filtrarDocumento();
    });
  
   
edad.addEventListener('change',(e) => {
    tutores.edad=e.target.value;
    console.log (tutores)
        filtrarEdad();
    });

ruta.addEventListener('change',(e) => {
    tutores.ruta=e.target.value;
    console.log (tutores)
        filtrarRuta();
    });
    
sexo.addEventListener('change',(e) => {
    tutores.sexo=e.target.value;
    console.log (tutores)
        filtrarSexo();
    });
    
    
parentezco.addEventListener('change',(e) => {
    tutores.parentezco=e.target.value;
    console.log (tutores)
        filtrarParentezco();
    });
    

//------------------------------

function mostrar (base) {
    resultadoDiv.innerHTML= "";
     base.forEach (p=> {
        let resultado1 = document.createElement ('p');
        resultado1.innerHTML = `<p>Nombre del tutor:${p.nombre} ${p.apellido}, Tipo de documento${p.tipoDocumento}, con identificacion ${p.documento}, ${p.edad} años, eligió la ruta ${p.ruta}, de sexo ${p.sexo} , siendo el/la ${p.parentezco}</p>`;
         resultadoDiv.appendChild(resultado1);
        })
       
       }
       ;




function filtrarNombre(){
     const resultado = confiapp.filter(p => {
         if (tutores.nombre){
             return p.nombre 
             === tutores.nombre
 }
  return p;
  // 
 })
  console.log (resultado);
  mostrar(resultado)
}


function filtrarApellido(){
    const resultado = confiapp.filter(p => {
        if (tutores.apellido){
            return p.apellido 
            === tutores.apellido
}
 return p;
 // 
})
 console.log (resultado);
 mostrar(resultado)
}

function filtrarTipoDocumento(){
    const resultado = confiapp.filter(p => {
        if (tutores.tipoDocumento){
            return p.tipoDocumento 
            === tutores.tipoDocumento
}
 return p;
 // 
})
 console.log (resultado);
 mostrar(resultado)
}


function filtrarDocumento(){
    const resultado = confiapp.filter(p => {
        if (tutores.documento){
            return p.documento 
            === tutores.documento
}
 return p;
 // 
})
 console.log (resultado);
 mostrar(resultado)
}



function filtrarEdad(){
    const resultado = confiapp.filter(p => {
        if (tutores.edad){
            return p.edad 
            === tutores.edad
}
 return p;
 // 
})
 console.log (resultado);
 mostrar(resultado)
}




function filtrarRuta(){
    const resultado = confiapp.filter(p => {
        if (tutores.ruta){
            return p.ruta 
            === tutores.ruta
}
 return p;
 // 
})
 console.log (resultado);
 mostrar(resultado)
}



function filtrarSexo(){
    const resultado = confiapp.filter(p => {
        if (tutores.sexo){
            return p.sexo 
            === tutores.sexo
}
 return p;
 // 
})
 console.log (resultado);
 mostrar(resultado)
}




function filtrarParentezco(){
    const resultado = confiapp.filter(p => {
        if (tutores.parentezco){
            return p.parentezco 
            === tutores.parentezco
}
 return p;
 // 
})
 console.log (resultado);
 mostrar(resultado)
}










 

