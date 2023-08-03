





function datospadre(){
    let identificacion=document.querySelector('#identificacion').value;
    let nombres=document.querySelector('#nombres').value;
    let apellidos=document.querySelector('#apellidos').value;
    let email=document.querySelector('#email').value;
    let fecha=document.querySelector('#fecha').value;
    let parentesco=document.querySelector('#parentesco').value;

    return{
        identificacion,
        nombres,
        apellidos,
        email,
        fecha,
        parentesco,}
}

function datosmenor(){
    let nombres2=document.querySelector('#nombres2').value;
    let apellidos2=document.querySelector('#apellidos2').value;
    return{
        nombres2,
       apellidos2, }
}


function mostrarDatospadre(padre){
    console.log('-------------------Datos del padre:-------------------');
    console.log('Cédula:'+ padre.identificacion);
    console.log('Nombres:'+ padre.nombres );
    console.log('Apellidos:'+ padre.apellidos );
    console.log('Correo:'+ padre.email );
    console.log('Fecha de nacimiento:'+ padre.fecha );
    console.log('Parentesco con el menor:'+ padre.parentesco );

const edad= calcularEdad(padre.fecha);
console.log("edad del tutor:"+ edad)
if (edad <18){
    alert("el tutor no puede ser menor de edad");
    window.location.reload();
}


}
//--------------------------------------------------------------------------------------------------
function mostrarDatosmenor(menor){
    console.log('------------------Datos del menor:--------------------');
    console.log('Nombres:'+ menor.nombres2 );
    console.log('Apellidos:'+ menor.apellidos2 );
   
}


let enviar=document.querySelector('#formulario');
enviar.addEventListener("submit", function(event){
    event.preventDefault();
    const padre=datospadre();
    const menor=datosmenor();
    mostrarDatospadre(padre);
    mostrarDatosmenor(menor);
})



 
function calcularEdad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mes = fechaActual.getMonth() - fechaNac.getMonth();
  
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
      edad--;
    }
  
    return edad;
  }



