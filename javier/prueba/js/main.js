
// const carritocompra = document.getElementById('carrito');

// const carritolocal = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar carrito guardado en el Local Storage

// function agregarStorage() {
//     const item = {
//         imagen: imagencard,
//         nombre: nombreproductocard,
//         precio: preciocard,
//         cantidad: contarclick
//     };
//     carritolocal.push(item);

//     localStorage.setItem('carrito', JSON.stringify(carritolocal));
// }



// // card 1-------------------------------------------------------------
// let contarclick = 0;
// let nuevafila = 0;

// function crearFila() {
//     nuevafila = document.createElement('tr');
//     carritocompra.appendChild(nuevafila);
//     agregarStorage();
// }

// function actualizarFila(imagen, nombre, precio) {
//     nuevafila.innerHTML = `
//         <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
//         <td>${nombre}</td>
//         <td>${precio}</td>
//         <td>${contarclick}</td>
//     `;
//     agregarStorage();
// }

// crearFila(); // Crea la fila inicial



// // card1
// const card = document.querySelectorAll('.card');
// card.addEventListener("click", () => {
  
//     contarclick++;
//     const imagencard = document.querySelectorAll('.imagencard').src;
//     const nombreproductocard = document.querySelectorAll('.nombreproductocard').textContent;
//     const preciocard = document.querySelectorAll('#preciocard').textContent;
//     actualizarFila(imagencard, nombreproductocard, preciocard);
   
//     agregarStorage();
    
// });




// //------------------------------------------------------------------------
// // vaciar del carrito :
// const vaciarcarrito = document.getElementById('vaciarCarrito');
// vaciarcarrito.addEventListener('click', () => {  
//    carritocompra.removeChild(nuevafila);

//  // vuelve a agregar
//     crearFila(actualizarFila(contarclick=0));
//    });








   
//    vaciarcarrito.addEventListener('click', () => {  
//     carritocompra.removeChild(nuevafila); // Eliminar la fila actual
//     crearFila(); // Crear una nueva fila vacía
//     contarclick = 0; // Reiniciar el contador
// });













document.addEventListener("DOMContentLoaded", () => {
    const carritocompra = document.getElementById('carrito');
    const vaciarcarrito = document.getElementById('vaciarCarrito');
    let contarclick = 0;
    let nuevafila = null;
    const carritolocal = JSON.parse(localStorage.getItem('carrito')) || [];

    function crearFila(imagen, nombre, precio) {
        nuevafila = document.createElement('tr');
        carritocompra.appendChild(nuevafila);
        agregarStorage();
    }

    function agregarStorage() {
        const item = {
            imagen: imagencard,
            nombre: nombreproductocard,
            precio: preciocard,
            cantidad: contarclick
        };
        carritolocal.push(item);
        localStorage.setItem('carrito', JSON.stringify(carritolocal));
    }

    function actualizarFila(imagen, nombre, precio) {
        if (nuevafila === null) {
            crearFila(imagen, nombre, precio);
        } else {
            nuevafila.innerHTML = `
                <td><img src="${imagen}" alt="Imagen del producto" width="50px"></td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${contarclick}</td>
            `;
        }
        agregarStorage();
    }

    vaciarcarrito.addEventListener('click', () => {
        if (nuevafila !== null) {
            carritocompra.removeChild(nuevafila);
            nuevafila = null;
            contarclick = 0;
        }
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener("click", () => {
            contarclick++;
            const imagencard = card.querySelector('.imagencard').src;
            const nombreproductocard = card.querySelector('.nombreproductocard').textContent;
            const preciocard = card.querySelector('.#preciocard').textContent;
            crearFila(); // Crear una nueva fila en cada clic
            actualizarFila(imagencard, nombreproductocard, preciocard);
        });
    });
});