$(document).ready(function() {
  var inputCode = $('#inputCode');
  var $btnVerifiNext = $('button');

  //  CREANDO FUNCION QUE VERIFICA QUE EL CÓDIGGO INGRESADO ES CORRECTO
  inputCode.on('input', function(event) {
    if ($(this).val() === localStorage.code) {
      $btnVerifiNext.attr('disabled', false);
      window.location.href = 'signup2.html';
    }
  });
});
