const formulario =document.querySelector('#formulario');
const listaTweets=document.querySelector('#lista-tweets');
const listaImagenes=document.querySelector('#lista-imagenes');
let tweets=[];

let images=[];


// aqui voy a crear los listeners
eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    formulario.addEventListener('submit', agregarTweet);
    formulario.addEventListener('change', agregarImage); // agregado mio
    //cuando el documento esta listo
  document.addEventListener('DOMContentLoaded',()=>{
    tweets=JSON.parse(localStorage.getItem('tweets')) || [];
    images=JSON.parse(localStorage.getItem('images')) || [];
    console.log(tweets);
    console.log(images);

    crearHTML();

  

  })

}


// aqui voy a crear las funciones

function agregarTweet(e){
    e.preventDefault();
    console.log('agregar tweet')

    //lee el valor del tex area
    const tweet=document.querySelector("#tweet").value;
    console.log(tweet);

    //validacion:
    if(tweet ==="") {
        // console.log('no puede ir vacio')
        mostrarError("no puede estar vacio");
        return; //previene que sigan ejecutando las lineas
    }

    const tweetObj={
        id: Date.now(), // valor en milisegundos para crear registros con milisegundos 
    //tweet:tweet
        tweet
}

    tweets=[...tweets, tweetObj]; 
     //añadir el tweet al arreglo de tweets
    // tweets=[...tweets, tweet];// con spread duplicamos el arreglo y agregamos lo que estamos escribiendo en el textarea
     console.table(tweets);
     console.table(images);
    // llamar la funcion de crear el html
    crearHTML();
    // 
    formulario.reset();
}

// agregado mio___________________________________________-
function agregarImage(e){
    e.preventDefault();
    
    console.log('agregar images')

    //lee el valor del tex area
    const image=document.querySelector("#image").files[0];
    console.log(image);

    //validacion:
 
    if (!image) {
        mostrarError("No puede estar vecio");
        return;
      }

    const reader=new FileReader();

    reader.onload = function(e){
    
        
        const imageObj={
            id: Date.now(), // valor en milisegundos para crear registros con milisegundos 
        //tweet:tweet
            image: e.target.result // guarda el contenido de la imagen ?
            
              
        };
    
        images=[...images, imageObj]; 
         //añadir el tweet al arreglo de tweets
        // tweets=[...tweets, tweet];// con spread duplicamos el arreglo y agregamos lo que estamos escribiendo en el textarea
         console.log(images);
        // llamar la funcion de crear el html
        crearHTML();
        // 
        formulario.reset();
        };

        reader.readAsDataURL(image); 
     //  reader.readAsDataURL(file ); // o asi?????????????
    
    }

//hasta aquí___________________________________________-


function mostrarError(error){
    const mensajeError=document.createElement('p');
    mensajeError.textContent= error;
    mensajeError.classList.add('error');

    const contenido=document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    // remover el mensaje despues de 3 segundos
    setTimeout(()=>{
    mensajeError.remove(); },3000);
}


function crearHTML(){
    limpiarHTML();

    if(tweets.length >0 ){
        tweets.forEach((tweet)=>{

                   //crear boton de eliminar
            const botonBorrar =document.createElement('a');
            botonBorrar.classList='borrar-tweet';
            botonBorrar.innerText='Eliminar';

            // añadir funcion eliminar
            botonBorrar.onclick=()=>{
                borrarTwet(tweet.id)   
                ;}

               
//-------------------------------------------------------------------------------------------

            //aqui vamos a crear el html para los tweets
            const li=document.createElement('li');
          

            //añadimos texto
            li.textContent=tweet.tweet;

            // añadimos el boton
            li.appendChild(botonBorrar);
            //insertar en el html
            listaTweets.appendChild(li);
          
        });

    }

    // correccion que hacia falta :--------------------
    if (images.length > 0) {
        images.forEach((imageObj) => {



          

          // Creamos un elemento de imagen
          const img = document.createElement('img');
          img.src = imageObj.image;
          img.style.width = '300px'; // Establecemos un ancho para la imagen
    
          // Insertamos la imagen en el contenedor correspondiente
          listaImagenes.appendChild(img);
        });
      }
      // hasta aquí.----------------------
 agregarStorage();
}




function borrarTwet(id){
   console.log('eliminando tweet', id)
   tweets= tweets.filter(tweet=> tweet.id !== id);
   images= images.filter(tweet=> tweet.id !== id);
    crearHTML();
}





function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
        
    }
    
    //agregado mio___________________________________________-
    while(listaImagenes.firstChild){
        listaImagenes.removeChild(listaImagenes.firstChild);
    }
    //hasta aquí___________________________________________-
}

// agrega comentario o tweet al local storage no borra con f5
function agregarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
    //agregado mio___________________________________________-

    localStorage.setItem('images', JSON.stringify(images));
    //hasta aquí___________________________________________-

}


