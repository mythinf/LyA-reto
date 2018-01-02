$(document).ready(function() {
  var inputCode = $('#inputCode');
  var $btnVerifiNext = $('button');
  var codeValid = validation();
  function validation() {
    return Math.floor(Math.random() * 500) + 100;
  }
  //  CREANDO FUNCION QUE VERIFICA QUE EL CÓDIGGO INGRESADO ES CORRECTO
  inputCode.on('input', function(event) {
    if ($(this).val() === localStorage.code) {
      $btnVerifiNext.attr('disabled', false);
    } else {
      $btnVerifiNext.attr('disabled', true);
    }
  });
  //  DIRECCIONANDO A LA VISTA ignup2.html
  $btnVerifiNext.on('click', function() {
    event.preventDefault();
    window.location.href = 'signup2.html';
  });
});
