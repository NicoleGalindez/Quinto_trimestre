
const carritocompra = document.getElementById('carrito');

const carritolocal = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar carrito guardado en el Local Storage

function agregarStorage() {
    const item1 = {
        imagen: imagencard1,
        nombre: nombreproductocard1,
        precio: preciocard1,
        cantidad: contarclick
    };
    carritolocal.push(item1);
//------------------------------------


    localStorage.setItem('carrito', JSON.stringify(carritolocal));
}



// card 1-------------------------------------------------------------
let contarclick = 0;
let nuevafila = 0;
function crearFila() {
    nuevafila = document.createElement('tr');
    carritocompra.appendChild(nuevafila);
    agregarStorage();
}

function actualizarFila(imagen, nombre, precio) {
    nuevafila.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick}</td>
    `;
    agregarStorage();
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
   
    agregarStorage();
    
});



// card 2-------------------------------------------------------------
let contarclick2 = 0;
let nuevafila2 = 0;
function crearFila2() {
    nuevafila2 = document.createElement('tr');
    carritocompra.appendChild(nuevafila2);
    agregarStorage();
}

function actualizarFila2(imagen, nombre, precio) {
    nuevafila2.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick2}</td>
    `;
    agregarStorage();
}
crearFila2(); 

// card2
const card2 = document.querySelector('#card2');
card2.addEventListener("click", () => {
    contarclick2++;
    const imagencard2 = document.querySelector('#imagencard2').src;
    const nombreproductocard2 = document.querySelector('#nombreproductocard2').textContent;
    const preciocard2 = document.querySelector('#preciocard1').textContent;
    actualizarFila2(imagencard2, nombreproductocard2, preciocard2);  
    agregarStorage();
});



// card 3-------------------------------------------------------------
let contarclick3 = 0;
let nuevafila3 = 0;
function crearFila3() {
    nuevafila3 = document.createElement('tr');
    carritocompra.appendChild(nuevafila3);
    agregarStorage();
}

function actualizarFila3(imagen, nombre, precio) {
    nuevafila3.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick3}</td>
    `;
    agregarStorage();
}
crearFila3(); 

// card3
const card3 = document.querySelector('#card3');
card3.addEventListener("click", () => {
    contarclick3++;
    const imagencard3 = document.querySelector('#imagencard3').src;
    const nombreproductocard3 = document.querySelector('#nombreproductocard3').textContent;
    const preciocard3 = document.querySelector('#preciocard3').textContent;
    actualizarFila3(imagencard3, nombreproductocard3, preciocard3);
    agregarStorage();  
});



// card 4-------------------------------------------------------------
let contarclick4 = 0;
let nuevafila4 = 0;
function crearFila4() {
    nuevafila4 = document.createElement('tr');
    carritocompra.appendChild(nuevafila4);
    agregarStorage();
}

function actualizarFila4(imagen, nombre, precio) {
    nuevafila4.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick4}</td>
    `;
    agregarStorage();
}
crearFila4();

// card4
const card4 = document.querySelector('#card4');
card4.addEventListener("click", () => {
    contarclick4++;
    const imagencard4 = document.querySelector('#imagencard4').src;
    const nombreproductocard4 = document.querySelector('#nombreproductocard4').textContent;
    const preciocard4 = document.querySelector('#preciocard4').textContent;
    actualizarFila4(imagencard4, nombreproductocard4, preciocard4); 
    agregarStorage(); 
});



// card 5-------------------------------------------------------------
let contarclick5 = 0;
let nuevafila5 = 0;
function crearFila5() {
    nuevafila5 = document.createElement('tr');
    carritocompra.appendChild(nuevafila5);
    agregarStorage();
}

function actualizarFila5(imagen, nombre, precio) {
    nuevafila5.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick5}</td>
    `;
    agregarStorage();
}
crearFila5(); 

// card5
const card5 = document.querySelector('#card5');
card5.addEventListener("click", () => {
    contarclick5++;
    const imagencard5 = document.querySelector('#imagencard5').src;
    const nombreproductocard5 = document.querySelector('#nombreproductocard5').textContent;
    const preciocard5 = document.querySelector('#preciocard5').textContent;
    actualizarFila5(imagencard5, nombreproductocard5, preciocard5);
    agregarStorage();
});



// card 6-------------------------------------------------------------
let contarclick6 = 0;
let nuevafila6= 0;
function crearFila6() {
    nuevafila6 = document.createElement('tr');
    carritocompra.appendChild(nuevafila6);
    agregarStorage();
}

function actualizarFila6(imagen, nombre, precio) {
    nuevafila6.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick6}</td>
    `;
    agregarStorage();
}
crearFila6(); 

// card 6
const card6 = document.querySelector('#card6');
card6.addEventListener("click", () => {
    contarclick6++;
    const imagencard6 = document.querySelector('#imagencard6').src;
    const nombreproductocard6 = document.querySelector('#nombreproductocard6').textContent;
    const preciocard6 = document.querySelector('#preciocard6').textContent;
    actualizarFila6(imagencard6, nombreproductocard6, preciocard6);
    agregarStorage();
});


// card 7-------------------------------------------------------------
let contarclick7 = 0;
let nuevafila7 = 0;
function crearFila7() {
    nuevafila7 = document.createElement('tr');
    carritocompra.appendChild(nuevafila7);
    agregarStorage();
}

