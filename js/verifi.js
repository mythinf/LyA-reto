$(document).ready(function() {
  var inputCode = $('#inputCode');
  console.log(inputCode);
  //  CREANDO FUNCION QUE VERIFICA QUE EL CÓDIGGO INGRESADO ES CORRECTO
  inputCode.on('input', function(event) {
    if ($(this).val().length = 3 && $(this).val() === '') {
      alert('correcto!');
    }
  });
});
