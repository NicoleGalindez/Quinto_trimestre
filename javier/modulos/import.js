// import es el que se llama en el index

import {nombreprofesor, asignaturaprofesor,ihorarioprofesor, asignatura}from"./export.js";
console.log(asignatura(nombreprofesor,asignaturaprofesor,ihorarioprofesor));

import {tutor}from"./export.js";
console.table(tutor);
//encontrar un tutor por medio del id en el objeto que esta en el export

const traertutorbyid1=(id)=>{
    return tutor.find((tutor)=>{
        if(tutor.id===id){
            return tutor;
        }
    })
};

console.table(traertutorbyid1(1)); // el id que yo quiera;


// lo mismo anterior pero simplificado:

const traertutorbyid2=(id)=>{
    return tutor.find((tutor)=>tutor.id===id);

};

console.table(traertutorbyid2(2));



//lo mismo pero sin usar return 

const traertutorbyid3=(id)=>tutor.find((tutor)=>tutor.id===id);
console.table(traertutorbyid3(3));



//buscar por nombre
const traertutorbyid4=(nombre)=>tutor.find((tutor)=>tutor.nombre===nombre);

console.table(traertutorbyid4("angela"));



// para filtrar

const traertutorbyid5=(nombre)=>tutor.filter((tutor)=>tutor.nombre===nombre);
console.table(traertutorbyid5("nico"));

