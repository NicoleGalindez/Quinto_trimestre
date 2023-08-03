      let email = document.querySelector('#email').value;
      let password = document.querySelector('#password').value;

 
      const enviar = document.querySelector('#enviar');
      console.log(enviar);
      
      enviar.addEventListener('click',()=>{


function inicio(){

        if (email === "admin@sena.com" && password === "12345678"){
          document.body.style.backgroundColor = '#A5DDF9';//azul claro
          alert(`bienvenido ${email}` )
        } 
         else if (email!== "admin@sena.com" && password !== "12345678"){
          document.body.style.backgroundColor = '#9566E0';// violeta    si funciona
           alert(`bienvenido ${email}` )}

          else if ( email=="nico@gmail.com" && password=="11111111"){
            document.body.style.backgroundColor='#E0FED7';//verde claro
          alert(`bienvenido ${email}`)

        }  
      //   else if ( email && password){
      //     document.body.style.backgroundColor='#FFFED7';//amarillo claro
      //   alert(`bienvenido ${email}`)
      //  }  

        else if( password.length <8){
            alert("maximo 8 caracteres")
        }
    
  

      } inicio();

    });