function actualizarFila7(imagen, nombre, precio) {
    nuevafila7.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick7}</td>
    `;
    agregarStorage();
}
crearFila7(); 

// card7
const card7 = document.querySelector('#card7');
card7.addEventListener("click", () => {
    contarclick7++;
    const imagencard7 = document.querySelector('#imagencard7').src;
    const nombreproductocard7 = document.querySelector('#nombreproductocard7').textContent;
    const preciocard7 = document.querySelector('#preciocard7').textContent;
    actualizarFila7(imagencard7, nombreproductocard7, preciocard7);  
    agregarStorage();
});



// card 8-------------------------------------------------------------
let contarclick8 = 0;
let nuevafila8 = 0;
function crearFila8() {
    nuevafila8 = document.createElement('tr');
    carritocompra.appendChild(nuevafila8);
    agregarStorage();
}

function actualizarFila8(imagen, nombre, precio) {
    nuevafila8.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick8}</td>
    `;
    agregarStorage();
}
crearFila8(); 

// card8
const card8 = document.querySelector('#card8');
card8.addEventListener("click", () => {
    contarclick8++;
    const imagencard8 = document.querySelector('#imagencard8').src;
    const nombreproductocard8 = document.querySelector('#nombreproductocard8').textContent;
    const preciocard8 = document.querySelector('#preciocard8').textContent;
    actualizarFila5(imagencard8, nombreproductocard8, preciocard8);
    agregarStorage();
});



// card 9-------------------------------------------------------------
let contarclick9 = 0;
let nuevafila9 = 0;
function crearFila9() {
    nuevafila9 = document.createElement('tr');
    carritocompra.appendChild(nuevafila9);
    agregarStorage();
}

function actualizarFila9(imagen, nombre, precio) {
    nuevafila9.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick9}</td>
    `;
    agregarStorage();
}
crearFila9(); 

// card9
const card9 = document.querySelector('#card9');
card9.addEventListener("click", () => {
    contarclick9++;
    const imagencard9 = document.querySelector('#imagencard9').src;
    const nombreproductocard9 = document.querySelector('#nombreproductocard9').textContent;
    const preciocard9 = document.querySelector('#preciocard9').textContent;
    actualizarFila9(imagencard9, nombreproductocard9, preciocard9);
    agregarStorage();
});



// card 10-------------------------------------------------------------
let contarclick10 = 0;
let nuevafila10 = 0;
function crearFila10() {
    nuevafila10 = document.createElement('tr');
    carritocompra.appendChild(nuevafila10);
    agregarStorage();
}

function actualizarFila10(imagen, nombre, precio) {
    nuevafila10.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick10}</td>
    `;
    agregarStorage();
}
crearFila10(); 

// card10
const card10 = document.querySelector('#card10');
card10.addEventListener("click", () => {
    contarclick10++;
    const imagencard10 = document.querySelector('#imagencard10').src;
    const nombreproductocard10 = document.querySelector('#nombreproductocard10').textContent;
    const preciocard10 = document.querySelector('#preciocard10').textContent;
    actualizarFila10(imagencard10, nombreproductocard10, preciocard10);
    agregarStorage();
});



// card 11-------------------------------------------------------------
let contarclick11 = 0;
let nuevafila11 = 0;
function crearFila11() {
    nuevafila11 = document.createElement('tr');
    carritocompra.appendChild(nuevafila11);
    agregarStorage();
}

function actualizarFila11(imagen, nombre, precio) {
    nuevafila11.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick11}</td>
    `;
    agregarStorage();
}
crearFila11(); 

// card11
const card11 = document.querySelector('#card11');
card11.addEventListener("click", () => {
    contarclick11++;
    const imagencard11 = document.querySelector('#imagencard11').src;
    const nombreproductocard11= document.querySelector('#nombreproductocard11').textContent;
    const preciocard11 = document.querySelector('#preciocard11').textContent;
    actualizarFila11(imagencard11, nombreproductocard11, preciocard11);
    agregarStorage();
});



// card 12-------------------------------------------------------------
let contarclick12 = 0;
let nuevafila12 = 0;
function crearFila12() {
    nuevafila12 = document.createElement('tr');
    carritocompra.appendChild(nuevafila12);
    agregarStorage();
}

function actualizarFila12(imagen, nombre, precio) {
    nuevafila12.innerHTML = `
        <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${contarclick12}</td>
    `;
    agregarStorage();
}
crearFila12(); 

// card12
const card12 = document.querySelector('#card12');
card12.addEventListener("click", () => {
    contarclick12++;
    const imagencard12 = document.querySelector('#imagencard12').src;
    const nombreproductocard12= document.querySelector('#nombreproductocard12').textContent;
    const preciocard12 = document.querySelector('#preciocard12').textContent;
    actualizarFila12(imagencard12, nombreproductocard12, preciocard12);
    agregarStorage();
});


//------------------------------------------------------------------------
// vaciar del carrito :
const vaciarcarrito = document.getElementById('vaciarCarrito');
vaciarcarrito.addEventListener('click', () => {
  
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
 // vuelve a agregar
    crearFila(actualizarFila(contarclick=0));
    crearFila2(actualizarFila2(contarclick2=0));
    crearFila3(actualizarFila3(contarclick3=0));
    crearFila4(actualizarFila4(contarclick4=0));
    crearFila5(actualizarFila5(contarclick5=0));
    crearFila6(actualizarFila6(contarclick6=0));
    crearFila7(actualizarFila7(contarclick7=0));
    crearFila8(actualizarFila8(contarclick8=0));
    crearFila9(actualizarFila9(contarclick9=0));
    crearFila10(actualizarFila10(contarclick10=0));
    crearFila11(actualizarFila11(contarclick11=0));
    crearFila12(actualizarFila12(contarclick12=0));
});


