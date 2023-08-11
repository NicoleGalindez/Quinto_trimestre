//______variables y constantes
/*
const nombre='javier lozada';
let profesion='ing.sistemas';

console.log(profesion,nombre)

profesion="psicologo";
console.log(profesion);
*/
//______________________js 02_____________________________________
//string?
/*
const nombre='javier ';
const apellido='lozada';

const nombrecompleto=`bienvenido ${nombre} ${apellido} al repaso de javaScript `;
console.log(nombrecompleto);



const nombre1=prompt('tu nombreeeeeeeeee');
const apellido1 =prompt('tu apellidooooooo')
const nombrecompleto1=`Bienvenid@ ${nombre1} ${apellido1}   al repaso de javaScript`; 

console.log(nombrecompleto1);

*/
/*
const nombre='javier ';
function saludo(nombre){
    return 'hola' +nombre;
}

console.log(`estamos saludando a ${saludo(nombre)}`);
*/

//______objetos_______

/*
const materia={
    nombre:'arte',
    profesional:'nini',
    intensidad: '10 horas',

}

const materia1={
    nombre:'matematicas',
    profesional:'sol',
    intensidad: '12 horas',

}


console.log(materia);
console.table(materia);

console.table(materia1);


// ___ clonar /
const materia2={...materia
}
console.table(materia2);

//cambiar eso de valores
materia2.nombre='javascript';
materia2.profesional='cristina';
materia2.intensidad='6 horas';
*/
//________arreglos___


/*
const arreglo=new Array(10);
//arreglo.push(2);
arreglo.unshift(2);
console.log(arreglo);
*/

/*
const materias=['html', 'css', 'javascript','react','redux',' nodeJs', 'MongoDB', 'git'];
console.table(materias);


const materias1=['ciencias', 'español', 'matematicas'];
console.table(materias1);

//cambiar 
let profesores =[...materias];
profesores[0]="ciencias";
profesores[5]="matematicas";
console.table(profesores);
*/


//___recorrer un array

// const numeros=[1,2,3,4,5];
// let numeros1=[...numeros];

// const numeros2=numeros1.map(function(numero){return numero*2});
// console.table(numeros2);



// ___funciones______

// function iniciosesion(){
//     let nombre =prompt('ingresa tu nombre')
//     return `hola bienbenido , ${nombre}`;
// }
// alert(iniciosesion());
// console.log(iniciosesion());
// console.table(iniciosesion());

/*
const iniciosesion1=(nombre)=>`hola bienvenido , ${nombre}`;
console.log(iniciosesion1('javier lozada'))
//_____________________ó______________
const iniciosesion2=(nombre=prompt('tu nombre'))=>{
    return `hola bienvenido , ${nombre}`;
}
console.log(iniciosesion2())
*/



//funcion flecha normal
/*
const getuser1=()=>{
    return{
        udi:'abcd123',
        username:'lala'
    };
}
console.log(getuser1);
*/
//funcion flecha simplificada
/*
const getuser2=()=>
    ({
        udi:'abcd123',
        username:'lililiilili'
    });
console.log(getuser2());
*/

//___ejercicio1:  con funciones


//funcion flecha normal
/*
function getusuarioactivo(nombre){
    return{
        unid:'abcd678',
        userName:nombre

    }
};
const usuarioactivo=getusuarioactivo('javier lozada');
console.log(usuarioactivo);
*/
//funcion flecha simplificada
/*
const usuarioactivo1=(nombre1='javi lozada')=>
    ({unid1:'abcdef', 
    username1: nombre1});
console.log(usuarioactivo1());



//solucion profe

const getusuarioactivo2=(nombre2)=>
({
    unid:'12345',
    usrename: nombre2
});

const usuarioactivo2=getusuarioactivo2('javier lozada #2 ');
console.log(usuarioactivo2);
*/

// ______________destructuracion___de objetos______________

/*
const aprendiz={
    nombre:' manuel',
    apellido:'camacho',
    edad:' 22 años',
    ficha:'2556678',
    programa:'adso',
};
console.log(aprendiz);
*/
/*
const {nombre, edad, ficha }=aprendiz;
console.log(nombre)
console.log(edad)
console.log(aprendiz.programa);
console.log(ficha)
*/
/*
// conarrow function 
const retornaraprendiz=(usuario)=>{
    const {nombre,apellido,edad}=aprendiz
    console.table(nombre,apellido,edad)
}
retornaraprendiz(aprendiz);


//modo simple:
const simple=({nombre,apellido})=>
{
    console.table(nombre,apellido,);
};
simple(aprendiz);
*/

