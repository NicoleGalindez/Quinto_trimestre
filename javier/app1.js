// creamos las Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//creamos los Event listeners    
eventListeners();
function eventListeners() {
    //Cuando se envia el formulario
    formulario.addEventListener('submit', agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets =JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });
}

//creamos las funciones
function agregarTweet(e) {
    e.preventDefault();
    //console.log('agregar tweet');
    // leer el valor del textarea
    const tweet = document.querySelector('#tweet').value;
    console.log(tweet);

    // validación
    if(tweet === '') {
        //console.log('No puede ir vacio');
        mostrarError('El mensaje, NO puede ir vacio!!!');
        return; //previene que se sigan ejecutando las lineas
   }

   const tweetObj = {
       id: Date.now(), //devuelve el valor en milisegundos para crear registros con milisegundos
       //tweet: tweet 
       tweet //en recientes versiones de ES6 se puede escribir solo la llave cuando los valores son iguales
   }

   //Anadir el tweet al arreglo de tweets
   //tweets = [...tweets, tweet];//Con spread duplicamnos el arreglo y agregamos lo que estamos escribiendo en el textarea
   tweets = [...tweets, tweetObj];//Con spread duplicamnos el arreglo y agregamos lo que estamos escribiendo en el textarea
   console.log(tweets);
   crearHTML();
   //limpiar el textarea
   formulario.reset();
}

function mostrarError(error) {
    const mensajeEerror = document.createElement('p');
    mensajeEerror.textContent = error;
    mensajeEerror.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeEerror);

    // remover el mensaje despues de 3 segundos
    setTimeout(() => {
         mensajeEerror.remove();
    }, 3000);
}

//Muestra un Listado de los Comentatios o Tweets hechos
function crearHTML(){
    limpiarHTML();
    //iniciando el html y se valida que se pueda ejecutar mientras no este vacio el arreglo
    if (tweets.length >0) {
        tweets.forEach((tweet) => {
            // crear boton de eliminar
            const botonBorrar = document.createElement('a');
            botonBorrar.classList = 'borrar-tweet';
            botonBorrar.innerText = 'Eliminar';

            //añadir la funcion de eliminar
            botonBorrar.onclick = () => {
                borrarTweet(tweet.id);
            }
            

            //aqui vamos a crear el HTML para los tweets   
            const li = document.createElement('li');
            //añadimos el texto
            li.textContent = tweet.tweet;
            //añadimos el boton
            li.appendChild(botonBorrar);

            //insertar en el HTML
            listaTweets.appendChild(li);
    });
}
agregarStorage();
}

//Elimina un comentario o tweet
function borrarTweet(id){
 //  console.log('Eliminando tweet', id);
 tweets = tweets.filter(tweet => tweet.id !== id);
 //console.log(tweets);
 crearHTML();


}

//Limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
         listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Agrega comentario o tweet a local storage
function agregarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


