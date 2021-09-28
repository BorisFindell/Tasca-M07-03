let nombre;
let correu;

document.getElementById('enviar').addEventListener('click', function(){
  enviar()
})



function enviar() {
  
      document.getElementById('form').checkValidity()
      nombre = document.getElementById('nom').value
      console.log(nombre);
      correu = document.getElementById('email').value
      console.log(correu);
      pass = document.getElementById('pass').value
      console.log(pass);
      prov = document.getElementById('prov').value
      console.log(prov);
}     