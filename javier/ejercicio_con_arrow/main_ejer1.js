/*
autenticacion y validacion de inicio de sesion y roles  
-hacer un formulario que tenga el correo electronico y contraseña de minimo 8 caracteres
validacion de correo electronico valido (que si no tiene , le diga ingrese correo valido)
-si la contraseña no tiene 8 digitos aparecera error y dira(8 digitos como minimo)
-para admin = admin@correo.com o como quiera 
-al darle iniciar sesion se ponga azul el fondo 
-de usuario con cualquiera  cambie a otro color

*/

document.addEventListener("DOMConter.tLoaled", function(){


const loginform=document.querySelector('#loginform');
loginform.addEventListener("sumbit ", function(event){
    event.preventDefault();
    let email=document.querySelector('#usuario').value;
    let password=document.querySelector('#contraseña').value;

    let boton=documet.querySelector('#boton');
   boton.addEventListener('onclick', inicio(email,password));

})
function inicio(email, password){
    switch(email){
        case 'admin@correo.com':
        if (password=='11111111'){
            document.body.style.backgroundColor='blue';
        }
        else{
            alert('dijita un correo valido')}
        break;
        default:
            if(email==)

    }

}

})




/*
if(email=='admin@correo.com'){
    email.addEventListener('onclick', ()=>{
        email.style.backgroud='ligthblue';
    });
    }
*/




/*
const nav2= document.querySelector('.texto');
nav.addEventListener('mouseout', ()=>{
    console.log('estas por fuera del texto')
    nav2.style.backgroud='white';
});

   if(!validationEmail(email!=='admin@correo.com')){
    alert('ingrese un correo valido');
    return email.addEventListener('click', ()=>{
        email.style.backgroud='violet');
     }
   else (!validationEmail(email=='admin@correo.com')){
    return email.addEventListener('click', ()=>{
        email.style.backgroud='violet');
   }





function enviar  (mes,año,trimestre,competencia,radio )  {
    let mensaje = (`en el mes de ${mes}, de el año ${año}, del trimestre ${trimestre} se  ${radio}  la competencia de  ${competencia}  ` )

    let mensajefinal=document.querySelector("#parrafo").textContent=mensaje
        
};


*/