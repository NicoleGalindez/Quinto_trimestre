
const midiv = document.getElementById("miDiv");
const miboton = document.getElementById("miBoton");
const miboton1 = document.getElementById("miBoton1");
const miboton2 = document.getElementById("miBoton2");
const setText = data => {
    midiv.textContent = data;
    console.log(data);
}
const getdata = c1 => {
     setText("puedo jugar");
     setTimeout(() => { 
        if (miboton1.clicked) {
             c1(true);
             }
        else { 
        setText("dale rapido hpta"); 
    }
    }, 2000);
}
const showdata = c2 => {
    setText("esperando autorizacion");
     setTimeout(() => { c2({ jugador: "Bartolomeo" });
     }, 2000);
}
miboton.addEventListener('click', () => {
    getdata(permitido => { if (permitido) { 
     showdata(user => { 
         setText(user.jugador);
        });
     }
     });
    });
 miboton1.addEventListener('click', () => {
         miboton1.clicked = true; 
         getdata(permitido => { if (permitido) { 
             showdata(user => {  setText(user.jugador); 

 const botoncito=document.createElement("button") ;

  botoncito.id = "botoncito"; 
   botoncito.textContent="botoncito";
   document.body.appendChild(botoncito)}); 
}
 });
});
miboton2.addEventListener('click', () => {
     miboton1.clicked = false; 
      setText("No puede jugar");
    });
