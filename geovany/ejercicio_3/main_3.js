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