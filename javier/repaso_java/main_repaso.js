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
const nombre='javier ';
function saludo(nombre){
    return 'hola' +nombre;
}

console.log(`estamos saludando a ${saludo(nombre)}`);


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

