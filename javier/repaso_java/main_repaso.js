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
autenticacion y validacion de inicio de sesion y roles  
-hacer un formulario que tenga el correo electronico y contraseña de minimo 8 caracteres
validacion de correo electronico valido (que si no tiene , le diga ingrese correo valido)
-si la contraseña no tiene 8 digitos aparecera error y dira(8 digitos como minimo)
-para admin = admin@correo.com o como quiera 
-al darle iniciar sesion se ponga azul el fondo 
-de usuario con cualquiera  cambie a otro color

*/