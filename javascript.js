let nombre = null;
let correu = null;
let password = null;
let provincia = null;
let nomRegex = RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u);
let emailRegex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
let passRegex = RegExp(/^(?=.*[0-9])(?=.*[A-Z]).{8}/);
let completo = true;
let emailCorrecto = false;
let passCorrecto = false;

document.getElementById('enviar').addEventListener('click', function(){
  enviar()
})

document.getElementById('loginCheck').addEventListener('click', function(){
  loginCheck()
})

///////////FUNCIÓ ENVIAR DEL FORMULARI///////////

function enviar() {

      completo = true;
      
  //NOM//
      if (document.getElementById('nom').value != '' && document.getElementById('nom').value.match(nomRegex)) {
      nom.classList.add("is-valid");
      nom.classList.remove("is-invalid");
      console.log(nombre)
      }
      else{
        console.log('nope nombre');
        nom.classList.add("is-invalid");
        nom.classList.remove("is-valid");
        completo = false;
      }
  //EMAIL//
      if (document.getElementById('email').value != '' && document.getElementById('email').value.match(emailRegex)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        console.log(correu)
      }
      else{
        console.log('nope correu');
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        completo = false;
      }
  //PASSWORD//
      if (document.getElementById('pass').value != '' && document.getElementById('pass').value.match(passRegex)) {
        pass.classList.add("is-valid");
        pass.classList.remove("is-invalid");
        console.log('Hola pass')
        if (document.getElementById('pass').value == document.getElementById('passCheck').value) {
          passCheck.classList.add("is-valid");
          passCheck.classList.remove("is-invalid");
          console.log(password)
        }
        else{
          passCheck.classList.add("is-invalid");
          passCheck.classList.remove("is-valid");
          console.log('nope passCheck');
        }
      }
      else{
        pass.classList.add("is-invalid");
        console.log('nope pass');
        completo = false;
      }
  //PROVICNIA//
      if (document.getElementById('prov').value != "") {
        prov.classList.add("is-valid");
        prov.classList.remove("is-invalid");
        console.log(provincia);
      }
      else {
        prov.classList.add("is-invalid");
        prov.classList.remove("is-valid");
        console.log('Nope provincia');
        completo = false;
      }

      if (completo == true) {
        nombre = document.getElementById('nom').value
        correu = document.getElementById('email').value
        password = document.getElementById('pass').value
        provincia = document.getElementById('prov').value
        
      }


}     

///////////FUNCIÓ ENVIAR DEL LOGIN///////////

function loginCheck() {
  
//EMAIL LOGIN//
    if (document.getElementById('emailLog').value != '' && document.getElementById('emailLog').value == correu) {
      emailCorrecto = true;
      console.log('Hola usuari')
    }
    else{
      emailCorrecto = false;
      console.log('nope usuari');
    }

//PASSWORD LOGIN//

    if (document.getElementById('passLog').value != '' && document.getElementById('passLog').value == password) {
      passCorrect = true;
      console.log('Hola pass')

    }
    else{
      passCorrect = false;
      console.log('nope pass');
    }

    if (emailCorrecto == true && passCorrect == true) {
      document.getElementById("modalCosLog").innerHTML = "<pre>" + "\n" + 'LOGIN Exitoso' + "\n" + "\n" + 'Correu: ' + correu + "\n" + 'Password: ' + password + "</pre>";
    }
    else {
      document.getElementById("modalCosLog").innerHTML = 'Login incorrecto'
    }
}

//if emailCorrecto == true i passCorrecto == true
  //Muestra mensaje exitoso en modal
  //else Muestra mensaje Fail