

// const datos=document.querySelector('#formulario');
// function mostrardatos(){
//     let datos="quieres confirmar los datos?";
//     alert(datos);
// }
//_____________________________________________________________________





// const mes=document.getElementById('mes');
// const año=document.getElementById('año');
// const trimestre=document.getElementById('trimestre');
// const ganar=document.getElementById('Gana');
// const ganar=document.getElementById('Pierde');
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












function enviar  (mes,año,trimestre,competencia,check )  {
    let mensaje = (`en el mes de ${mes}, de el año ${año}, del trimestre ${trimestre} se  ${check}  la competencia de  ${competencia}  ` )

    let mensajefinal=document.querySelector("#parrafo").textContent=mensaje
        
};







// enviar.addEventListener("click",(mes,año,trimestre,Gana,Pierde,competencia)=>{});

// HTML   "document.getElementById(enviar(mes.value,año.value,trimestre.value,Gana.values,Pierde.value,competencia.value))"   







