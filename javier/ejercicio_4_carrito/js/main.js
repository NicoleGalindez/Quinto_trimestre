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



// card 1-------------------------------------------------------------
const carritocompra = document.getElementById('carrito');
let contarclick = 0;


let nuevafila = 0;
function crearFila() {
    nuevafila = document.createElement('tr');
    carritocompra.appendChild(nuevafila);

}

function actualizarFila(imagen, nombre, precio) {
    nuevafila.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick}</td>
    `;
}

crearFila(); // Crea la fila inicial


// card1
const card = document.querySelector('#card1');
card.addEventListener("click", () => {
    contarclick++;
    const imagencard1 = document.querySelector('#imagencard1').src;
    const nombreproductocard1 = document.querySelector('#nombreproductocard1').textContent;
    const preciocard1 = document.querySelector('#preciocard1').textContent;
    actualizarFila(imagencard1, nombreproductocard1, preciocard1);
});



// card 2-------------------------------------------------------------

let contarclick2 = 0;

let nuevafila2 = 0;
function crearFila2() {
    nuevafila2 = document.createElement('tr');
    carritocompra.appendChild(nuevafila2);
}

function actualizarFila2(imagen, nombre, precio) {
    nuevafila2.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick2}</td>
    `;
}

crearFila2(); // Crea la fila 2

// card2
const card2 = document.querySelector('#card2');
card2.addEventListener("click", () => {
    contarclick2++;
    const imagencard2 = document.querySelector('#imagencard2').src;
    const nombreproductocard2 = document.querySelector('#nombreproductocard2').textContent;
    const preciocard2 = document.querySelector('#preciocard1').textContent;
    actualizarFila2(imagencard2, nombreproductocard2, preciocard2);
    
});


// card 3-------------------------------------------------------------
let contarclick3 = 0;

let nuevafila3 = 0;
function crearFila3() {
    nuevafila3 = document.createElement('tr');
    carritocompra.appendChild(nuevafila3);
}

function actualizarFila3(imagen, nombre, precio) {
    nuevafila3.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick3}</td>
    `;
}

crearFila3(); // Crea la fila 3

// card3
const card3 = document.querySelector('#card3');
card3.addEventListener("click", () => {
    contarclick3++;
    const imagencard3 = document.querySelector('#imagencard3').src;
    const nombreproductocard3 = document.querySelector('#nombreproductocard3').textContent;
    const preciocard3 = document.querySelector('#preciocard3').textContent;
    actualizarFila3(imagencard3, nombreproductocard3, preciocard3);
    
});




// card 4-------------------------------------------------------------
let contarclick4 = 0;

let nuevafila4 = 0;
function crearFila4() {
    nuevafila4 = document.createElement('tr');
    carritocompra.appendChild(nuevafila4);
}

function actualizarFila4(imagen, nombre, precio) {
    nuevafila4.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick4}</td>
    `;
}

crearFila4(); // Crea la fila 4

// card4
const card4 = document.querySelector('#card4');
card4.addEventListener("click", () => {
    contarclick4++;
    const imagencard4 = document.querySelector('#imagencard4').src;
    const nombreproductocard4 = document.querySelector('#nombreproductocard4').textContent;
    const preciocard4 = document.querySelector('#preciocard4').textContent;
    actualizarFila4(imagencard4, nombreproductocard4, preciocard4);
    
});





// card 5-------------------------------------------------------------
let contarclick5 = 0;

let nuevafila5 = 0;
function crearFila5() {
    nuevafila5 = document.createElement('tr');
    carritocompra.appendChild(nuevafila5);
}

function actualizarFila5(imagen, nombre, precio) {
    nuevafila5.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick5}</td>
    `;
}

crearFila5(); // Crea la fila 5

// card5
const card5 = document.querySelector('#card5');
card5.addEventListener("click", () => {
    contarclick5++;
    const imagencard5 = document.querySelector('#imagencard5').src;
    const nombreproductocard5 = document.querySelector('#nombreproductocard5').textContent;
    const preciocard5 = document.querySelector('#preciocard5').textContent;
    actualizarFila5(imagencard5, nombreproductocard5, preciocard5);
    
});



// card 6-------------------------------------------------------------
// card 5-------------------------------------------------------------
let contarclick6 = 0;

let nuevafila6= 0;
function crearFila6() {
    nuevafila6 = document.createElement('tr');
    carritocompra.appendChild(nuevafila6);
}

function actualizarFila6(imagen, nombre, precio) {
    nuevafila6.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick6}</td>
    `;
}

crearFila6(); // Crea la fila 6
// card 6
const card6 = document.querySelector('#card6');
card6.addEventListener("click", () => {
    contarclick6++;
    const imagencard6 = document.querySelector('#imagencard6').src;
    const nombreproductocard6 = document.querySelector('#nombreproductocard6').textContent;
    const preciocard6 = document.querySelector('#preciocard6').textContent;
    actualizarFila6(imagencard6, nombreproductocard6, preciocard6);
});


// card 7-------------------------------------------------------------
let contarclick7 = 0;

let nuevafila7 = 0;
function crearFila7() {
    nuevafila7 = document.createElement('tr');
    carritocompra.appendChild(nuevafila7);
}