//______ejercicio 2:  con  destructuracion de objetos y arrows ________
/*
const confi={
    nombre:' lili',
    parentesco:'hermana',
    id:' 1059243441',
   
};
console.log(confi);
// desestucturar los parametros con una funcion flecha  
const destruc=({nombre,parentesco, id})=>
{
    console.table(nombre,parentesco, id);
};
destruc(confi);


// definir una mas

const confiapp={
    nombre:' lilith',
    parentesco:'hermana',
    id:' 1059243441',
   
};
// console.log(confiapp);

// desestucturar los parametros con una funcion flecha  
const destructurar=({nombre,parentesco, id, edad="14 años"}, nombremenor="adolecente juanita" )=>
{
    console.table(nombre,parentesco, id,edad , nombremenor);
};
destructurar(confiapp);
*/

//_______________agrega_______________________
/*
const aprendiz={
    nombre:' manuel',
    apellido:'camacho',
    edad:' 22 años',
    ficha:'2556678',
    programa:'adso',
};
console.table(aprendiz);


const usecontext2 =({nombre,programa,sexo='masculino'})=>{
    return{
        nombreAP2: nombre,
        formacion2: programa,
        sex:sexo,
        detalles2:{
            raza: 'blanco',
            altura: '1.75' },
    }
}

const{nombreAP2, formacion2, detalles2:{raza,altura}}=usecontext2(aprendiz);
console.log(nombreAP2,formacion2);
console.log(raza,altura);
*/


// ______________destructuracion___de arreglos

/*
const menores=[ ' andres',   'fernando', ' maria',];
console.table(menores)
console.log(menores[0]);
console.log(menores[1]);
console.log(menores[2]);
*/
/*
const [men1]=menores;
console.log(men1)

const [ ,men2]=menores;
console.log(men2)

const [ , ,men3]=menores;
console.log(men3)
*/

// const coonfi=['juana', 'tia', '10321456441']
// console.table(coonfi);


//----------

/*
const retornarconfi=()=>{
    return['andres', 'fernando', 'maria'];
}


//{
const [pos1, pos2, pos3]=retornarconfi();
console.log(pos1, pos2, pos3)
//__-simple

const retornarconfi2=()=>{'andres', 'fernando', 'maria'}

const [pos1y2, pos2y2, pos3y2]=retornarconfi();
console.log(pos1y2, pos2y2, pos3y2)
//}
*/

//ejercicio  de codigo normal a desttructuracion (hecho)
/*
const useState=(nombre)=> {
    return[nombre,  (setnombre1)=> { console.log('el usuario esta activo');}
    ];
}
const arr =useState('andres');
console.log(arr);
arr[1]();

//--------------------
const useState2=(nombre)=>{
    return [nombre,()=>{console.log('el usuario esta activo');}];
}
const [nombre, setnombre]=useState2('javier');
console.log(nombre);
setnombre();
*/


//____EVENTOS


// add =adicionar  event=evento
/*
document.addEventListener('DOMContentLoaded',()=>{
    console.log('el documento esta listo')
});

const nav= document.querySelector('.texto');
nav.addEventListener('click', ()=>{
    console.log('le diste click en el texto')
});

const nav1= document.querySelector('.texto');
nav.addEventListener('mouseover', ()=>{
    console.log('estas sobre el texto')
});

const nav2= document.querySelector('.texto');
nav.addEventListener('mouseout', ()=>{
    console.log('estas por fuera del texto')
    nav2.style.backgroud='white';
});
*/


/*  
// ejercicio 2    (hecho: ejercicio_2_)
autenticacion y validacion de inicio de sesion y roles  
-hacer un formulario que tenga el correo electronico y contraseña de minimo 8 caracteres
validacion de correo electronico valido (que si no tiene , le diga ingrese correo valido)
-si la contraseña no tiene 8 digitos aparecera error y dira(8 digitos como minimo)
-para admin = admin@correo.com o como quiera 
-al darle iniciar sesion se ponga azul el fondo 
-de usuario con cualquiera  cambie a otro color

*/




//_____________EVENTOS________________
/*

///////add =adicionar  event=evento

document.addEventListener('DOMContentLoaded',()=>{
    console.log('el documento esta listo')
});

const nav= document.querySelector('.texto');
nav.addEventListener('click', ()=>{
    console.log('le diste click en el texto')
});

const nav1= document.querySelector('.texto');
nav.addEventListener('mouseover', ()=>{
    console.log('estas sobre el texto')
});

const nav2= document.querySelector('.texto');
nav.addEventListener('mouseout', ()=>{
    console.log('estas por fuera del texto')
    nav2.style.backgroud='violet';
});



const buscar=document.querySelector('.busqueda');

// buscar.addEventListener('keydown', ()=>{
//     console.log('presionaste la tecla')
// });

const buscar1=document.querySelector('.busqueda');

buscar1.addEventListener('keyup', ()=>{
    console.log('soltaste la tecla')
});


const buscar2=document.querySelector('.busqueda');

buscar2.addEventListener('blur', ()=>{
    console.log('hiciste click por fuera y se usa en validacion ')
});


const buscar3=document.querySelector('.busqueda');

buscar3.addEventListener('input', (evt)=>{
    console.log(evt);
    //console.log(evt.type);
    //console.log(evt.target);
    //console.log(evt.target.value);
});
*/

