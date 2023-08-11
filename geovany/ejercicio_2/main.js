// mi codigoooo________________________________________________________

// const botoncalcular=document.querySelector("#calcular");
// botoncalcular.addEventListener("click", ()=>{
//    minota; });

// function minota(){
//     const nota1=parseFloat(document.querySelector('#nota1').value);
//     const nota2=parseFloat(document.querySelector('#nota2').value);
//     const nota3=parseFloat(document.querySelector('#nota3').value);
//     const arraynotas=[ nota1, nota2, nota3 ];
//     const definitiva=calcular(arraynotas);
//  console.log(definitiva)
// }

// function calcular(arraynotas){
//     definitiva=((nota1+nota2+nota3)/3);
//    return definitiva; }
/*

//______hasta aqui mi codigo________________________________________-----------

// correccion________________________________________________________

// codigo que siiii funciona aaaaa

// funcion normal
/*
function calcular(arrayNotas) {
    let sumatoria = 0;
    // for (let i = 0; i < arrayNotas.length; i++) {
    // sumatoria += arrayNotas[i];
    // }

        for(let i of arrayNotas){
            sumatoria += i ;
        }

    const notafinal = sumatoria / arrayNotas.length;
    return notafinal;
    }

*/
    /*
// funcion flecha
    const calcular = arrayNotas => {
        let sumatoria = 0;
    
        for (let i of arrayNotas) {
            sumatoria += i;
        }
    
        const notafinal = sumatoria / arrayNotas.length;
        return notafinal;
    };

function minota() {
    const nota1 = parseFloat(document.querySelector('#nota1').value);
    const nota2 = parseFloat(document.querySelector('#nota2').value);
    const nota3 = parseFloat(document.querySelector('#nota3').value);
    const arrayNotas = [nota1, nota2, nota3]; // Usar corchetes para crear el array
    const midefinitiva = calcular(arrayNotas);


console.log("nota 1: ",nota1);
console.log("nota 1: ",nota2);
console.log("nota 1: ",nota3);
    console.log(midefinitiva);
    }

*/
//__hasta aqui codigo inicial_______correccion hasta aqui__________________________________________-----






//_____EXPLICACION (EJEMPLO)________________________________________________________________________
    // callbacks: cuando dentro del parametro tiene una funcion
    // EXPLICACION (EJEMPLO)
/*
    const botoncalcular = document.querySelector("#calcular");
    botoncalcular.addEventListener("click", () => {
        generar();
    });

function generar(){
    alert('1. mi funcion');
     lfuncion (afuncion);}

function lfuncion(bfuncion){
        bfuncion();}

function afuncion(){
    alert('2. estoy trabajando');}
*/
//_____hasta aqui el ejemplo____________________________________________________________________________________--------------


//-----CON Callback

// const botoncalcular = document.querySelector("#calcular");
// botoncalcular.addEventListener("click", () => {
//     general();
// });


// function general(arrayNotas) {
//     let sumatoria = 0;
//         for(let i of arrayNotas){
//             sumatoria += i ; }

//         const notafinal = sumatoria / arrayNotas.length;
//     lfuncion (minota);
//     return notafinal;
   
// }
// function lfuncion(bfuncion){
//     bfuncion();}

// function minota() {
//     const nota1 = parseFloat(document.querySelector('#nota1').value);
//     const nota2 = parseFloat(document.querySelector('#nota2').value);
//     const nota3 = parseFloat(document.querySelector('#nota3').value);
//     const arrayNotas = [nota1, nota2, nota3]; // Usar corchetes para crear el array
//     const midefinitiva = calcular(arrayNotas);

//     console.log("nota 1: ",nota1);
//     console.log("nota 1: ",nota2);
//     console.log("nota 1: ",nota3);

//     console.log(midefinitiva);
//     }





//  mi codigo con callback____________________________________________
/*
// con funcion normal
function calcular(arrayNotas, arrayporcentaje) {
    let sumatoria = 0;
        for(let i of arrayNotas){
            sumatoria += i ;
        }

    const notafinal = sumatoria / arrayNotas.length;
    porcentajes(minota);
    return notafinal;
    }

function porcentajes (){
    const pc1=(nota1*(100/30));
    const pc2=(nota1*(100/0));
    const pc3=(nota1*(100/40));
    
    console.log(pc1);
    console.log(pc2);
    console.log(pc3);
    }

function minota() {
    const nota1 = parseFloat(document.querySelector('#nota1').value);
    const nota2 = parseFloat(document.querySelector('#nota2').value);
    const nota3 = parseFloat(document.querySelector('#nota3').value);
    const arrayNotas = [nota1, nota2, nota3]; 
    const arrayporcentaje=[pc1,pc2,pc3];
    const midefinitiva = calcular(arrayNotas,arrayporcentaje);


console.log("nota 1: ",nota1);
console.log("nota 1: ",nota2);
console.log("nota 1: ",nota3);
console.log(midefinitiva);
}
*/
// hasta aqui  mi codigo con callback____________________________________________---------------





// correccion  tambien agregue otras cosas_______________________________
function calcular(arrayNotas, arrayPorcentajes) {
    let sumatoria = 0;
    for (let i of arrayNotas) {
        sumatoria += i;
    }

    const notaFinal = sumatoria / arrayNotas.length;
    porcentajes(arrayNotas, arrayPorcentajes); // Pasar los arrays como argumentos
    return notaFinal;
}

function porcentajes(arrayNotas, arrayPorcentajes) {
    const pc1 = (arrayNotas[0] * (arrayPorcentajes[0] / 100)); // Usar elementos del array en lugar de variables individuales
    const pc2 = (arrayNotas[1] * (arrayPorcentajes[1] / 100));
    const pc3 = (arrayNotas[2] * (arrayPorcentajes[2] / 100));

    console.log("porcentaje de la nota 1:",pc1);
    console.log("porcentaje de la nota 2:",pc2);
    console.log("porcentaje de la nota 3:",pc3);
}

function minota() {
    const nota1 = parseFloat(document.querySelector('#nota1').value);
    const nota2 = parseFloat(document.querySelector('#nota2').value);
    const nota3 = parseFloat(document.querySelector('#nota3').value);
    const arrayNotas = [nota1, nota2, nota3];
    const arrayPorcentajes = [30, 30, 40]; // Definir los valores de porcentaje aquí
    const miDefinitiva = calcular(arrayNotas, arrayPorcentajes);

    console.log("nota 1: ", nota1);
    console.log("nota 2: ", nota2); 
    console.log("nota 3: ", nota3);
    console.log("nota definitiva: ",miDefinitiva);
}


//hasta aqui correccion con callback y porcentajes_____________________________------------

// retornar otro arrgelo con el porcentaje de las notas en la funcion porcentajes,   ese arreglo retorna en calcular