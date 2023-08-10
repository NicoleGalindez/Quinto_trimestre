

// const datos=document.querySelector('#formulario');
// function mostrardatos(){
//     let datos="quieres confirmar los datos?";
//     alert(datos);
// }
//_____________________________________________________________________





// const mes=document.getElementById('mes');
// const año=document.getElementById('año');
// const trimestre=document.getElementById('trimestre');
// const radio=document.getElementById('ganarPerder');
// //const ganar=document.getElementById('Pierde');
// const competencia=document.getElementById('competencia');


// const enviar=document.querySelector('#enviar');
// enviar.addEventListener("click",()=>{
// document.write(`En el mes de ${mes.value} del  año${año.value}, en el  trimestre ${trimestre.value} se  ${ganarPerder.value}  la competencia de ${competencia.value}`)});




                                            // //const verdatos=document.querySelector('#verdatos');
                                            // function mostrardatos(){
                                            //     let datos=document.getElementById('formulario');
                                            //     let parrafo=document.querySelector("#verdatos");
                                            //     parrafo.innerHTML = datos;
                                            // }












function enviar  (mes,año,trimestre,competencia,radio )  {
    let mensaje = (`en el mes de ${mes}, de el año ${año}, del trimestre ${trimestre} se  ${radio}  la competencia de  ${competencia}  ` )

    let mensajefinal=document.querySelector("#parrafo").textContent=mensaje; 
};




//_---------------------------------------


// function enviar  (mes,año,trimestre,fechaeva,radio ,competencia)  {
//     let mensaje2 = (`en el mes de ${mes}, de el año ${año}, del trimestre ${trimestre} , el dia ${fechaeva} y se  ${radio}  la competencia de  ${competencia}  ` )

//     let mensajefinal=document.querySelector("#parrafo2").textContent=mensaje2; 


//     const verarray = [
//         mes,año,trimestre,fechaeva,radio,competencia
    
//       ]
//       enviararray(verarray);
    

// };



function enviararray(verarray){
    console.log(verarray)

    return()=>{
       verarray.fechaeva;
    }
console.table
}










// enviar.addEventListener("click",(mes,año,trimestre,Gana,Pierde,competencia)=>{});

// HTML   "document.getElementById(enviar(mes.value,año.value,trimestre.value,Gana.values,Pierde.value,competencia.value))"   







