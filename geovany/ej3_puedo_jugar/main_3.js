let miDiv=document.getElementById('midiv');
let miBoton =document.getElementById('midiv');

const setText=data=>{
    miDiv.textContent=data
}

const getData=c1=>{
    setText('puedo jugar?')
    setTimeout(()=>{
        c1(true)
    },2000)
}

const showData=c2=>{
    setText(' esperando autorización');
    setTimeout(() => {
        c2({Jugador:"Rider"})
    }, 2000);

}

miBoton.addEventListener('click', ()=>{
    getData(permitido=>{
        if(permitido){
            showData(user=>{
                setText(user.Jugador);
            })
        }
    })
});




// con promesa
/*
const midiv = document.getElementById("miDiv");
const miboton = document.getElementById("miBoton");

const setText = data=>{ 
    midiv.textContent = data;
}

const getdata =()=>{return new Promise((resolve,rechaza)=>{
     setText("puedo jugar");
      setTimeout(() => { 
        resolve(true);
    }, 2000);
 });
}
 const showdata = () => {
     return new Promise((resolve1, rechaza1) => {
         setText("esperando autorizacion");
          setTimeout(() => {
            resolve1({ jugador: "ryder" });
         }, 2000);});
        }
        miboton.addEventListener('click', () => {
             getdata() .then(permitido => {
                 if (permitido) {
                     return 
                     showdata();
 }}) .then(user => {
     setText(user.jugador);
     });
    });
    */
   