function actualizarFila7(imagen, nombre, precio) {
    nuevafila7.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick7}</td>
    `;
}

crearFila7(); // Crea la fila 7

// card7
const card7 = document.querySelector('#card7');
card7.addEventListener("click", () => {
    contarclick7++;
    const imagencard7 = document.querySelector('#imagencard7').src;
    const nombreproductocard7 = document.querySelector('#nombreproductocard7').textContent;
    const preciocard7 = document.querySelector('#preciocard7').textContent;
    actualizarFila7(imagencard7, nombreproductocard7, preciocard7);
    
});



// card 8-------------------------------------------------------------
let contarclick8 = 0;

let nuevafila8 = 0;
function crearFila8() {
    nuevafila8 = document.createElement('tr');
    carritocompra.appendChild(nuevafila8);
}

function actualizarFila8(imagen, nombre, precio) {
    nuevafila8.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick8}</td>
    `;
}

crearFila8(); // Crea la fila 8

// card8
const card8 = document.querySelector('#card8');
card8.addEventListener("click", () => {
    contarclick8++;
    const imagencard8 = document.querySelector('#imagencard8').src;
    const nombreproductocard8 = document.querySelector('#nombreproductocard8').textContent;
    const preciocard8 = document.querySelector('#preciocard8').textContent;
    actualizarFila5(imagencard8, nombreproductocard8, preciocard8);
    
});




// card 9-------------------------------------------------------------
let contarclick9 = 0;

let nuevafila9 = 0;
function crearFila9() {
    nuevafila9 = document.createElement('tr');
    carritocompra.appendChild(nuevafila9);
}

function actualizarFila9(imagen, nombre, precio) {
    nuevafila9.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick9}</td>
    `;
}

crearFila9(); // Crea la fila 9

// card9
const card9 = document.querySelector('#card9');
card9.addEventListener("click", () => {
    contarclick9++;
    const imagencard9 = document.querySelector('#imagencard9').src;
    const nombreproductocard9 = document.querySelector('#nombreproductocard9').textContent;
    const preciocard9 = document.querySelector('#preciocard9').textContent;
    actualizarFila9(imagencard9, nombreproductocard9, preciocard9);
    
});



// card 10-------------------------------------------------------------

let contarclick10 = 0;

let nuevafila10 = 0;
function crearFila10() {
    nuevafila10 = document.createElement('tr');
    carritocompra.appendChild(nuevafila10);
}

function actualizarFila10(imagen, nombre, precio) {
    nuevafila10.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick10}</td>
    `;
}

crearFila10(); // Crea la fila 10

// card10
const card10 = document.querySelector('#card10');
card10.addEventListener("click", () => {
    contarclick10++;
    const imagencard10 = document.querySelector('#imagencard10').src;
    const nombreproductocard10 = document.querySelector('#nombreproductocard10').textContent;
    const preciocard10 = document.querySelector('#preciocard10').textContent;
    actualizarFila10(imagencard10, nombreproductocard10, preciocard10);
    
});



// card 11-------------------------------------------------------------

let contarclick11 = 0;

let nuevafila11 = 0;
function crearFila11() {
    nuevafila11 = document.createElement('tr');
    carritocompra.appendChild(nuevafila11);
}

function actualizarFila11(imagen, nombre, precio) {
    nuevafila11.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick11}</td>
    `;
}

crearFila11(); // Crea la fila 11

// card11
const card11 = document.querySelector('#card11');
card11.addEventListener("click", () => {
    contarclick11++;
    const imagencard11 = document.querySelector('#imagencard11').src;
    const nombreproductocard11= document.querySelector('#nombreproductocard11').textContent;
    const preciocard11 = document.querySelector('#preciocard11').textContent;
    actualizarFila11(imagencard11, nombreproductocard11, preciocard11);
    
});



// card 12-------------------------------------------------------------

let contarclick12 = 0;

let nuevafila12 = 0;
function crearFila12() {
    nuevafila12 = document.createElement('tr');
    carritocompra.appendChild(nuevafila12);
}

function actualizarFila12(imagen, nombre, precio) {
    nuevafila12.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick12}</td>
    `;
}

crearFila12(); // Crea la fila 12

// card12
const card12 = document.querySelector('#card12');
card12.addEventListener("click", () => {
    contarclick12++;
    const imagencard12 = document.querySelector('#imagencard12').src;
    const nombreproductocard12= document.querySelector('#nombreproductocard12').textContent;
    const preciocard12 = document.querySelector('#preciocard12').textContent;
    actualizarFila12(imagencard12, nombreproductocard12, preciocard12);
    
});




const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
vaciarCarritoBtn.addEventListener('click', () => {
  
   carritocompra.removeChild(nuevafila);
   carritocompra.removeChild(nuevafila2);
   carritocompra.removeChild(nuevafila3);
   carritocompra.removeChild(nuevafila4);
   carritocompra.removeChild(nuevafila5);
   carritocompra.removeChild(nuevafila6);
   carritocompra.removeChild(nuevafila7);
   carritocompra.removeChild(nuevafila8);
   carritocompra.removeChild(nuevafila9); 
   carritocompra.removeChild(nuevafila10);
   carritocompra.removeChild(nuevafila11);
   carritocompra.removeChild(nuevafila12);
 // falta completar , elimina pero no vuelve a agregar
});
