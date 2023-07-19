const divtexto = document.querySelector('#texto'); //Referencia al id creado con #  
const user=prompt('tu nombre');
const   titulo = <h1>Bienvenid@ {user} al curso de React</h1>; 



ReactDOM.render(titulo, divtexto);



