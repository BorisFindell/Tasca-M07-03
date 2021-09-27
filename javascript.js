
    // pass = document.getElementById('pass').value
    // console.log(pass);
    // passCheck = document.getElementById('passCheck').value
    // console.log(passCheck);
    // prov = document.getElementById('prov').value
    // console.log(prov);


// }      



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


let nombre;
let correu;

document.getElementById('enviar').addEventListener('click', function(){
  enviar()
})
function enviar() {
      nombre = document.getElementById('nom').value
      console.log(nombre);
      correu = document.getElementById('email').value
      console.log(correu);
}