/*
//evento cuando presionas usando una validacion
const buscar4=document.querySelector('.busqueda');
buscar4.addEventListener('input',(evt)=>{
    if (evt.target.value === ''){
        console.log('el campo esta vacio');

    }
    console.log(evt.target.value);
})

*/



// eventos en el sumbit de un formulario
/*
const formulario1=document.querySelector('.formulario');
formulario1.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    console.log(evt.target.value)

})


const formulario2=document.querySelector('.formulario');
formulario2.addEventListener('submit',validarFormulario)
function validarFormulario(e){
    e.preventDefault();
    console.log('vslidado con funcion normal')
    console.log(e.target.value)
}


window.addEventListener('scroll', ()=>{
    console.log('estas en el scroll');
})

window.addEventListener('scroll', ()=>{
    const scrollPx=window.scrllY;
    console.log(scrollPx);
})



const premium=document.querySelector('.premium')
const ubicacion =premium.getBoundingClientRect();
console.log(ubicacion);

if(ubicacion.top < 100){
    console.log(' estas en la seccion premium');}
    else {
        console.log('no estas en la seccion premium');
    }

*/



/*
const padre = document.querySelector('.padre');
const hijo = document.querySelector('.hijo');

padre.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('estas en el padre ');
});
hijo.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('estas en el hijo ');
});





    const padre2=document.querySelector('.padre');
    padre2.addEventListener('click', (e)=>{

        if (e.target.classlist.contains('padre)){
            console.log('estas en el padre);
        }
          if (e.target.classlist.contains('hjo)){
            console.log('estas en el hijo);
        }

    })





*/



//____________RETURN_________-

/*
function solicitardatosdelpadre(){
const identificacion= 
return{
        identificacion,
        nombre,
        apellido,
        correo,
        parentesco,
    };
}


function solicitardatosdelmenor (){


    return{
        nombre,
        apellido,
        edad,

    };
}




 function main(){

 }
*/


/*
ejercicio 2


*/


//_____loalstorage y JSON
/*
localStorage.setItem('nombre', 'javier lozada'); //agrega un valor al local storage
sessionStorage.setItem('nombre', 'javier lozada');//agrega un valor a la seccion


const materias={
    nombre: 'Matematicas',
    intensidad: 5,
    profesor: 'Javier Lozada'
}


const materiasCadena = JSON.stringify(materias);
console.log(materiasCadena);
localStorage.setItem('Materia',materiasCadena);


const profesores=['Juan','Pedro','Luis'];
localStorage.setItem('Profesores',JSON.stringify(profesores)); 
//lo podemos llamar asi sin necesidad de crear la variable




//Obteniedo valores del localStorage
const nombre = localStorage.getItem('Nombre');
console.log(nombre);


const materiasJSON = JSON.parse(localStorage.getItem('Materia')); //El JSON lo convierte en un objeto
console.log(materiasJSON);


//Eliminando valores del Local Storage
localStorage.removeItem('Profesores');
localStorage.removeItem('Nombre');


//Simular la actualización de los valores del Local Storage
const profesoresJSON = JSON.parse(localStorage.getItem('profesores'));
console.log(profesoresJSON);
profesoresJSON.push('Geovanny');
console.log(profesoresJSON);
localStorage.setItem('Profesores', JSON.stringify(profesores));
*/


// ejercicio 3  . . .



// fechas con java script 
/*
const diaHoy = new Date();

// let valor; 
// valor  = diaHoy;
// console.log(valor);
// console.log(typeof valor);


//const diaHoy = new Date('11-16-1978');// siempre es Mes-Dia-Año
//const diaHoy = new Date('November 16 1978'); // siempre es Mes-Dia-Año
let valor; 
valor = diaHoy;
console.log(valor);

// valor = diaHoy.getMonth();
// valor = diaHoy.getDate();
// valor = diaHoy.getDay();
// valor = diaHoy.getFullYear();
// valor = diaHoy.getMinutes();
// valor = diaHoy.getHours();
// valor = diaHoy.getTime();
// valor = diaHoy.getFullYear();
// valor = diaHoy.setFullYear(2018);
console.log(valor);

*/

//_____  Set Maps y Symbols.
 


