      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;

 
      if (email === "admin@sena.com" && password === "12345678") {
        document.body.style.backgroundColor = '#A5DDF9';
      } 
      else (email!= "admin@sena.com" && password != "12345678"){
        document.body.style.backgroundColor = '#9566E0';
      };