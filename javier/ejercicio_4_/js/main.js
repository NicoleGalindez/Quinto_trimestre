/*  
// MI CODIGO
const card1= document.getElementById('card1');

let contarclick=0;

card1.addEventListener("click", () => {
    contarclick++;
    //numeroclicks();
    numeroclicks();
})



// card 1
const imagencard1=document.getElementById('imagencard1').src;
const nombreproductocard1=document.getElementById('nombreproductocard1').textContent;
const preciocard1=document.getElementById('preciocard1').textContent;


const carritocompra=document.getElementById('carrito');


function numeroclicks() {
        const nuevafila1 = document.createElement('tr');
        nuevafila1.innerHTML = `
        <td><img src="${imagencard1}" alt="Imagen del producto"  width='80px'  > </td>
                        <td>${nombreproductocard1}</td>
                        <td>${preciocard1}</td>
                        <td>${contarclick}</td>
                        `;
                        
        carritocompra.appendChild(nuevafila1);
        
}


console.log(imagencard1)
console.log(nombreproductocard1)
console.log(preciocard1)
   */





// CORRECCION DE CHAT

const carritocompra = document.getElementById('carrito');
let contarclick = 0;
let nuevafila = null;

function crearFila() {
    nuevafila = document.createElement('tr');
    carritocompra.appendChild(nuevafila);
}

function actualizarFila(imagen, nombre, precio) {
    nuevafila.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="80px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick}</td>
    `;
}

crearFila(); // Crea la fila inicial

const card = document.querySelectorAll('.card');
card.addEventListener("click", () => {
    contarclick++;
    const imagencard = document.querySelector('.imagencard').src;
    const nombreproductocard = document.querySelector('.nombreproductocard').textContent;
    const preciocard = document.getElementById('preciocard').textContent;
    actualizarFila(imagencard, nombreproductocard, preciocard);
});