// caracteristicas de set
/*
const materias = new Set();
materias.add('Matematicas');//agregando un valor al Set
materias.add('Ciencias');//ya no usamos la llave solo el valor
materias.add('Historia');
materias.add('Historia');//ya no la agrega porque el valor ya existe
materias.add('Fisica');
materias.add('historia');//la agrega porque es Case Sensitive


console.log(materias);
console.log(typeof materias);
console.log(materias.size);

// eliminar sets
console.log(materias.has('Matematicas'));//Devuelve un valor Bool y revisa si existe o no.
materias.delete('historia');//elimina un valor
//materias.clear();//limpia el Set

materias.forEach(function (asignatura) {
    console.log(asignatura);
});

*/
//------------------------------
//elimina valores duplicados
/*
const numeros=[10,10,20,20,30,30,40,40,50,50];
console.log(numeros);

const eliminaDuplicado = new Set(numeros);
console.log(eliminaDuplicado);
*/

//----weakset-------------------------------------------
/*
const debiles = new WeakSet();

const profesores = {
    nombre: 'Juan',
    apellido: 'Perez',
    materia: 'Matematicas'
};


debiles.add(profesores);
console.log(profesores);
*/
//_______________________________________________________
//     caracteristicas de maps
/*
const padres = new Map();

padres.set('nombre', 'Mariana');
padres.set('parentesco', 'Madre');
padres.set('edad', 40);

console.log(padres);
console.log(padres.size); //devuelve la longitud del Map
console.log(padres.get('nombre'));//devuelve el valor de la llave
console.log(padres.has('nombre'));//devuelve un valor booleno y revisa si existe o no.
//console.log(padres.delete('nombre'));//elimina un valor
//padres.clear();//limpia el Map
*/

/*
const motero = new Map([['nombre', 'Andres'], ['edad', 40]]);
motero.set('Placa', 'AUX048B'); //lo agrega con la llave
motero.set('nombre', 'Mario');//lo actualiza


motero.forEach(datos => {
    console.log(datos);
});
console.log(motero);
*/

// NOTA: También existen los weakmap();, y trabajan exactamente igual que los Weakset();




//_____________ Generadores en java script
// que es un generador ? :son funciones que me retornan un iterador y son métodos dentro del JavaScript moderno y son muy utilizados dentro de React

/*
function *crearGenerador () {
    yield 1; //Valores que se pueden iterar
    yield 'Javier Lozada';
    yield 3+3;
    yield false;
}
const iterador = crearGenerador(); //podemos acceder a los valores del generador
console.log(iterador); //Inicialmente estar <<suspended>> 
*/

//----------------------------------------
/*
function *crearGenerador () {
    yield 1; //Valores que se pueden iterar
    yield 'Javier Lozada';
    yield 3+3;
    yield false;
}


const iterador=crearGenerador(); //podemos acceder a los valores del generador
console.log(iterador); //Inicialmente estar <<suspended>> 
console.log(iterador.next()); //despierta al iterador del generador
console.log(iterador.next().value); //Continua al siguiente valor accediendo al valor

*/


//-- ejemplo de generador

/*
function *generadorMaterias( materias) {
    for (let i = 0; i < materias.length; i++) {
        yield materias[i];
    }
}


const materias =['Matematicas','Ciencias','Fisica','Quimica'];
const iterador = generadorMaterias(materias);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
*/


//________otra forma de iterar en java script?

let motos = ['Honda', 'Yamaha', 'Hero', 'Ducati']; //Arreglo tradicional
let placas = new Set(['ENZ24B', 'ROU54B', 'AUX48C', 'AUL52D']); //Set
let motoposadas = new Map(); //Map
motoposadas.set('Nombre', 'Las Quintas');
motoposadas.set('Ubicacion', 'Popayan');


//Iterador Entries 
for (let entry of motos.entries()) {
    console.log(entry); //Imprime llave y valor
}


for (let entry of placas.entries()) {
    console.log(entry); //como iteramos set y solo tiene valores muestra la llave con el valor
}


for (let entry of motoposadas.entries()) {
    console.log(entry); //como iteramos set y solo tiene valores muestra la llave con el valor
}


//Values iterator
for (let value of motos.values()) {
    console.log(value); //Imprime solo los valores
}


for (let value of placas.values()) {
    console.log(value); //Imprime solo los valores
}


for (let value of motoposadas.values()) {
    console.log(value); //Imprime solo los valores
}


//Keys iterator
for (let key of motos.keys()) {
    console.log(key); //Imprime solo los indices
}


for (let key of placas.keys()) {
    console.log(key); //Imprime solo los indices
}


for (let key of motoposadas.keys()) {
    console.log(key); //Imprime solo las llaves 
}


//Iterador por default
for (let moto of motos) {
    console.log(moto);
}


for (let placa of placas) {
    console.log(placa);
}


for (let motoposada of motoposadas) {
    console.log(motoposada);
}


